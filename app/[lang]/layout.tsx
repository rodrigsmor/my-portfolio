import { ReactNode } from "react";
import { LangPageProps } from "./page";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/utils/hooks/useTranslate";
import { getDictionary, hasLocale } from "@/utils/functions/dictionaries";
import { Prompt, Turret_Road } from "next/font/google";

const prompt = Prompt({
  variable: '--font-prompt',
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const turret = Turret_Road({
  variable: '--font-turret_road',
  subsets: ["latin"],
  weight: ['400']
});

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'pt-BR' }, { lang: 'es-149' }]
}

type LayoutProps = LangPageProps & {
  children: ReactNode;
};

export default async function LangLayout({
  children,
  params,
}: LayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound()
  
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${prompt.variable} ${turret.variable} antialiased`}>
        <LanguageProvider initialLocale={lang} dictionary={dictionary}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}