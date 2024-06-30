import { Box, Button, Text } from '@mantine/core';
import React from 'react';
import { getActualAmount } from '../../../utils';
import PaymentMethod from './PaymentMethod';

const payment_methods = [
  {
    name: 'cod',
    label: 'Cash on Delivery',
  },
  {
    name: 'gateway',
    label: 'Payment Gateway',
  },
];

type PaymentMethodRooty = {
  cartData: any;
  setPaymentType: (data: string) => void;
  paymentType: string;
  handleOrderBooking: () => void;
};

const PaymentMethodRoot = ({
  cartData,
  setPaymentType,
  paymentType,
  handleOrderBooking,
}: PaymentMethodRooty) => (
  <Box>
    <Box className="border-b-[1px] py-5">
      <Box className="flex flex-row justify-between">
        <Box className="flex flex-col">
          <Text>Estimated Total</Text>
          <Text>$ {getActualAmount(cartData.total)}</Text>
        </Box>
        <Box className="flex border-2 border-dark-grey px-5 items-center">
          {cartData.items.length} items
        </Box>
      </Box>
    </Box>
    <Box className="border-b-[1px] border-dark-grey pt-5 pb-2 mt-5">
      <Box className="flex flex-row justify-between">
        <Box className="flex flex-col">
          <Text>Payment Method</Text>
        </Box>
      </Box>
    </Box>
    <Box>
      {payment_methods.map(method => (
        <PaymentMethod
          name={method.name}
          onChange={() => setPaymentType(method.name)}
          paymentLabel={method.label}
          paymentMethod={paymentType}
          value={method.name}
        />
      ))}
    </Box>
    <Box className="h-[30vh]">
      {paymentType === 'gateway' && (
        <Box className="flex text-dark-grey text-2xl justify-center items-center w-[90%] text-center m-auto h-full">
          You will be redirected to Razorpay to complete payment
        </Box>
      )}
      {paymentType === 'cod' && (
        <Box className="flex text-dark-grey text-2xl justify-center items-center w-[90%] text-center m-auto h-full">
          Thank you for purchasing from us
        </Box>
      )}
    </Box>
    <Box>
      <Button onClick={handleOrderBooking} fullWidth color="dark" className="h-auto p-4">
        Continue
      </Button>
    </Box>
  </Box>
);

export default PaymentMethodRoot;
