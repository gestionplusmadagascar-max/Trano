import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { Locale, translations } from "./translations";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const fallbackLocale: Locale = "fr";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(fallbackLocale);

  const value = useMemo(() => {
    const dict = translations[locale] ?? translations[fallbackLocale];
    return {
      locale,
      setLocale,
      t: (key: string) => dict[key] ?? translations[fallbackLocale][key] ?? key
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
