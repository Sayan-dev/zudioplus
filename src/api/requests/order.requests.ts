import { ApiResponse } from '../../types';
import http from '../http';

const BASE_URL = '/api/order';

export type OrderRequest = {
  products: OrderItemRequest[];
  total: number;
  address: string;
};

export type OrderItemRequest = {
  productId: string;
  quantity: number;
};

export const createOrder = async (data: OrderRequest) => {
  const response = await http.post<ApiResponse<null>>(`${BASE_URL}`, data);
  return response;
};
export const getAllOrders = async () => {
  const response = await http.get<ApiResponse<null>>(`${BASE_URL}`);
  return response;
};
