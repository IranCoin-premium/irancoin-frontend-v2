/*
 * Style direction: «سکوتِ کوانت» — an obsidian editorial shell with copper details, a narrow evidence rail,
 * and calm, precise interactions. This file owns the navigation rhythm and persistent brand language.
 */
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navKeys: Record<string,string> = { "/research": "nav.research", "/dashboard": "nav.workspace", "/pricing": "nav.access" };
const navItems = [
  { href: "/research", labelKey: "nav.research" },
  { href: "/dashboard", labelKey: "nav.workspace" },
  { href: "/pricing", labelKey: "nav.access" },
];

export function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <div className={`brand-lockup ${small ? "brand-lockup--small" : ""}`}>
      <span className="brand-mark brand-mark--bars" aria-hidden="true"><i /><i /><i /></span>
      <span className="brand-wordmark">IRANCOIN</span>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const themeLabel = theme === "dark" ? t("common.switchToLight") : t("common.switchToDark");

  const handleSoon = () => {
    toast(t("common.comingSoon"), {
      description: t("common.comingSoonDesc"),
    });
  };

  return (
    <div className="site-frame">
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label="IranCoin Premium home">
            <BrandMark />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={location === item.href ? "is-active" : ""}>
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <LanguageSwitcher />
            <span className="header-status"><i /> {t("common.systemsNominal")}</span>
            <button className="theme-toggle" onClick={toggleTheme} aria-label={themeLabel} aria-pressed={theme === "light"} title={themeLabel}>{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}<span>{theme === "dark" ? "Light" : "Dark"}</span></button>
            <button className="button button--quiet button--compact" onClick={handleSoon}>{t("common.signIn")} <ArrowUpRight size={15} /></button>
            <button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={location === item.href ? "is-active" : ""}>
                {t(item.labelKey)}
              </Link>
            ))}
            <div style={{padding:"4px 0"}}><LanguageSwitcher compact /></div>
            <button className="theme-toggle theme-toggle--mobile" onClick={toggleTheme} aria-label={themeLabel} aria-pressed={theme === "light"}>{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}<span>{theme === "dark" ? t("common.light") + " mode" : t("common.dark") + " mode"}</span></button>
            <button className="button button--quiet" onClick={handleSoon}>Sign in <ArrowUpRight size={15} /></button>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-footer__grid">
          <div>
            <BrandMark small />
            <p className="footer-copy">{t("footer.copy")}</p>
          </div>
          <div className="footer-links">
            <span className="eyebrow">{t("footer.explore")}</span>
            <Link href="/research">{t("footer.researchJournal")}</Link>
            <Link href="/dashboard">{t("footer.workspacePreview")}</Link>
            <Link href="/pricing">{t("footer.accessPlans")}</Link>
          </div>
          <div className="footer-links">
            <span className="eyebrow">{t("footer.boundary")}</span>
            <span>{t("footer.notAdvice")}</span>
            <span>{t("footer.illustrative")}</span>
            <span>{t("footer.version")}</span>
          </div>
        </div>
        <div className="footer-bottom"><span>© IranCoin Premium</span><span>{t("footer.builtFor")}</span></div>
      </footer>
    </div>
  );
}

export function EvidenceRail({ label = "Evidence layer", value = "Curated / 08:42 UTC" }: { label?: string; value?: string }) {
  return (
    <div className="evidence-rail">
      <span className="evidence-rail__line"><i /><i /><i /></span>
      <div><span className="eyebrow">{label}</span><span className="evidence-rail__value">{value}</span></div>
    </div>
  );
}

export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>;
}
