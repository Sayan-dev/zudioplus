import { useMutation, useQuery } from '@tanstack/react-query';
import { displayToast } from '../../utils/toast';
import { ApiResponseError } from '../http';
import { OrderRequest, createOrder, getAllOrders } from '../requests/order.requests';

export const useCreateOrder = () =>
  useMutation<null, ApiResponseError, OrderRequest>({
    mutationFn: async data => {
      const res = await createOrder(data);
      return res.data;
    },
    onError: err => {
      displayToast('error', err?.message || 'Something went wrong');
    },
  });

export const getOrders = () =>
  useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await getAllOrders();
      return res?.data;
    },
  });
