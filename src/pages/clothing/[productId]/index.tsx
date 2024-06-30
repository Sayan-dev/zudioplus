import { Box, Grid } from '@mantine/core';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

import { useAnimate } from 'framer-motion';
import { useProduct } from '../../../api/queries/product.queries';
import DetailImages from '../../../components/Clothing/DetailImages';
import Details from '../../../components/Clothing/Details';
import Featured from '../../../components/common/Featured';
import AppWrapper from '../../../components/layouts/AppWrapper';
import { NextPageWithLayout } from '../../../types';

const ProductDetails: NextPageWithLayout<PageProps> = ({ query }) => {
  const [scope, animate] = useAnimate();
  const product = useProduct(query);
  useEffect(() => {
    if (product.data && product.data.image_url) {
      animate(scope.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: 'easeIn' });
    }
  }, [product.data]);

  return (
    <div>
      <Head>
        <title>{product.data?.name}</title>
        <meta name={product.data?.name} content={product.data?.description} />
      </Head>
      <Box>
        {product.data && (
          <>
            <Grid>
              <Grid.Col span={{ xs: 12, md: 6 }}>
                <Box ref={scope}>
                  {product.data.image_url && <DetailImages url={product.data.image_url} />}
                </Box>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, md: 6 }}>
                <Details details={product.data} />
              </Grid.Col>
            </Grid>
            <Featured />
          </>
        )}
      </Box>
    </div>
  );
};

interface PageProps {
  query: string;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
  const { params } = context;
  const query = params?.productId as string; // Type assertion

  return {
    props: {
      query,
    },
  };
};

ProductDetails.getLayout = page => <AppWrapper>{page}</AppWrapper>;

export default ProductDetails;
