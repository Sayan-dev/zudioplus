import { Box, SimpleGrid, Text } from '@mantine/core';
import React from 'react';

import Card from './Card';
import { useProducts } from '../../api/queries/product.queries';

const Featured = () => {
  const products = useProducts({ featured: true });

  return (
    <Box>
      <Text className="text-xl font-semibold text-center py-5">FEATURED</Text>
      <SimpleGrid cols={{ base: 2, md: 4 }}>
        {products.data &&
          products.data.map(item => (
            <Box key={item._id}>
              <Card url={item.image_url} name={item.name} price={item.price} />
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Featured;
