import { Box, CheckIcon, Radio, Text } from '@mantine/core';
import { getActualAmount } from '../../../utils';
import { Shipping_method } from '..';

type ShippingMethodProps = {
  method: Shipping_method;
  shippingMethod: string;
  onChange: () => void;
};
const ShippingMethod = ({ method, shippingMethod, onChange }: ShippingMethodProps) => {
  const shippingData: Shipping_method = JSON.parse(shippingMethod);
  return (
    <Radio
      color="dark"
      name={shippingData.name}
      checked={shippingData.name === method.name}
      icon={CheckIcon}
      value={JSON.stringify(method)}
      onChange={onChange}
      label={
        <Box className="grid grid-cols-4">
          <Text>$ {getActualAmount(method.amount)}</Text>
          <Text className="col-span-3">{method.label}</Text>
        </Box>
      }
      classNames={{
        labelWrapper: 'w-full ',
        root: 'my-4',
      }}
    />
  );
};

export default ShippingMethod;
