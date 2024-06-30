import cookie from 'cookie';
import type { IncomingMessage } from 'http';
import type { NextApiRequestCookies } from 'next/dist/server/api-utils';

type Request = IncomingMessage & {
  cookies: NextApiRequestCookies;
};

export default function parseCookies(req: Request) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

export const convertToPercentage = (data: number) => data;

export const getActualAmount = (data: number) => parseFloat(`${data / 100}`).toFixed(2);

export const getServerAmount = (data: string) => parseInt(data, 10) * 100;
