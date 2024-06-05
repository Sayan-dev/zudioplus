import { Box } from '@mantine/core';
import React from 'react';

import { IProduct } from '../../../../types';
import { getActualAmount } from '../../../../utils';

interface Props {
  details: IProduct;
}

const ItemTitle = ({ details: { name, price } }: Props) => (
  <Box className="items-center border border-b-background-light border-t-0 border-x-0 py-5 flex flex-row justify-between md:justify-end md:flex-row-reverse">
    <Box className="flex flex-row justify-between w-full">
      <p className="mr-5 text-lg font-bold">{name}</p>
      <p className=" text-lg font-thin">$ {getActualAmount(price)}</p>
    </Box>

    {/* <Button variant="outline" onClick={handleSelectLike} className="mr-5">
        {like ? 'Liked' : 'Like'}
      </Button> */}
  </Box>
);

export default ItemTitle;
