import { AppShell, Box } from '@mantine/core';
import { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';

const AppWrapper = ({ children }: PropsWithChildren) => (
  <Box className="max-w-5xl min-h-screen m-auto ">
    <AppShell header={{ height: 80 }}>
      <AppShell.Header className="max-w-5xl m-auto">
        <Header />
      </AppShell.Header>
      <AppShell.Main className="px-4 mt-4 max-w-5xl mx-auto">{children}</AppShell.Main>
      <Footer />
    </AppShell>
  </Box>
);
export default AppWrapper;
