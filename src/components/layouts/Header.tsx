import { Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

import { RootState } from '../../redux/store';
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
  const appState = useAppSelector((state: RootState) => state.app);
  const cartState = useAppSelector((state: RootState) => state.cart);
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
          <Box>Shop</Box>
        )}
        {isMobile && (
          <SideBar navLinks={Links} open={appState.open_app_drawer} onClose={handleCloseSideBar} />
        )}
        <Text className="font-bold text-2xl md:text-3xl">Zudio+</Text>
        <Box
          className="flex flex-row md:border :mdborder-secondary px-4 py-2"
          onClick={handleOpenCartDrawer}
        >
          <Box className="hidden md:block mr-2 ">{cartState.items.length} Items</Box>
          <Svgbag dimension="22" />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
