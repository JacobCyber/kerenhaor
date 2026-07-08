import en from "./en.json";
import he from "./he.json";

export type Locale = "en" | "he";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "he"];

const translations: Record<Locale, Record<string, any>> = { en, he };

function getNestedValue(obj: Record<string, any>, path: string): string {
  return path.split(".").reduce((acc, part) => acc?.[part], obj) as string ?? path;
}

export function t(locale: Locale, key: string): string {
  return getNestedValue(translations[locale], key);
}

export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "he" ? "rtl" : "ltr";
}
