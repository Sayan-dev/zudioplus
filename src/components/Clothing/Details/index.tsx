import { Box } from '@mantine/core';
import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { addItem } from '../../../redux/features/cartSlice';
import Detail from './Detail';
import ItemTitle from './Title';
import { AddToBag, Size } from './Utility';
import { IProduct } from '../../../types';

interface Props {
  details: IProduct;
}

const Details = ({ details }: Props) => {
  const cartDetails = useAppSelector((state: RootState) => state.cart);
  const [size, setSize] = useState(details.selected_size || '20');

  const handleSizeControl = (selectedSize: string) => {
    setSize(selectedSize);
  };

  const router = useRouter();
  const isItemOnCart = () => cartDetails.items.findIndex(item => item._id === details._id) > -1;

  const dispatch = useAppDispatch();
  const handleAddToBag = () => {
    dispatch(addItem({ ...details, selected_size: size }));
  };
  const goToCart = () => {
    router.push('/cart');
  };
  return (
    <Box className="h-full">
      <ItemTitle details={details} />
      <Box className="flex flex-col md:flex-col-reverse justify-between">
        <Box className="border border-b-background-light border-t-0 border-x-0 py-5">
          <Size
            className="mb-5"
            selectSize={handleSizeControl}
            size={details?.size}
            selectedSize={size}
          />
          <AddToBag
            details={details}
            isItemOnCart={isItemOnCart}
            handleAddToBag={handleAddToBag}
            goToCart={goToCart}
          />
        </Box>
        <Detail details={details?.text} />
      </Box>
    </Box>
  );
};

export default Details;
