import { Box, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

import { addItem } from '../../../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { IProduct } from '../../../../types';
import { convertToPercentage } from '../../../../utils';

interface Props {
  details: IProduct;
}

const AddToBag = ({ details }: Props) => {
  const cartDetails = useAppSelector((state: RootState) => state.cart);
  const router = useRouter();
  const isItemOnCart = () => cartDetails.items.findIndex(item => item._id === details._id) > -1;

  const dispatch = useAppDispatch();
  const handleAddToBag = () => {
    dispatch(addItem(details));
  };
  const goToCart = () => {
    router.push('/cart');
  };
  return (
    <Box>
      <p className="my-2 text-sm font-light">
        {details.discount &&
          `${convertToPercentage(details.discount_percent)}% off on all products`}
      </p>
      <p className="my-2 text-sm font-light">
        {details.free && 'Free Shipping across all Indian Products'}
      </p>
      {isItemOnCart() ? (
        <Button onClick={goToCart} className="bg-dark w-full mt-2" variant="filled" color="dark">
          Go to Cart
        </Button>
      ) : (
        <Button
          onClick={handleAddToBag}
          className="bg-dark w-full mt-2"
          variant="filled"
          color="dark"
        >
          Add To Bag
        </Button>
      )}
    </Box>
  );
};

export default AddToBag;
