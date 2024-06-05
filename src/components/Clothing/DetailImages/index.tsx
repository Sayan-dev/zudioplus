import { Box, Image } from '@mantine/core';
import React from 'react';

type Props = {
  url: string;
};

const DetailImages = ({ url }: Props) => (
  <Box>
    <Image alt="image" className="w-full" src={url} />
  </Box>
);

export default DetailImages;
