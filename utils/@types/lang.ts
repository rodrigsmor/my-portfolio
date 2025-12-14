export type LanguageCode = 'pt-BR' | 'en-US' | 'es-419';

export type LanguageData = {
  value: LanguageCode;
  label: string;
};

export type Languages = Record<LanguageCode, LanguageData>;