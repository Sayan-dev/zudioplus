import { Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

import SideBar from './header/SideBar';
import { closeAppDrawer, openAppDrawer } from '../../redux/features/appSlice';
import { openDrawer } from '../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CartDrawer from '../common/CartDrawer';
import HomeNotification from '../common/HomeNotification';
import Svgbag from '../svg/Svgbag';
import Svgbars from '../svg/Svgbars';

const Links = [
  { name: 'Home', link: '/' },
  { name: 'My Orders', link: '/orders' },
  { name: 'My Cart', link: '/cart' },
];

const Header = () => {
  const appState = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  const handleOpenCartDrawer = () => {
    dispatch(openDrawer());
  };
  const handleOpenSideBar = () => {
    dispatch(openAppDrawer());
  };
  const handleCloseSideBar = () => {
    dispatch(closeAppDrawer());
  };

  const isMobile = useMediaQuery('(max-width: 450px)');
  return (
    <Box>
      <HomeNotification />
      <CartDrawer />

      <Box className="flex justify-between items-center px-4">
        {isMobile ? (
          <Box onClick={handleOpenSideBar}>
            <Svgbars dimension="20px" />
          </Box>
        ) : (
          <Box />
        )}
        {isMobile && (
          <SideBar navLinks={Links} open={appState.open_app_drawer} onClose={handleCloseSideBar} />
        )}
        <Text className="font-bold text-2xl">Zudio+</Text>
        <Box onClick={handleOpenCartDrawer}>
          <span className="hidden md:block">My Cart</span>
          <Svgbag dimension="22" />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
