import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();
  return (
    <div className={`lang-switcher ${compact ? "lang-switcher--compact" : ""}`} role="group" aria-label="Language">
      <button
        type="button"
        aria-pressed={locale === "fa"}
        aria-label="فارسی"
        onClick={() => setLocale("fa")}
        className={locale === "fa" ? "is-active" : ""}
      >
        FA
      </button>
      <span aria-hidden="true" className="lang-switcher__sep">/</span>
      <button
        type="button"
        aria-pressed={locale === "en"}
        aria-label="English"
        onClick={() => setLocale("en")}
        className={locale === "en" ? "is-active" : ""}
      >
        EN
      </button>
    </div>
  );
}
