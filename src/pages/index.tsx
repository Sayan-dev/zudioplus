import Head from 'next/head';

import LandingRoot from '../components/landing';
import AppWrapper from '../components/layouts/AppWrapper';
import CONST_VALUE from '../data/constants';
import { NextPageWithLayout } from '../types';

const Landing: NextPageWithLayout = () => (
  <div>
    <Head>
      <title>{CONST_VALUE.pageTitle.landing}</title>
      <meta name="description" content="Generated by Sayanta" />
    </Head>
    <LandingRoot />
  </div>
);

Landing.getLayout = page => <AppWrapper>{page}</AppWrapper>;
export default Landing;
