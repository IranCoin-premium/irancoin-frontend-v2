/*
 * Style direction: «سکوتِ کوانت» — access is framed as a considered product decision, not a countdown.
 * Pricing cards use quiet material contrast, explicit entitlements, and visible platform/jurisdiction boundaries.
 */
import { ArrowUpRight, Check, CircleAlert, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { EvidenceRail, SectionLabel, SiteShell } from "@/components/SiteShell";

const terms = [
  { label: "7 days", price: "$18", note: "A short look" },
  { label: "1 month", price: "$49", note: "Monthly access" },
  { label: "3 months", price: "$129", note: "Best for a cycle" },
  { label: "6 months", price: "$228", note: "For a full season" },
  { label: "1 year", price: "$396", note: "Long-form access" },
];

const included = ["Research journal with methodology notes", "Signal context and confidence labels", "Read-only workspace overview", "Permission-aware connection model", "Exportable activity and source history"];

export default function Pricing() {
  const [selected, setSelected] = useState("3 months");
  const request = () => toast("پرداخت در نسخهٔ فرانت‌اند متصل نیست.", { description: "این صفحه دامنهٔ محصول و مدل دسترسی را نشان می‌دهد؛ فعال‌سازی واقعی نیازمند سرویس پرداخت و بررسی حقوقی است." });
  return <SiteShell><section className="page-intro section-pad page-intro--pricing"><div className="container page-intro__grid"><div><EvidenceRail label="Access desk" value="Transparent / no urgency" /><SectionLabel index="01">Choose your horizon</SectionLabel><h1>Access with<br /><em>intention.</em></h1></div><div className="page-intro__aside"><p>One service level. A term that matches the amount of time you want to spend looking closely.</p><div className="page-intro__meta"><span><LockKeyhole size={15} /> Secure onboarding by design</span><span><CircleAlert size={15} /> Availability varies by region</span></div></div></div></section><section className="pricing-section section-pad"><div className="container pricing-layout"><div className="pricing-terms"><div className="pricing-terms__header"><span className="eyebrow">Select a term</span><span className="mono-label">USD / illustrative</span></div>{terms.map((term) => <button key={term.label} className={`term-row ${selected === term.label ? "is-active" : ""}`} onClick={() => setSelected(term.label)}><span className="term-radio"><i /></span><span className="term-row__name"><strong>{term.label}</strong><small>{term.note}</small></span><span className="term-row__price">{term.price}<small> / term</small></span><ArrowUpRight size={17} /></button>)}<div className="pricing-terms__note"><ShieldCheck size={16} /><span>There is no artificial tiering here. The same core access changes only by term.</span></div></div><div className="pricing-summary"><div className="summary-card"><div className="summary-card__top"><span className="eyebrow">Your access</span><span className="status-pill status-pill--copper">Preview</span></div><h2>{selected}</h2><div className="summary-price">{terms.find((term) => term.label === selected)?.price}<span> / term</span></div><div className="summary-divider" /><span className="eyebrow">Included in every term</span><ul>{included.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><button className="button button--copper button--wide" onClick={request}>Continue to review <ArrowUpRight size={16} /></button><p className="summary-footnote">Payment, identity, jurisdiction, and platform eligibility checks happen before any activation.</p></div></div></div></section><section className="access-boundary section-pad section-dark"><div className="container access-boundary__grid"><div><SectionLabel index="02">Read this first</SectionLabel><h2>Access is not<br /><span>authorization.</span></h2></div><div><p>IranCoin Premium does not make a market available merely because a screen can display it. Product capabilities can be limited by platform policy, jurisdiction, licensing, user eligibility, and venue support.</p><div className="boundary-list"><span><i /> Spot research and context</span><span><i /> Derivatives subject to eligibility</span><span><i /> Binary-options-related workflows excluded where prohibited</span></div><Link href="/research" className="text-link">Read the risk framework <ArrowUpRight size={15} /></Link></div></div></section></SiteShell>;
}
