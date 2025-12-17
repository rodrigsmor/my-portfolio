
import Negotiator from 'negotiator'

import { NextRequest, NextResponse } from "next/server";
import { LanguageCode } from './utils/@types/lang'
import { langCodes } from './utils/consts/languages'
import { match } from '@formatjs/intl-localematcher';

function getLocale(request: NextRequest): LanguageCode {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locales: string[] = [...langCodes];
  const defaultLocale: LanguageCode = "en-US";

  try {
    return match(languages, locales, defaultLocale) as LanguageCode;
  } catch (error) {
    console.error(error)
    return defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = langCodes.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}