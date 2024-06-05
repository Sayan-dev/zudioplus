import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
};

export type IPaginator = {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export interface IName {
  firstName?: string;
  lastName?: string;
  middleName?: string;
}

export interface IUpload {
  _id: string;
  path: string;
  key: string;
  mimeType: string;
  uploadedBy?: string;
  size: string;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  rating?: number;
  itemDiscount: number;
  isActive: boolean;
  image_url?: string;
  createdAt?: string;
  text: IDetailText;
  size: string[];
  like: boolean;
  discount: boolean;
  selected_size?: string;
  discount_percent: number;
  free: boolean;
  id: string;
  image: string;
  quantity: number;
}

export interface IDetailText {
  p1: string; // Main descriptive details about item
  p2: string[]; // List of key features of the Item
  color: string;
  feel: string;
}
