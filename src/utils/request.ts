import Taro from '@tarojs/taro';
import { GATEWAY_URL, getCurEnv } from './env';
import { Result } from './interface';

const headUrl = GATEWAY_URL[getCurEnv()] || GATEWAY_URL.development;

const api = (config) => {
  const { url, data, header, method } = config;
  return new Promise((resolve, reject) => {
    if (!url) {
      // 若请求地址无效，直接抛出错误
      reject(new Error('无效的请求地址，请检查后再试!'));
      return;
    }
    Taro.request({
      url: headUrl + url,
      data,
      method,
      timeout: 500000,
      enableHttp2: true,
      forceCellularNetwork: true,
      mode: 'cors',
      header: {
        'content-type': 'application/json', // 默认值
        Authorization: 'Bearer 3168d3ba-c1d4-44bf-b990-0e3c231fdff3', // 后续从缓存里面取，暂时写死
        ...header,
      },
      success: (res) => {
        const { code } = res?.data || {};
        if (code && code !== '0') {
          reject(res.data);
        } else {
          resolve(res.data || {});
        }
      },
      fail: (res) => {
        reject(res);
      },
    });
  });
};

export const apiGet = function <U>(url: string) {
  return api({
    url,
    method: 'GET',
  }) as unknown as Promise<Result<U>>;
};

export const apiPost = <T, U>(url: string, data: T) => {
  return api({
    url,
    method: 'POST',
    data,
  }) as unknown as Promise<Result<U>>;
};
export const apiPut = <T, U>(url: string, data: T) => {
  return api({
    url,
    method: 'PUT',
    data,
  }) as unknown as Promise<Result<U>>;
};
export const apiDelete = <T, U>(url: string, data: T) => {
  return api({
    url,
    method: 'DELETE',
    data,
  }) as unknown as Promise<Result<U>>;
};
