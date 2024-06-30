import { Box, Button, CheckIcon, Radio, Text, Textarea } from '@mantine/core';
import React from 'react';
import { getActualAmount } from '../../../utils';
import ShippingMethod from './ShippingMethod';
import { Shipping_method } from '..';

type ShippingMethodRootProps = {
  setActive: (data: number) => void;
  cartData: any;
  shippingMethod: Shipping_method;
  handleSetShippingMethod: (data: number) => void;
  shipping_methods: Shipping_method[];
};

const ShippingMethodRoot = ({
  setActive,
  cartData,
  shippingMethod,
  handleSetShippingMethod,
  shipping_methods,
}: ShippingMethodRootProps) => (
  <>
    <Box className="border-b-[1px] py-5">
      <Box className="flex flex-row justify-between">
        <Box className="flex flex-col">
          <Text>Estimated Total</Text>
          <Text>$ {getActualAmount(cartData.total + shippingMethod.amount)}</Text>
        </Box>
        <Box className="flex border-2 border-dark-grey px-5 items-center">
          {cartData.items.length} {cartData.items.length > 1 ? 'items' : 'item'}
        </Box>
      </Box>
    </Box>
    <Box className="border-b-[1px] border-dark-grey pt-5 pb-2 my-5">
      <Box className="flex flex-row justify-between">
        <Box className="flex flex-col">
          <Text>Shipping Address</Text>
        </Box>
      </Box>
    </Box>
    <Box>
      <Textarea
        classNames={{
          root: 'border-2',
          input: 'h-32 p-2 text-md',
        }}
      />
    </Box>
    <Box className="border-b-[1px] border-dark-grey pt-5 pb-2 mt-5">
      <Box className="flex flex-row justify-between">
        <Box className="flex flex-col">
          <Text>Shipping Methods</Text>
        </Box>
      </Box>
    </Box>
    <Box className="py-6">
      {shipping_methods.map((method, index) => (
        <ShippingMethod
          onChange={() => handleSetShippingMethod(index)}
          shippingMethod={JSON.stringify(shippingMethod)}
          method={method}
          key={method.name}
        />
      ))}
    </Box>
    <Box className="border-b-[1px] border-dark-grey mb-8 ">
      <Box className="flex flex-row justify-between">
        <Box className="flex flex-col">
          <Text>In-Store Pickup</Text>
        </Box>
      </Box>
      <Radio
        classNames={{
          root: 'pt-4 pb-8',
        }}
        icon={CheckIcon}
        color="dark"
        name="instore"
        value="instore"
        checked
        label="I want to pickup from nearest store"
      />
    </Box>
    <Button
      onClick={() => setActive(1)}
      variant="filled"
      color="dark"
      fullWidth
      className="mb-8 h-auto p-4 text-md"
    >
      Next
    </Button>
  </>
);

export default ShippingMethodRoot;
