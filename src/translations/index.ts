
import { enTranslations } from './en';
import { esTranslations } from './es';

export type Language = 'en' | 'es';

export type TranslationKey = keyof typeof enTranslations;

export const translations = {
  en: enTranslations,
  es: esTranslations
};

export type Translations = typeof translations;
