import { Box, Text } from '@mantine/core';
import { IconArrowBack, IconReload } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { useAnimate } from 'framer-motion';
import { IProduct } from '../../types';
import {
  addQuantity,
  reduceQuantity,
  removeAllItems,
  removeItem,
} from '../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import Summary from './Summary';
import CartItem from '../common/CartItem';

const CartRoot = () => {
  const [cartItemScope, animate] = useAnimate();
  const [showIcon, setShowIcon] = useState(false);
  const cartDetails = useAppSelector((state: RootState) => state.cart);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleAddItem = (item: IProduct) => {
    dispatch(addQuantity(item));
  };
  const handleSubItem = (item: IProduct) => {
    dispatch(reduceQuantity(item));
  };
  const removeHandler = async (item: IProduct) => {
    // New Build
    await animate(
      cartItemScope.current,
      {
        opacity: [1, 0],
        x: [0, -20],
      },
      { duration: 0.3, ease: 'easeOut' },
    );
    dispatch(removeItem(item));
  };

  const gotoCart = async () => {
    setShowIcon(true);

    router.push('/checkout');
  };

  const handleRemoveAll = () => {
    dispatch(removeAllItems());
  };

  return (
    <Box>
      <Text className="text-2xl font-semibold mb-6">Your Shopping Bag</Text>
      <Summary
        gotoCart={gotoCart}
        showIcon={showIcon}
        summary={{ subtotal: cartDetails.total, shippingPrice: 0, orderTotal: cartDetails.total }}
      />
      <Box className="border-b-[1px] border-dark-grey">
        {cartDetails.items.length > 0 ? (
          cartDetails.items.map(details => (
            <CartItem
              details={details}
              handleAddItem={handleAddItem}
              handleSubItem={handleSubItem}
              removeHandler={removeHandler}
              cartItemRef={cartItemScope}
            />
          ))
        ) : (
          <Box className="py-5 flex flex-row justify-center">
            <Text className="text-dark-grey text-xl"> No Items added to Cart</Text>
          </Box>
        )}
      </Box>
      <Box className="py-4 flex flex-row items-center">
        <Box className="flex flex-row mr-2 items-center">
          <IconReload color="blue" height={18} />
          <Text className="text-sm text-blue">Update Shopping Cart</Text>
        </Box>
        <Text>|</Text>
        <Text onClick={handleRemoveAll} className="text-sm text-red ml-2">
          Clear Shopping Cart
        </Text>
      </Box>
      <Box className="py-4 flex flex-row items-center">
        <Link className="flex flex-row items-center" href="/clothing">
          <IconArrowBack height={18} />
          <Text className="text-sm text-dark-grey">Continue Shopping</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default CartRoot;
