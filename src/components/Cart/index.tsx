import { Accordion, Box, Button, Image, Text } from '@mantine/core';
import {
  IconArrowBack,
  IconCheck,
  IconMinus,
  IconPlus,
  IconReload,
  IconTrash,
} from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { useAnimate } from 'framer-motion';
import { IProduct } from 'src/types';
import { addQuantity, reduceQuantity, removeItem } from '../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import Summary from './Summary';
import CartItem from '../common/CartItem';

const CartRoot = () => {
  const [cartItemScope, animate] = useAnimate();
  const [buttonScope, buttonScopeAnimate] = useAnimate();
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
    await buttonScopeAnimate(
      buttonScope.current,
      {
        width: '2.75rem',
        padding: 0,
        borderRadius: '2.75rem',
      },
      { duration: 0.6, ease: 'easeInOut' },
    );
    router.push('/checkout');
  };

  return (
    <Box>
      <Text className="text-2xl font-semibold mb-6">Your Shopping Bag</Text>
      <Summary buttonRef={buttonScope} gotoCart={gotoCart} showIcon={showIcon} />
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
        <Text className="flex flex-row mr-2 items-center">
          <IconReload color="blue" height={18} />
          <Text className="text-sm text-blue">Update Shopping Cart</Text>
        </Text>
        <Text>|</Text>
        <Text className="ml-2">
          <Text className="text-sm text-dark-grey">Clear Shopping Cart</Text>
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
