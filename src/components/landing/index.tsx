import { Box } from '@mantine/core';
import React from 'react';

import Hero from './Hero';
import Featured from '../common/Featured';

const LandingRoot = () => (
  <Box>
    <Hero />
    <Featured />
  </Box>
);

export default LandingRoot;
