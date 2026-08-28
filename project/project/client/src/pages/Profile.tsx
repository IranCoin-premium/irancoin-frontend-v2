/*
 * Style direction: «سکوتِ کوانت» — profile management is a quiet control room, with explicit state,
 * precise fields, and no false implication that demo changes are persisted to a backend.
 */
import { Bell, Check, ChevronRight, Globe2, KeyRound, LoaderCircle, LockKeyhole, LogOut, Mail, Save, ShieldCheck, UserRound } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";

const profileTabs = [
  { id: "account", label: "Account", icon: UserRound },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: LockKeyhole },
  { id: "preferences", label: "Preferences", icon: Globe2 },
];

function DashboardSidebar() {
  return <aside className="app-sidebar"><div className="app-sidebar__brand"><Link href="/"><span className="sidebar-symbol">I</span><span>IRANCOIN</span></Link></div><div className="sidebar-section"><span className="sidebar-caption">Workspace</span><Link href="/dashboard"><span>⌁</span> Overview</Link><Link href="/market"><span>◈</span> Market intelligence</Link><button><span>▣</span> Positions <span className="sidebar-soon">Soon</span></button><button><Bell size={17} /> Alerts <span className="sidebar-badge">3</span></button></div><div className="sidebar-section"><span className="sidebar-caption">Intelligence</span><Link href="/research"><span>◌</span> Research journal</Link><Link href="/operations"><LockKeyhole size={17} /> Operations</Link><button><span>≡</span> Automations <span className="sidebar-soon">Soon</span></button></div><div className="sidebar-section sidebar-section--bottom"><Link href="/profile" className="is-active"><UserRound size={17} /> Profile</Link><button><span>?</span> Help center</button></div><Link href="/profile" className="sidebar-profile"><div className="avatar">AR</div><div><strong>Analyst preview</strong><span>Observer access</span></div></Link></aside>;
}

function Toggle({ label, description, checked, onChange }: { label: string; description: string; checked: boolean; onChange: (value: boolean) => void }) {
  return <label className="profile-toggle"><span><strong>{label}</strong><small>{description}</small></span><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><i className="toggle-track"><b /></i></label>;
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("account");
  const [name, setName] = useState("Arman Rahimi");
  const [email, setEmail] = useState("arman@iran-coin.example");
  const [role, setRole] = useState("Independent analyst");
  const [weeklyNote, setWeeklyNote] = useState(true);
  const [signalAlerts, setSignalAlerts] = useState(true);
  const [productNotes, setProductNotes] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const save = async () => {
    if (isSaving) return;
    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    if (normalizedName.length < 3) {
      toast.error("ذخیره انجام نشد.", { description: "نام کامل باید حداقل ۳ کاراکتر داشته باشد." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      toast.error("ذخیره انجام نشد.", { description: "لطفاً یک آدرس ایمیل معتبر وارد کنید." });
      return;
    }
    setIsSaving(true);
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 900));
      toast.success("اطلاعات پروفایل ذخیره شد.", { description: "تغییرات در این پیش‌نمایش با موفقیت ثبت شدند." });
    } catch {
      toast.error("ذخیره با خطا مواجه شد.", { description: "لطفاً دوباره تلاش کنید." });
    } finally {
      setIsSaving(false);
    }
  };
  const soon = () => toast("این قابلیت در نسخهٔ نمایشی فعال نیست.", { description: "برای فعال‌سازی واقعی، احراز هویت و ذخیره‌سازی امن سمت سرور لازم است." });
  return <SiteShell><div className="app-shell"><DashboardSidebar /><div className="app-main profile-main"><header className="app-topbar profile-topbar"><div><span className="eyebrow">Workspace / Profile</span><h1>Account settings.</h1></div><div className="profile-topbar__status"><ShieldCheck size={15} /> Protected preview</div></header><div className="profile-intro"><div className="profile-avatar-large">AR</div><div><h2>Arman Rahimi</h2><p>Independent analyst · Observer access</p><span className="profile-last-seen">Last profile review / 28 Aug 2026</span></div><button className="button button--outline button--compact" onClick={soon}><LogOut size={14} /> Sign out</button></div><div className="profile-layout"><nav className="profile-tabs" aria-label="Profile sections">{profileTabs.map(({ id, label, icon: Icon }) => <button key={id} className={activeTab === id ? "is-active" : ""} onClick={() => setActiveTab(id)}><Icon size={16} />{label}<ChevronRight size={14} /></button>)}</nav><section className="profile-panel">{activeTab === "account" && <><div className="profile-panel__heading"><div><span className="eyebrow">Account identity</span><h2>Personal details</h2></div><span className="profile-state"><i /> Editable</span></div><p className="profile-panel__lede">Keep the basics current. These details identify your workspace, not a trading account.</p><div className="profile-form"><label><span>Full name</span><input value={name} onChange={(event) => setName(event.target.value)} /></label><label><span>Email address</span><div className="input-with-icon"><Mail size={15} /><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" /></div></label><label><span>Workspace role</span><select value={role} onChange={(event) => setRole(event.target.value)}><option>Independent analyst</option><option>Research lead</option><option>Operations observer</option></select></label><label><span>Time zone</span><select defaultValue="Europe/Tehran"><option value="Europe/Tehran">Tehran · UTC+03:30</option><option value="UTC">UTC</option><option value="America/New_York">New York · UTC−04:00</option></select></label></div><div className="profile-panel__footer"><span><Check size={14} /> Changes are local to this preview</span><button className="button button--copper" onClick={() => void save()} disabled={isSaving} aria-busy={isSaving}><span className={isSaving ? "button-spinner" : ""}>{isSaving ? <LoaderCircle size={15} /> : <Save size={15} />}</span>{isSaving ? "Saving…" : "Save changes"}</button></div></>}{activeTab === "notifications" && <><div className="profile-panel__heading"><div><span className="eyebrow">Signal desk</span><h2>Notification rhythm</h2></div><span className="profile-state"><i /> Preference</span></div><p className="profile-panel__lede">Choose what earns a place in your attention. High-frequency alerts stay off by default.</p><div className="toggle-list"><Toggle label="Weekly field note" description="A considered research note, once a week." checked={weeklyNote} onChange={setWeeklyNote} /><Toggle label="Signal watchlist changes" description="Only when a tracked context score shifts materially." checked={signalAlerts} onChange={setSignalAlerts} /><Toggle label="Product notes" description="Occasional updates about workspace capabilities." checked={productNotes} onChange={setProductNotes} /></div><div className="profile-panel__footer"><span><Bell size={14} /> {Number(weeklyNote) + Number(signalAlerts) + Number(productNotes)} preferences active</span><button className="button button--copper" onClick={() => void save()} disabled={isSaving} aria-busy={isSaving}><span className={isSaving ? "button-spinner" : ""}>{isSaving ? <LoaderCircle size={15} /> : <Save size={15} />}</span>{isSaving ? "Saving…" : "Save preferences"}</button></div></>}{activeTab === "security" && <><div className="profile-panel__heading"><div><span className="eyebrow">Access control</span><h2>Security posture</h2></div><span className="profile-state profile-state--sage"><i /> Protected</span></div><p className="profile-panel__lede">Security actions are intentionally explicit. No API secret is displayed or stored in this frontend preview.</p><div className="security-list"><button onClick={soon}><div className="security-icon"><KeyRound size={17} /></div><div><strong>Change password</strong><small>Update your sign-in credential</small></div><ChevronRight size={17} /></button><button onClick={soon}><div className="security-icon"><ShieldCheck size={17} /></div><div><strong>Two-step verification</strong><small>Not configured in this preview</small></div><span className="status-pill status-pill--copper">Setup</span></button><button onClick={soon}><div className="security-icon"><LockKeyhole size={17} /></div><div><strong>Connected venues</strong><small>Review permissions and revoke access</small></div><ChevronRight size={17} /></button></div><div className="profile-boundary-note"><ShieldCheck size={16} /><span><strong>Vault boundary.</strong> Exchange secrets must be onboarded server-side, encrypted at rest, masked in every staff interface, and excluded from logs.</span></div></>}{activeTab === "preferences" && <><div className="profile-panel__heading"><div><span className="eyebrow">Workspace behavior</span><h2>Interface preferences</h2></div><span className="profile-state"><i /> Local</span></div><p className="profile-panel__lede">Set the language and display conventions used across your research and workspace surfaces.</p><div className="preference-rows"><label><span><strong>Language</strong><small>Controls interface copy and system labels.</small></span><select defaultValue="English"><option>English</option><option>فارسی</option></select></label><label><span><strong>Number format</strong><small>How market values are grouped and separated.</small></span><select defaultValue="International"><option>International</option><option>Persian locale</option></select></label><label><span><strong>Reduced motion</strong><small>Respect system accessibility settings for non-essential motion.</small></span><input type="checkbox" defaultChecked /></label></div><div className="profile-panel__footer"><span><Globe2 size={14} /> Preferences apply to this device</span><button className="button button--copper" onClick={() => void save()} disabled={isSaving} aria-busy={isSaving}><span className={isSaving ? "button-spinner" : ""}>{isSaving ? <LoaderCircle size={15} /> : <Save size={15} />}</span>{isSaving ? "Saving…" : "Save preferences"}</button></div></>}</section></div></div></div></SiteShell>;
}
