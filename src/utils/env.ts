export const enum ENVS {
  dev = 'development', // 开发环境
  staging = 'staging', // staging环境
  uat = 'uat', // uat环境
  pp = 'preproduction', // 预生产环境
  pro = 'production', // 生产环境
}
/**
 * 根据document.body attribute version判断当前环境
 */
export const getCurEnv = () => {
  const domVersion = '';

  if (/_staging_/.test(domVersion)) {
    return ENVS.staging;
  }
  if (/_uat_/.test(domVersion)) {
    return ENVS.uat;
  }
  if (/_release_/.test(domVersion)) {
    return ENVS.pp;
  }
  if (/_master_/.test(domVersion)) {
    return ENVS.pro;
  }
  return ENVS.dev;
};

export const GATEWAY_URL = {
  development: 'https://gate.dev.porsche-preview.cn',
  staging: 'https://gate.staging.porsche-preview.cn',
  uat: 'https://gate.porsche-preview.cn',
  preproduction: 'https://gate.porsche-preview.cn',
  production: 'https://gate.porsche.cn',
};

export const ERROR_MESSAGE = [
  {
    en: ['gateway system error'],
    cn: '网关超时，请稍后再试。',
  },
  {
    en: ['null', 'undefined', 'internet error', 'internal_error', 'no message available'],
    cn: '服务异常，请稍后再试。',
  },
  {
    en: ['network error'],
    cn: '网络连接失败，请检查网络后重试。',
  },
];
