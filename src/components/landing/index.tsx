import { Box } from '@mantine/core';
import React from 'react';

import Hero from './Hero';
import Featured from '../common/Featured';
import Intro from './Intro';

const LandingRoot = () => (
  <Box>
    <Intro />
    <Hero />
    <Featured />
  </Box>
);

export default LandingRoot;
