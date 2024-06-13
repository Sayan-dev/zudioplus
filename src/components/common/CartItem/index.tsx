import { Box, Button, Image, Text } from '@mantine/core';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import React, { MutableRefObject } from 'react';
import type { IProduct } from 'src/types';

type CartItemProps = {
  details: IProduct;
  cartItemRef: MutableRefObject<HTMLDivElement | null>;
  handleSubItem: (details: IProduct) => void;
  handleAddItem: (details: IProduct) => void;
  removeHandler: (details: IProduct) => void;
};

const CartItem = ({
  cartItemRef,
  details,
  handleSubItem,
  handleAddItem,
  removeHandler,
}: CartItemProps) => (
  <Box ref={cartItemRef} key={details._id} className="flex flex-row mb-5">
    <Box className="w-[30vw] mr-5">
      <Image src={details.image_url} alt="Image" />
    </Box>
    <Box className="flex flex-row justify-between w-full">
      <Box className="flex flex-col mr-5 justify-between">
        <Text className=" mb-1 font-bold">{details.name}</Text>
        <Box className="mb-1 font-light text-grey leading-6">
          <Text className="text-sm text-dark-grey">Color: {details.text.color}</Text>
          <Text className="text-sm text-dark-grey">Size: {details.selected_size}</Text>
        </Box>
        <Box className="flex flex-row justify-between">
          <Button color="dark" size="compact-xs">
            <IconMinus onClick={() => handleSubItem(details)} height={16} />
          </Button>
          <Text>{details.quantity}</Text>
          <Button color="dark" size="compact-xs">
            <IconPlus onClick={() => handleAddItem(details)} height={16} />
          </Button>
        </Box>
      </Box>
      <Box className="flex flex-col items-center justify-between pb-1">
        <Box>
          <Text className="text-md text-red 	font-bold">$ {details.price}</Text>
          <Text className="text-sm text-dark-grey line-through">$ {details.price}</Text>
        </Box>
        <IconTrash height={24} onClick={() => removeHandler(details)} />
      </Box>
    </Box>
  </Box>
);

export default CartItem;
