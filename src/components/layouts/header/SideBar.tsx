import { Box, Drawer, Text } from '@mantine/core';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

type SideBarProps = {
  open: boolean;
  onClose: () => void;
  navLinks: { name: string; link: string }[];
};

const SideBar = ({ open, onClose, navLinks }: SideBarProps) => (
  <Drawer
    classNames={{
      body: 'px-0 mx-0',
    }}
    withCloseButton={false}
    size={250}
    opened={open}
    onClose={onClose}
  >
    <Box className="flex-row flex w-full h-[20vh] border-b-[1px] border-light-grey mb-5 items-center justify-center">
      <Text className="text-6xl font-bold font-serif">Z</Text>
      <Text className="text-4xl">+</Text>
    </Box>
    <Box className="px-5">
      {navLinks.map(link => (
        <Box
          key={link.link}
          className="h-12 flex items-center px-10 py-10 border-b-[1px] border-dark-grey"
        >
          <IconHome className="text-dark-grey mr-5" height={24} />
          <Link onClick={onClose} href={link.link}>
            {link.name}
          </Link>
        </Box>
      ))}
    </Box>
  </Drawer>
);

export default SideBar;
