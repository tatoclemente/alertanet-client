import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';
export default createMiddleware({
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'es',
  localePrefix,
  locales,

});
 
export const config = {
  matcher: ['/', '/(pt|es)/:path*']
};