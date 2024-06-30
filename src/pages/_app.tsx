import '@mantine/core/styles.css'; // Import Mantine styles
import '@mantine/carousel/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.scss';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import React, { useState } from 'react';
import { CookiesProvider } from 'react-cookie';

import ToastProvider from '../context/ToastProvider';
import theme from '../lib/theme';
import Providers from '../redux/provider';
import { AppPropsWithLayout } from '../types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Participleplus = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page);
  const [client] = useState(() => queryClient);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#050505" />
        <meta name="msapplication-TileColor" content="#050505" />
        <meta name="theme-color" content="#050505" />
      </Head>
      <ToastProvider>
        <Providers>
          <QueryClientProvider client={client}>
            <CookiesProvider>
              <ColorSchemeScript defaultColorScheme="auto" />
              <MantineProvider withGlobalClasses theme={theme}>
                {getLayout(<Component {...pageProps} />)}
                {/* <NotificationsProvider>
                  </NotificationsProvider> */}
              </MantineProvider>
            </CookiesProvider>
          </QueryClientProvider>
        </Providers>
      </ToastProvider>
    </>
  );
};

export default Participleplus;
