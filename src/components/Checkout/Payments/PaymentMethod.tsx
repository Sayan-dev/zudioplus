import { Box, CheckIcon, Radio, Text } from '@mantine/core';
import React from 'react';

type PaymentMethodProps = {
  name: string;
  paymentMethod: string;
  value: string;
  onChange: () => void;
  paymentLabel: string;
};

const PaymentMethod = ({
  name,
  paymentMethod,
  value,
  onChange,
  paymentLabel,
}: PaymentMethodProps) => (
  <Radio
    color="dark"
    name={name}
    checked={paymentMethod === name}
    icon={CheckIcon}
    value={value}
    onChange={onChange}
    label={
      <Box className="grid grid-cols-4">
        <Text className="col-span-3">{paymentLabel}</Text>
      </Box>
    }
    classNames={{
      labelWrapper: 'w-full ',
      root: 'my-4',
    }}
  />
);

export default PaymentMethod;
