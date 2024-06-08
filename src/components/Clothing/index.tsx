import { Box, Paper, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import { useAnimate } from 'framer-motion';
import { useProducts } from '../../api/queries/product.queries';
import Card from '../common/Card';

const ClothingRoot = () => {
  const [, animate] = useAnimate();
  const products = useProducts({});
  const refs = useRef([React.createRef<HTMLDivElement>()]);

  // const refs = useRef(
  //   products.data
  //     ? products.data.map(() => React.createRef<HTMLDivElement>())
  //     : [React.createRef<HTMLDivElement>()],
  // );
  if (products.data) {
    refs.current = products.data.map(() => React.createRef<HTMLDivElement>());
  }
  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (ref.current) {
        animate(
          ref.current,
          { opacity: [0, 1], x: [20, 0] },
          { duration: 0.5, delay: index * 0.2 },
        );
      }
    });
  }, [products.data]);

  return (
    <Paper>
      <SimpleGrid cols={{ base: 2, md: 4 }}>
        {products.data &&
          products.data.map((item, index) => (
            <Box key={item._id} ref={refs.current[index]}>
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
