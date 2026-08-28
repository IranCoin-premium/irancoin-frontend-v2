/*
 * Style direction: «سکوتِ کوانت» — the landing page is an editorial instrument, not a sales funnel.
 * Use asymmetric composition, copper signal accents, evidence rails, and a measured, non-promissory voice.
 */
import { ArrowDownRight, ArrowUpRight, BarChart3, ChevronRight, CircleAlert, Eye, LockKeyhole, Play, ShieldCheck, Sparkles, Waypoints } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import { EvidenceRail, SectionLabel, SiteShell } from "@/components/SiteShell";

const marketItems = [
  { name: "BTC / USD", price: "$67,420.18", change: "+2.41%", positive: true },
  { name: "ETH / USD", price: "$3,482.06", change: "+1.08%", positive: true },
  { name: "DXY", price: "104.21", change: "−0.18%", positive: false },
  { name: "10Y yield", price: "4.21%", change: "+0.04", positive: false },
];

const workflow = [
  { number: "01", title: "Observe", body: "A quieter market layer: price, liquidity, macro context, and the source behind each signal." },
  { number: "02", title: "Interpret", body: "Specialized agents surface scenarios and contradictions instead of manufacturing certainty." },
  { number: "03", title: "Act with bounds", body: "You decide. The workspace keeps permissions, execution state, and exposure visible." },
];

export default function Home() {
  const showSoon = () => toast("اتصال حساب در نسخهٔ نمایشی غیرفعال است.", { description: "برای اتصال واقعی به صرافی یا کارگزار، بک‌اند امن و احراز هویت لازم است." });

  return (
    <SiteShell>
      <section className="hero section-pad">
        <div className="hero__art" aria-hidden="true">
          <img src="/manus-storage/irancoin-hero-reference_76d916cf.png" alt="" />
          <div className="hero__art-shade" />
          <div className="hero__coordinate coordinate-one">35°41' N / 51°25' E</div>
          <div className="hero__coordinate coordinate-two">FIELD NOTE / 08.42</div>
        </div>
        <div className="hero__content container">
          <div className="hero__eyebrow"><span className="pulse-dot" /> Independent financial intelligence / 2026</div>
          <div className="hero__copy">
            <EvidenceRail label="Signal quality" value="Calibrated / No guarantees" />
            <h1>See the market<br /><em>before</em> you act.</h1>
            <p className="hero__lede">IranCoin Premium brings research, signals, and execution context into one calm workspace for disciplined operators.</p>
            <div className="hero__actions">
              <Link href="/dashboard" className="button button--copper">Open workspace <ArrowUpRight size={17} /></Link>
              <Link href="/research" className="text-link">Read the methodology <ChevronRight size={15} /></Link>
            </div>
          </div>
          <div className="hero__note"><span>01</span><p>Not advice. Not a promise.<br />Just a clearer starting point.</p></div>
        </div>
      </section>

      <section className="ticker-bar" aria-label="Illustrative market context">
        <div className="ticker-bar__label"><span className="eyebrow">Market context</span><span>Illustrative · delayed</span></div>
        <div className="ticker-bar__items">
          {marketItems.map((item) => <div className="ticker-item" key={item.name}><span>{item.name}</span><strong>{item.price}</strong><small className={item.positive ? "is-positive" : "is-negative"}>{item.change}</small></div>)}
        </div>
      </section>

      <section className="manifesto section-pad">
        <div className="container manifesto__grid">
          <div className="manifesto__aside"><SectionLabel index="02">A different kind of signal</SectionLabel><span className="manifesto__stamp">CLARITY<br />OVER<br />NOISE</span></div>
          <div className="manifesto__body">
            <p className="display-copy">Most platforms show you <span>more.</span> We help you see what matters.</p>
            <div className="manifesto__details"><p>Markets move quickly. Your decision-making should not have to. We separate observation from interpretation, and interpretation from action—so risk, fees, permissions, and uncertainty stay in frame.</p><Link href="/research" className="text-link">Why this matters <ChevronRight size={15} /></Link></div>
          </div>
        </div>
      </section>

      <section className="workflow section-pad section-dark">
        <div className="container">
          <div className="section-heading section-heading--split"><div><SectionLabel index="03">The operating system</SectionLabel><h2>A more deliberate<br /><span>market ritual.</span></h2></div><p>Three layers keep the product useful when the market is loud: observable context, explainable interpretation, and bounded execution.</p></div>
          <div className="workflow__list">{workflow.map((item) => <article className="workflow-card" key={item.number}><span className="workflow-card__number">{item.number}</span><div className="workflow-card__icon">{item.number === "01" ? <Eye size={22} /> : item.number === "02" ? <Sparkles size={22} /> : <Waypoints size={22} />}</div><h3>{item.title}</h3><p>{item.body}</p><ArrowUpRight className="workflow-card__arrow" size={18} /></article>)}</div>
        </div>
      </section>

      <section className="dashboard-tease section-pad">
        <div className="container dashboard-tease__grid">
          <div className="dashboard-tease__copy"><SectionLabel index="04">Inside the workspace</SectionLabel><h2>One surface.<br /><em>Every signal.</em></h2><p>A considered view of exposure, connection health, and the reasoning behind a market signal. No black boxes hidden behind a green number.</p><div className="feature-points"><div><ShieldCheck size={17} /><span>Permission-aware connections</span></div><div><BarChart3 size={17} /><span>Explainable market views</span></div><div><LockKeyhole size={17} /><span>Secrets never shown in plain text</span></div></div><Link href="/dashboard" className="button button--outline">Explore the preview <ArrowUpRight size={16} /></Link></div>
          <div className="dashboard-preview"><div className="dashboard-preview__art" aria-hidden="true"><span className="artifact-ring artifact-ring--one" /><span className="artifact-ring artifact-ring--two" /><span className="artifact-trace" /><span className="artifact-mark"><i /><i /><i /></span><span className="artifact-label">TRACE / 08.42</span></div><div className="dashboard-preview__overlay"><div className="mini-window__top"><span>LIVE VIEW / DEMO</span><span className="mini-status"><i /> Synced</span></div><div className="mini-metric"><span>Portfolio posture</span><strong>Measured</strong><div className="mini-bars"><i /><i /><i /><i /><i /></div></div><div className="mini-bottom"><span>BTC / USD</span><strong>+2.41%</strong></div></div></div>
        </div>
      </section>

      <section className="boundary section-pad">
        <div className="container boundary__inner"><div className="boundary__icon"><CircleAlert size={22} /></div><div><SectionLabel index="05">The boundary</SectionLabel><h2>Intelligence is not certainty.</h2><p>IranCoin Premium is a technology and information experience. Signals are illustrative, models can be wrong, and financial decisions remain yours. Product availability, instruments, and execution capabilities vary by jurisdiction and platform.</p></div><button onClick={showSoon} className="text-link">Read risk framework <ChevronRight size={15} /></button></div>
      </section>

      <section className="closing-cta section-pad"><div className="container closing-cta__inner"><div><span className="eyebrow">A calmer starting point</span><h2>Make room for<br /><em>better questions.</em></h2></div><div className="closing-cta__action"><p>Explore the research layer, or open a workspace preview with illustrative data.</p><Link href="/research" className="button button--copper">Enter the journal <Play size={15} /></Link></div></div></section>
    </SiteShell>
  );
}
