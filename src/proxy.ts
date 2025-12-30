import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales = ["en-US", "pt-BR"];
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  // Convert the web Headers object to a plain record expected by Negotiator's types
  const headersObj: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headersObj[key] = value;
  });

  const negotiator = new Negotiator({ headers: headersObj });
  const supportedLocales = ["en-US", "pt-BR"];
  const defaultLocale = "pt-BR";

  // Use Negotiator to pick the best locale, fallback to defaultLocale
  return negotiator.language(supportedLocales) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  console.log(locale);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  console.log(request.nextUrl.pathname);

  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
