'use client';

import React, { createContext, useContext, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LanguageCode } from '../@types/lang';
import { Dictionary } from '../functions/dictionaries';
import Cookies from 'js-cookie';

type Prev = [never, 0, 1, 2, 3, 4, 5, ...0[]];

export type PathToDot<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
  ? {
    [K in keyof T]-?: K extends string | number
    ? `${K}` | (T[K] extends object ? `${K}.${PathToDot<T[K], Prev[D]>}` : never)
    : never;
  }[keyof T]
  : "";

interface LanguageContextType {
  locale: LanguageCode;
  dictionary: Dictionary;
  t: (path: PathToDot<Dictionary>) => string;
  getObject: (path: PathToDot<Dictionary>) => unknown;
  setLocale: (newLocale: LanguageCode) => void;
  isPending: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale,
  dictionary
}: {
  children: React.ReactNode;
  initialLocale: LanguageCode;
  dictionary: Dictionary;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const t = (path: PathToDot<Dictionary>): string => {
    const value = path.split('.').reduce((acc: unknown, key: string) => {
      if (acc && typeof acc === 'object' && key in acc) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dictionary);

    return typeof value === 'string' ? value : path;
  };

  function getObject<T>(path: PathToDot<Dictionary>): T | undefined {
    const value = path.split('.').reduce((acc: unknown, key: string) => {
      if (acc && typeof acc === 'object' && key in acc) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dictionary);

    return value as T;
  }

  const setLocale = (newLocale: LanguageCode) => {
    Cookies.set('NEXT_LOCALE', newLocale, { expires: 365 });

    const newPathname = pathname.replace(/^\/[^\/]+/, `/${newLocale}`);

    startTransition(() => {
      router.push(newPathname);
      router.refresh();
    });
  };

  return (
    <LanguageContext.Provider value={{ locale: initialLocale, getObject, dictionary, t, setLocale, isPending }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslate() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslate deve ser usado dentro de um LanguageProvider');
  return context;
}