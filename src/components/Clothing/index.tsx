import { Box, Paper, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { useProducts } from '../../api/queries/product.queries';
import Card from '../common/Card';

const ClothingRoot = () => {
  const products = useProducts({});
  return (
    <Paper>
      <SimpleGrid cols={{ base: 2, md: 4 }}>
        {products.data &&
          products.data.map(item => (
            <Box key={item._id}>
              <Link href={`/clothing/${item._id}`}>
                <Card key={item._id} url={item.image_url} name={item.name} price={item.price} />
              </Link>
            </Box>
          ))}
      </SimpleGrid>
    </Paper>
  );
};

export default ClothingRoot;
