/*
 * Style direction: «سکوتِ کوانت» — research reads like a quiet field journal: editorial hierarchy,
 * evidence metadata, copper indexing, and no manufactured performance claims.
 */
import { ArrowUpRight, BookOpen, ChevronRight, Clock3, FileText, Filter, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import { EvidenceRail, SectionLabel, SiteShell } from "@/components/SiteShell";

const articles = [
  { id: "01", category: "Market structure", title: "When liquidity becomes the story", summary: "A field note on depth, fragmented order books, and why price alone is an incomplete signal.", date: "14 Aug 2026", read: "08 min", confidence: "High", tone: "copper" },
  { id: "02", category: "Risk practice", title: "The useful distance between signal and action", summary: "A framework for introducing pause, context, and permission checks into automated workflows.", date: "09 Aug 2026", read: "11 min", confidence: "Reviewed", tone: "sage" },
  { id: "03", category: "Macro context", title: "Rates, regimes, and the cost of conviction", summary: "How changing rate expectations reshape the backdrop behind digital-asset narratives.", date: "31 Jul 2026", read: "06 min", confidence: "Medium", tone: "blue" },
  { id: "04", category: "Product notes", title: "Why we show the source beside the signal", summary: "Designing for inspection: provenance, timestamps, and the limits of model-assisted interpretation.", date: "22 Jul 2026", read: "05 min", confidence: "Reviewed", tone: "sand" },
  { id: "05", category: "Execution", title: "A checklist for permission-aware connections", summary: "The small operational details that make a system safer to connect—and easier to disconnect.", date: "14 Jul 2026", read: "09 min", confidence: "High", tone: "copper" },
];

const categories = ["All notes", "Market structure", "Risk practice", "Macro context", "Product notes", "Execution"];

export default function Research() {
  const [activeCategory, setActiveCategory] = useState("All notes");
  const filtered = useMemo(() => activeCategory === "All notes" ? articles : articles.filter((article) => article.category === activeCategory), [activeCategory]);
  const openSoon = () => toast("نسخهٔ کامل مقاله در حال آماده‌سازی است.", { description: "این صفحه در حال حاضر یک پیش‌نمایش تحریریه‌ای از ساختار پژوهش است." });

  return (
    <SiteShell>
      <section className="page-intro section-pad"><div className="container page-intro__grid"><div><EvidenceRail label="Editorial desk" value="5 notes / updated today" /><SectionLabel index="01">The research journal</SectionLabel><h1>Context for<br /><em>the curious.</em></h1></div><div className="page-intro__aside"><p>Research should make the next question sharper—not make the answer sound inevitable.</p><div className="page-intro__meta"><span><BookOpen size={15} /> Original field notes</span><span><ShieldCheck size={15} /> Reviewed methodology</span></div></div></div></section>
      <section className="research-toolbar"><div className="container research-toolbar__inner"><div className="category-tabs" role="tablist" aria-label="Filter research"><Filter size={15} />{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={activeCategory === category ? "is-active" : ""} role="tab" aria-selected={activeCategory === category}>{category}</button>)}</div><button className="search-button" onClick={openSoon}><Search size={16} /> Search archive</button></div></section>
      <section className="research-list section-pad"><div className="container"><div className="research-list__header"><span className="eyebrow">Showing {filtered.length.toString().padStart(2, "0")} notes</span><span className="mono-label">Sort / newest first</span></div><div className="article-stack">{filtered.map((article, index) => <article className={`article-row article-row--${article.tone}`} key={article.id} onClick={openSoon}><div className="article-row__index">{article.id}</div><div className="article-row__visual"><div className="article-row__visual-lines" /><span className="article-row__visual-mark"><i /><i /><i /></span><span>{article.category}</span><small>{article.confidence} / {article.date}</small></div><div className="article-row__content"><div className="article-row__category">{article.category}<span>·</span>{article.confidence}</div><h2>{article.title}</h2><p>{article.summary}</p><div className="article-row__meta"><span><Clock3 size={14} /> {article.read} read</span><span>{article.date}</span></div></div><ArrowUpRight className="article-row__arrow" size={20} /></article>)}</div></div></section>
      <section className="methodology section-pad section-dark"><div className="container methodology__grid"><div><SectionLabel index="02">The method</SectionLabel><h2>Signals are<br /><span>starting points.</span></h2></div><div className="methodology__body"><p>Every research note is designed to hold two things at once: a clear observation and an honest limit. We publish the date, source family, and confidence label so a reader can decide how much weight to give the idea.</p><div className="methodology__steps"><div><b>01</b><span>Observe the underlying context.</span></div><div><b>02</b><span>Describe the scenario, not the outcome.</span></div><div><b>03</b><span>Make uncertainty visible.</span></div></div><Link href="/dashboard" className="text-link">See this method in the workspace <ChevronRight size={15} /></Link></div></div></section>
      <section className="research-subscribe section-pad"><div className="container research-subscribe__inner"><FileText size={22} /><div><span className="eyebrow">The weekly field note</span><h2>One considered read.<br /><em>No market noise.</em></h2></div><div className="subscribe-form"><input aria-label="Email address" placeholder="your@email.com" /><button className="button button--copper" onClick={() => toast("ثبت شد.", { description: "در نسخهٔ نمایشی، ارسال ایمیل غیرفعال است." })}>Request access <ArrowUpRight size={16} /></button></div></div></section>
    </SiteShell>
  );
}
