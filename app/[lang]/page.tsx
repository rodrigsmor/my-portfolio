// You now have access to the current locale

import { Metadata } from "next";
import Portfolio from "@/views/portfolio"
import { LanguageCode } from "@/utils/@types/lang";
import { getDictionary } from "../../utils/functions/dictionaries";

export type LangPageProps = {
  params: Promise<{ lang: LanguageCode }>;
};

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return {
    title: dict.Metadata.title,
    description: dict.Metadata.description,
    openGraph: {
      title: dict.Metadata.title,
      description: dict.Metadata.description,
      locale: lang,
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en-US': '/en-US',
        'pt-BR': '/pt-BR',
        'es-149': '/es-149',
      },
    },
  };
}

export default async function Page() {
  return (
    <Portfolio />
  );
}