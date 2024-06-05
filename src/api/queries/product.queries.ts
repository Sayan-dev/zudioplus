import { useQuery } from '@tanstack/react-query';

import { fetchAllProducts, fetchProduct } from '../requests/product.requests';

export const useProduct = (productId?: string) =>
  useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const res = await fetchProduct(productId);
      return res?.data;
    },
  });

export const useProducts = ({ featured, highlight }: { featured?: boolean; highlight?: boolean }) =>
  useQuery({
    queryKey: ['products', (featured && 1) || (highlight && 2)],
    queryFn: async () => {
      const res = await fetchAllProducts({ featured, highlight });
      return res?.data;
    },
  });
