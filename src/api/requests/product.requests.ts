import { ApiResponse, IProduct } from '../../types';
import http from '../http';

const BASE_URL = '/api/product';

export type LikeProductRequest = {
  productId: string;
  like: boolean;
};

export const fetchAllProducts = async ({
  featured,
  highlight,
}: {
  featured?: boolean;
  highlight?: boolean;
}) => {
  const response = await http.get<ApiResponse<IProduct[]>>(
    `${BASE_URL}?featured=${featured || ''}&highlight=${highlight || ''}`,
  );
  return response;
};
export const fetchProduct = async (productId?: string) => {
  const response = await http.get<ApiResponse<IProduct>>(`${BASE_URL}/${productId}`);
  return response;
};
