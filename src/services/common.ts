import { apiGet } from '@/utils/request';

export const getModelCode = () => {
  return apiGet('drs-customer-service/v1/drive/order/getModelCode'); // 接口做了限制，所以访问有问题
};
