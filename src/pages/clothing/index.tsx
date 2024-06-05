import Head from 'next/head';

import ClothingRoot from '../../components/Clothing';
import AppWrapper from '../../components/layouts/AppWrapper';
import CONST_VALUE from '../../data/constants';
import { NextPageWithLayout } from '../../types';

const Clothing: NextPageWithLayout = () => (
  <div>
    <Head>
      <title>{CONST_VALUE.pageTitle.clothing}</title>
      <meta name="Clothing" content="Generated by Participle Plus" />
    </Head>
    <ClothingRoot />
  </div>
);

Clothing.getLayout = page => <AppWrapper>{page}</AppWrapper>;
export default Clothing;
