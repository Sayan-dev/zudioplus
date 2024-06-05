import { Box, Image, Text } from '@mantine/core';
import React from 'react';

import { getActualAmount } from '../../../utils';

type ImageCardProps = {
  url?: string;
  name: string;
  price: number;
};

const Card = ({ url, name, price }: ImageCardProps) => {
  const amount = getActualAmount(price);
  return (
    <Box className="w-full">
      <Image alt={name} src={url} className="" />
      <Box className="flex flex-row justify-between items-center py-4">
        <Text className="font-body text-xs w-[70%] max-h-10 text-ellipsis overflow-hidden">
          {name}
        </Text>
        <Text className="font-medium text-xs">$ {amount}</Text>
      </Box>
    </Box>
  );
};

export default Card;
