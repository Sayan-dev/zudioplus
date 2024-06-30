import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../../types';

type CartState = {
  items: IProduct[];
  total: number;
  open_drawer: boolean;
};

const initialState = {
  items: [],
  total: 0,
  open_drawer: false,
} as CartState;

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: () => initialState,

    addItem: (state, action: PayloadAction<IProduct>) => {
      const newItems = [...state.items];
      newItems.push({ ...action.payload, quantity: 1 });
      const newTotal = action.payload.price + state.total;
      return {
        ...state,
        total: newTotal,
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
    removeItem: (state, action: PayloadAction<IProduct>) => {
      const newItems = [...state.items].filter(item => item._id !== action.payload._id);
      const newTotal = state.total - action.payload.price;

      return {
        ...state,
        total: newTotal,
        items: newItems,
      };
    },

    removeAllItems: state => ({
      ...state,
      items: [],
      total: 0,
    }),
    addQuantity: (state, action: PayloadAction<IProduct>) => {
      const items = [...state.items];
      const itemIndex = items.findIndex(item => item._id === action.payload._id);
      let newTotal = state.total;
      if (itemIndex > -1) {
        items[itemIndex] = { ...items[itemIndex], quantity: items[itemIndex].quantity + 1 };
        newTotal += items[itemIndex].price;
      }
      return {
        ...state,
        total: newTotal,
        items,
      };
    },
    reduceQuantity: (state, action: PayloadAction<IProduct>) => {
      const items = [...state.items];
      const itemIndex = items.findIndex(item => item._id === action.payload._id);
      let newTotal = state.total;

      if (itemIndex > -1) {
        if (items[itemIndex].quantity > 1) {
          items[itemIndex] = { ...items[itemIndex], quantity: items[itemIndex].quantity - 1 };
          newTotal -= items[itemIndex].price;
        }
      }
      return {
        ...state,
        total: newTotal,
        items,
      };
    },
  },
});

export const {
  reset,
  addItem,
  closeDrawer,
  openDrawer,
  removeItem,
  addQuantity,
  reduceQuantity,
  removeAllItems,
} = cart.actions;
export default cart.reducer;
