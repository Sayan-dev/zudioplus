import { Accordion, Box, Button, Drawer, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

import ItemInfo from './ItemInfo';
import { closeDrawer } from '../../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import Svgclose from '../../svg/Svgclose';

const CartDrawer = () => {
  const { open_drawer, items } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleCloseDrawer = () => {
    dispatch(closeDrawer());
  };

  const handleNavigateToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <Drawer
      classNames={{
        close: 'hidden',
        header: 'hidden',
      }}
      onClose={handleCloseDrawer}
      opened={open_drawer}
      position="right"
      size="90vw"
    >
      <Box className="flex flex-col items-stretch h-full">
        <Box>
          <Box className="border-b-[1px] border-light flex items-center justify-between py-5">
            <span className="text-2xl">Order Summary</span>
            <Box onClick={handleCloseDrawer}>
              <Svgclose />
            </Box>
          </Box>
          <Box className="py-5">
            <Box className="flex justify-between">
              <span>Subtotal: </span>
              <span>$ 300.00 </span>
            </Box>
            <Box className="flex justify-between">
              <span>Shipping Price:</span>
              <span>$0.00</span>
            </Box>
          </Box>

          <Box className="">
            <Accordion unstyled defaultValue="Items">
              <Accordion.Item value="Items">
                <Accordion.Control className="border-b-[1px] border-light flex items-center w-full flex-row-reverse justify-between py-5 font-light">
                  <span className="text-xl">{items.length} Items in Cart</span>
                </Accordion.Control>
                <Accordion.Panel>
                  <Box className="flex flex-col py-5">
                    {items.map(item => (
                      <ItemInfo key={item._id} details={item} />
                    ))}
                  </Box>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Box>

          <Box className="border-b-[1px] border-light flex items-center justify-between py-5">
            <Text>Ship To:</Text>
            <Text>Edit</Text>
          </Box>
          <Box className="border-b-[1px] border-light flex items-center justify-between py-5">
            <Text>Shipping Method:</Text>
            <Text>Edit</Text>
          </Box>
        </Box>
        <Box className="py-5">
          <Button onClick={handleNavigateToCheckout} className="p-5 h-auto" fullWidth color="dark">
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
