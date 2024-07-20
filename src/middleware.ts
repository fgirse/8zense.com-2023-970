import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';
import {localePrefix, defaultLocale, locales, pathnames} from './config';

const createIntlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames
});

export const  createMiddlewareFunction =()=> {
  return createIntlMiddleware;
}


export default clerkMiddleware();
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/",
    '/(de|en)/:path*',
  ],
};
