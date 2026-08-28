/*
 * Style direction: «سکوتِ کوانت» — the workspace is an analyst operating surface, not a generic SaaS admin.
 * This shell keeps navigation persistent, surfaces demo boundaries, and makes capability states explicit.
 */
import { Activity, Bell, CircleHelp, Eye, KeyRound, Link2, ListFilter, Settings2, SlidersHorizontal, UserRound, WalletCards } from "lucide-react";
import { Link, useLocation } from "wouter";
import { SiteShell } from "@/components/SiteShell";

const sections = [
  { caption: "Workspace", items: [{ href: "/dashboard", label: "Overview", icon: Activity }, { href: "/market", label: "Market intelligence", icon: ListFilter }, { href: "/operations", label: "Operations", icon: Link2 }, { href: "/profile", label: "Profile", icon: UserRound }] },
  { caption: "Control", items: [{ href: "/alerts", label: "Alerts", icon: Bell, badge: "3" }, { href: "/automations", label: "Automations", icon: SlidersHorizontal, soon: true }, { href: "/research", label: "Research journal", icon: Eye }] },
];

export function WorkspaceSidebar() {
  const [location] = useLocation();
  return <aside className="app-sidebar"><div className="app-sidebar__brand"><Link href="/"><span className="sidebar-symbol">I</span><span>IRANCOIN</span></Link></div>{sections.map((section) => <div className="sidebar-section" key={section.caption}><span className="sidebar-caption">{section.caption}</span>{section.items.map((item) => <Link key={item.href} href={item.href} className={location === item.href ? "is-active" : ""}><item.icon size={17} /> {item.label}{item.soon && <span className="sidebar-soon">Soon</span>}{item.badge && <span className="sidebar-badge">{item.badge}</span>}</Link>)}</div>)}<div className="sidebar-section sidebar-section--bottom"><Link href="/profile"><Settings2 size={17} /> Settings</Link><button><CircleHelp size={17} /> Help center</button></div><Link href="/profile" className="sidebar-profile"><div className="avatar">AR</div><div><strong>Analyst preview</strong><span>Observer access</span></div><KeyRound size={15} /></Link></aside>;
}

export function WorkspaceFrame({ children, eyebrow, title, action }: { children: React.ReactNode; eyebrow: string; title: string; action?: React.ReactNode }) {
  return <SiteShell><div className="app-shell"><WorkspaceSidebar /><div className="app-main"><header className="app-topbar"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1></div>{action && <div className="app-topbar__actions">{action}</div>}</header>{children}</div></div></SiteShell>;
}
