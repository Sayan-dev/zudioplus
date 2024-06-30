import { Box, Image, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { useProducts } from '../../api/queries/product.queries';

const Hero = () => {
  const products = useProducts({ highlight: true });

  return (
    <Box className="border-b-[1px] border-b-faded-dark py-10">
      {products.data && products.data.length >= 2 && (
        <Box className="grid md:grid-cols-2">
          <Box className="md:pr-10">
            <Image alt={products.data[0].name} src={products.data[0].image_url} />
            <Box className="py-5 flex flex-col items-center">
              <Text className="text-2xl md:text-lg font-semibold">LEANING IN</Text>
              <Link className="text-md md:text-xs underline underline-offset-4" href="/clothing">
                SHOP DRESSES
              </Link>
            </Box>
          </Box>
          <Box className="md:pl-10">
            {products.data[1] && (
              <Image alt={products.data[1].name} src={products.data[1].image_url} />
            )}
            <Box className="py-5 flex flex-col items-center">
              <Text className="text-2xl md:text-lg font-semibold">All Over Velvet</Text>
              <Link className="text-md md:text-xs underline underline-offset-4" href="/clothing">
                Shop Back-In-Stock
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Hero;
