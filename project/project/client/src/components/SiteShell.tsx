/*
 * Style direction: «سکوتِ کوانت» — an obsidian editorial shell with copper details, a narrow evidence rail,
 * and calm, precise interactions. This file owns the navigation rhythm and persistent brand language.
 */
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/dashboard", label: "Workspace" },
  { href: "/pricing", label: "Access" },
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
  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  const handleSoon = () => {
    toast("این بخش در نسخهٔ بعدی فعال می‌شود.", {
      description: "رابط کاربری آماده است؛ اتصال واقعی به حساب و دادهٔ زنده نیازمند بک‌اند امن است.",
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
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <span className="header-status"><i /> Systems nominal</span>
            <button className="theme-toggle" onClick={toggleTheme} aria-label={themeLabel} aria-pressed={theme === "light"} title={themeLabel}>{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}<span>{theme === "dark" ? "Light" : "Dark"}</span></button>
            <button className="button button--quiet button--compact" onClick={handleSoon}>Sign in <ArrowUpRight size={15} /></button>
            <button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={location === item.href ? "is-active" : ""}>
                {item.label}
              </Link>
            ))}
            <button className="theme-toggle theme-toggle--mobile" onClick={toggleTheme} aria-label={themeLabel} aria-pressed={theme === "light"}>{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}<span>{theme === "dark" ? "Light mode" : "Dark mode"}</span></button>
            <button className="button button--quiet" onClick={handleSoon}>Sign in <ArrowUpRight size={15} /></button>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-footer__grid">
          <div>
            <BrandMark small />
            <p className="footer-copy">Decision support for people who prefer context to certainty.</p>
          </div>
          <div className="footer-links">
            <span className="eyebrow">Explore</span>
            <Link href="/research">Research journal</Link>
            <Link href="/dashboard">Workspace preview</Link>
            <Link href="/pricing">Access plans</Link>
          </div>
          <div className="footer-links">
            <span className="eyebrow">Boundary</span>
            <span>Not investment advice.</span>
            <span>Illustrative data only.</span>
            <span>2026 · v0.8 preview</span>
          </div>
        </div>
        <div className="footer-bottom"><span>© IranCoin Premium</span><span>Built for calm decisions.</span></div>
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
