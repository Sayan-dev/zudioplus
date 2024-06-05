import { Accordion, Box, Button, Image, Text } from '@mantine/core';
import { IconArrowBack, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

import { removeItem } from '../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const CartRoot = () => {
  const cartDetails = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const removeHandler = (itemId: string) => {
    // New Build
    dispatch(removeItem(itemId));
  };

  return (
    <Box className="pb-20">
      <Text className="text-2xl font-semibold mb-6">Your Shopping Bag</Text>
      <Box className="border-2 border-dark-grey px-2 py-5 mb-8">
        <Box className="py-2 border-b-2 border-light">
          <Text className="text-md font-semibold ">Summary</Text>
        </Box>
        <Accordion unstyled defaultValue="Tax">
          <Accordion.Item value="Tax">
            <Accordion.Control className="border-b-2 border-light flex items-center w-full flex-row-reverse justify-between py-5 font-light">
              <Text className="text-md">Estimate Shipping and Tax</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Box className="flex flex-col py-4">
                <Box className="flex justify-between">
                  <Text className="text-sm font-medium text-dark-grey">Subtotal: </Text>
                  <Text className="text-sm font-medium text-dark-grey">$ 300.00 </Text>
                </Box>
                <Box className="flex justify-between mt-2">
                  <Text className="text-sm font-medium text-dark-grey">Shipping Price:</Text>
                  <Text className="text-sm font-medium text-dark-grey">$ 0.00</Text>
                </Box>
                <Box className="flex justify-between py-2 mt-4 border-b-2">
                  <Text className="text-sm font-medium text-dark-grey">Order Total:</Text>
                  <Text className="text-lg font-semibold ">$ 156.00</Text>
                </Box>
              </Box>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Accordion unstyled defaultValue="Discount">
          <Accordion.Item value="Discount">
            <Accordion.Control className="border-b-2 border-light flex items-center w-full flex-row-reverse justify-between py-5 font-light">
              <Text className="text-md">Apply Discount Code</Text>
            </Accordion.Control>
            <Accordion.Panel />
          </Accordion.Item>
        </Accordion>
        <Button fullWidth variant="filled" color="dark" className="p-4 h-auto">
          Proceed to Checkout
        </Button>
      </Box>
      <Box className="border-b-[1px] border-light-grey">
        {cartDetails.items.length > 0 ? (
          cartDetails.items.map(details => (
            <Box key={details._id} className="flex flex-row mb-5">
              <Box className="w-[30vw] mr-5">
                <Image src={details.image_url} alt="Image" />
              </Box>
              <Box className="flex flex-row justify-between w-full">
                <Box className="flex flex-col mr-5">
                  <Text className=" mb-1 font-bold">{details.name}</Text>
                  <Box className="mb-1 font-light text-grey leading-6">
                    <Text className="text-sm text-dark-grey">Color: {details.text.color}</Text>
                    <Text className="text-sm text-dark-grey">Size: {details.selected_size}</Text>
                  </Box>
                  <Text className="text-sm text-dark-grey"> Qty: 1</Text>
                </Box>
                <Box className="flex flex-col items-center justify-between pb-1">
                  <Box>
                    <Text className="text-md text-red 	font-bold">$ {details.price}</Text>
                    <Text className="text-sm text-dark-grey line-through">$ {details.price}</Text>
                  </Box>
                  <IconTrash height={24} onClick={() => removeHandler(details._id)} />
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Box className="py-5 flex flex-row justify-center">
            <Text className="text-dark-grey text-xl"> No Items added to Cart</Text>
          </Box>
        )}
      </Box>
      <Box className="py-4">
        <Link className="flex flex-row" href="/clothing">
          <IconArrowBack height={20} />
          <Text className="text-sm text-dark-grey">Continue Shopping</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default CartRoot;
