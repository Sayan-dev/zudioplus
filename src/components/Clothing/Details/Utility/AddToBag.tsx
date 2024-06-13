import { Box, Button } from '@mantine/core';
import React from 'react';

import { IProduct } from '../../../../types';
import { convertToPercentage } from '../../../../utils';

interface Props {
  details: IProduct;
  isItemOnCart: () => boolean;
  handleAddToBag: () => void;
  goToCart: () => void;
}

const AddToBag = ({ details, isItemOnCart, handleAddToBag, goToCart }: Props) => (
  <Box>
    <p className="my-2 text-sm font-light">
      {details.discount && `${convertToPercentage(details.discount_percent)}% off on all products`}
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

export default AddToBag;
