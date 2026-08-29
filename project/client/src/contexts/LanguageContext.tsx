import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import en from "@/locales/en.json";
import fa from "@/locales/fa.json";

export type Locale = "en" | "fa";
type Dict = typeof en;
const dictionaries: Record<Locale, Dict> = { en, fa: fa as unknown as Dict };
const STORAGE_KEY = "irancoin_lang";

function getNested(obj: unknown, path: string): string | undefined {
  return path.split(".").reduce<unknown>((acc, k) => {
    if (acc && typeof acc === "object" && k in (acc as Record<string, unknown>)) return (acc as Record<string, unknown>)[k];
    return undefined;
  }, obj) as string | undefined;
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  dict: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "fa") return saved;
  } catch {}
  // default fa for IranCoin audience; fallback to en if browser prefers en
  const nav = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "";
  if (nav.startsWith("en")) return "en";
  return "fa";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale());

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  const t = useMemo(() => {
    const dict = dictionaries[locale];
    return (key: string) => getNested(dict, key) ?? getNested(dictionaries.en, key) ?? key;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t, dict: dictionaries[locale] }), [locale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useTranslation() {
  const { t, locale, setLocale, dict } = useLanguage();
  return { t, locale, setLocale, dict };
}
