import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

import Info from './footer/Info';
import Subscribe from './footer/Subscribe';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 450px)');
  return (
    <Box className="bg-background-light px-4 py-8">
      <Box className={`${isMobile ? 'flex-col-reverse ' : 'flex-row justify-evenly'}  flex`}>
        <Box className="w-full">
          <Info />
        </Box>
        <Box className="w-full">
          <Subscribe />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
