import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../../types';

type CartState = {
  items: IProduct[];
  open_drawer: boolean;
};

const initialState = {
  items: [],
  open_drawer: false,
} as CartState;

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: () => initialState,

    addItem: (state, action: PayloadAction<IProduct>) => {
      const newItems = [...state.items];
      newItems.push(action.payload);
      return {
        ...state,
        items: newItems,
      };
    },
    closeDrawer: state => ({
      ...state,
      open_drawer: false,
    }),
    openDrawer: state => ({
      ...state,
      open_drawer: true,
    }),
    removeItem: (state, payload: { payload: string }) => {
      const newItems = [...state.items].filter(item => item._id !== payload.payload);

      return {
        ...state,
        items: newItems,
      };
    },
  },
});

export const { reset, addItem, closeDrawer, openDrawer, removeItem } = cart.actions;
export default cart.reducer;
