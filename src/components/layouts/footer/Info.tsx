import { Box, Grid, Text } from '@mantine/core';
import React from 'react';

const Links = [
  { name: 'FAQs', link: '/faq' },
  { name: 'Orders and Returns', link: '/faq' },
  { name: 'Account', link: '/faq' },
  { name: 'About Us', link: '/faq' },
];

const Connect = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/sayan-dev' },
  { name: 'Medium', link: 'https://medium.com/@sayantabhattacharjee' },
  { name: 'Twitter', link: 'https://x.com/sayanta2702' },
  { name: 'Github', link: 'https://github.com/Sayan-dev' },
];

const InfoHeader = ({ text }: { text: string }) => (
  <Text className="text-lg font-semibold py-1">{text}</Text>
);

const Info = () => (
  <Box>
    <Grid>
      <Grid.Col span={7}>
        <InfoHeader text="CUSTOMER CARE" />
        {Links.map(link => (
          <Text key={link.name} className="text-sm font-semibold text-dark-grey py-1">
            {link.name}
          </Text>
        ))}
      </Grid.Col>
      <Grid.Col span={5}>
        <InfoHeader text="CONNECT" />
        {Connect.map(link => (
          <Text key={link.name} className="text-sm font-semibold text-dark-grey py-1">
            {link.name}
          </Text>
        ))}
      </Grid.Col>
    </Grid>
  </Box>
);

export default Info;
