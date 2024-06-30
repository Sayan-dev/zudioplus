import { Box, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Banner1 from '../../assets/background.png';
import Banner2 from '../../assets/background2.png';

const IntroBox = () => (
  <Box className="absolute top-[35%] right-[25%]">
    <Text className="font-bold text-white text-2xl">New In</Text>
  </Box>
);

const Intro = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Box className="">
      <Box className="flex ">
        <Carousel
          className="h-full "
          withIndicators
          loop
          withControls={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={{
            indicators: 'justify-end pr-4',
            indicator: '!bg-white !h-2 !w-2',
            slide: 'justify-start h-full flex flex-row',
          }}
        >
          <Carousel.Slide>
            <Image src={Banner1} alt="banner1" />
            <IntroBox />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={Banner2} alt="banner2" />
            <IntroBox />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={Banner1} alt="banner3" />
            <IntroBox />
          </Carousel.Slide>
        </Carousel>
      </Box>
      <Box>
        <Box className="py-5 flex flex-col items-center">
          <Text className="text-2xl font-semibold">PARKS AND RECREATION</Text>
          <Link className="text-xs underline underline-offset-4" href="/clothing">
            SHOP NEW
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
