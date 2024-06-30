import { Stepper, rem } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconMailOpened, IconUserCheck } from '@tabler/icons-react';
import React, { useState } from 'react';
import { displayToast } from '../../utils/toast';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import { useCreateOrder } from '../../api/queries/order.queries';
import ShippingMethodRoot from './Shipping';
import PaymentMethodRoot from './Payments';

export type Shipping_method = {
  name: string;
  label: string;
  amount: number;
};

const shipping_methods = [
  {
    name: 'free',
    label: 'Standard FREE (5 - 7 days)',
    amount: 0,
  },
  {
    name: 'ekart',
    label: 'EKart (3- 5 days)',
    amount: 300,
  },
  {
    name: 'delhivery',
    label: 'Delhivery (1 - 2 days)',
    amount: 400,
  },
];

const CheckoutRoot = () => {
  const form = useForm();
  const [active, setActive] = useState(0);
  const [paymentType, setPaymentType] = useState('cod');
  const [shippingMethod, setShippingMethod] = useState(shipping_methods[0]);
  const cartData = useAppSelector((state: RootState) => state.cart);
  const createOrder = useCreateOrder();

  const handleSetShippingMethod = (index: number) => {
    setShippingMethod(shipping_methods[index]);
  };

  const handleOrderBooking = () => {
    const formData = form.getValues();
    const productInfo = cartData.items.map(item => ({
      productId: item._id,
      quantity: item.quantity,
    }));
    createOrder.mutate(
      {
        total: cartData.total + shippingMethod.amount,
        address: formData.address,
        shippingMethod: shippingMethod.name,
        paymentType,
        // info: "free",
        products: productInfo,
      },
      {
        onSuccess: async () => {
          displayToast('success', 'Your order has been booked');
          // router.push('/');
        },
      },
    );
  };
  return (
    <Stepper
      className="mb-8"
      color="dark"
      active={active}
      onStepClick={setActive}
      iconPosition="left"
      classNames={{
        step: 'p-0',
        steps: 'items-center',
        separator: 'mx-[-0.4rem] translate-y-[-1rem]',
      }}
    >
      <Stepper.Step
        classNames={{
          step: 'flex-col',
          stepBody: 'm-0 py-2',
        }}
        label="Shipping"
        icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />}
      >
        <ShippingMethodRoot
          shipping_methods={shipping_methods}
          setActive={setActive}
          cartData={cartData}
          handleSetShippingMethod={handleSetShippingMethod}
          shippingMethod={shippingMethod}
        />
      </Stepper.Step>
      <Stepper.Step
        classNames={{
          step: 'flex-col justify-center',
          stepBody: 'm-0 py-2',
        }}
        label="Payments"
        icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />}
      >
        <PaymentMethodRoot
          cartData={cartData}
          handleOrderBooking={handleOrderBooking}
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />
      </Stepper.Step>
    </Stepper>
  );
};

export default CheckoutRoot;
