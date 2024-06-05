import { Box, Grid } from '@mantine/core';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { useProduct } from '../../../api/queries/product.queries';
import DetailImages from '../../../components/Clothing/DetailImages';
import Details from '../../../components/Clothing/Details';
import Featured from '../../../components/common/Featured';
import AppWrapper from '../../../components/layouts/AppWrapper';
import { NextPageWithLayout } from '../../../types';

const ProductDetails: NextPageWithLayout<PageProps> = ({ query }) => {
  const product = useProduct(query);
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
              <Grid.Col span={{ xs: 12, md: 7 }}>
                {product.data.image_url && <DetailImages url={product.data.image_url} />}
              </Grid.Col>
              <Grid.Col span={{ xs: 12, md: 5 }}>
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
