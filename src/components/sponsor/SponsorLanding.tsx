import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Download,
  Eye,
  Users,
  Network,
  Briefcase,
  Heart,
  Rocket,
  Check,
  Star,
  Calendar,
  Mic,
  Code2,
  Trophy,
  Award,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ChevronDown,
  ChevronUp,
  Layers,
  Palette,
  ShieldCheck,
  Globe,
  Camera,
  Handshake,
  UserPlus,
  Gift,
} from "lucide-react";

import heroImage from "@/assets/hero-hackathon.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

/* ------------------------------ Navigation ------------------------------ */

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "Packages", href: "#packages" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-[rgba(255,236,200,0.12)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-xl bg-white grid place-items-center shadow-[var(--shadow-glow)] overflow-hidden p-0.5">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SRM InnovateX logo" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">SRM InnovateX</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              2026
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground gradient-bg shadow-[var(--shadow-glow)] hover:brightness-110 transition"
          >
            Become Sponsor
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-[rgba(240,180,41,0.08)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-[rgba(255,236,200,0.12)] bg-background/95 backdrop-blur-xl"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-[rgba(240,180,41,0.08)]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground gradient-bg"
              >
                Become Sponsor <ArrowRight className="h-4 w-4" />
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* --------------------------------- Hero --------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--blue-glow)]/20 blur-[140px]"
      />
      {/* Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,180,41,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,180,41,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] pulse-glow" />
            National-Level 24 Hour Hackathon · September 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-[42px] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight"
          >
            Become a Sponsor of{" "}
            <span className="gradient-text">SRM InnovateX 2026</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            Partner with one of the largest student-led hackathons and showcase your brand to
            India&apos;s next generation of innovators, builders, and future employees.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground gradient-bg shadow-[var(--shadow-glow)] hover:brightness-110 transition"
            >
              Become a Sponsor
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-foreground glass hover:bg-[rgba(240,180,41,0.08)] transition"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l, i) => (
                <div
                  key={l}
                  className="h-8 w-8 rounded-full ring-2 ring-background grid place-items-center text-[10px] font-bold text-primary-foreground"
                  style={{
                    background: [
                      "linear-gradient(135deg,#f0b429,#ff9f1c)",
                      "linear-gradient(135deg,#ffd166,#ff7a45)",
                      "linear-gradient(135deg,#ff9f1c,#ffd166)",
                      "linear-gradient(135deg,#ff7a45,#f0b429)",
                    ][i],
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            Backed by leading tech & startup partners
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden gradient-border shadow-[var(--shadow-elegant)]">
            <div className="absolute inset-0 bg-[var(--gradient-radial)] pointer-events-none" />
            <img
              src={heroImage}
              alt="Hackathon developers with holographic AI interfaces"
              width={1280}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating chips */}
          <motion.div
            className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-[var(--shadow-elegant)] hidden sm:flex"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-8 w-8 rounded-lg gradient-bg grid place-items-center">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="text-xs">
              <div className="font-semibold">Dev Track</div>
              <div className="text-muted-foreground">24H Build Sprint</div>

            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-10 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-[var(--shadow-elegant)] hidden sm:flex"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <div className="h-8 w-8 rounded-lg gradient-bg grid place-items-center">
              <Trophy className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="text-xs">
              <div className="font-semibold">₹60K Prize</div>
              <div className="text-muted-foreground">Grand Pool</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-8 -top-4 glass rounded-full px-3 py-1.5 text-xs font-medium hidden md:flex items-center gap-1.5"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <Star className="h-3 w-3 text-[var(--brand-2)]" />
            National · 24H
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* -------------------------- Animated Counter ---------------------------- */

function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 200, suffix: "+", label: "Participants" },
  { value: 50, suffix: "+", label: "Teams" },
  { value: 20, suffix: "+", label: "Colleges" },
  { value: 24, suffix: "H", label: "Non-stop Build" },
  { value: 60, suffix: "K", prefix: "₹", label: "Prize Pool" },
];

function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="relative py-16">
      <h2 id="stats-heading" className="sr-only">
        Event statistics
      </h2>
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass rounded-3xl px-6 py-10 sm:px-10 grid grid-cols-2 md:grid-cols-5 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`text-center${i === STATS.length - 1 && STATS.length % 2 !== 0 ? " col-span-2 md:col-span-1" : ""}`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text tracking-tight">
                <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Why Sponsor ----------------------------- */

const WHY = [
  {
    icon: Eye,
    title: "Brand Visibility",
    body: "Get your brand in front of 200+ engineers, faculty and industry judges across every event touchpoint.",
  },
  {
    icon: Users,
    title: "Access to Student Talent",
    body: "Interact directly with India's most promising builders — pre-final and final year engineering students.",
  },
  {
    icon: Network,
    title: "Networking Opportunities",
    body: "Meet founders, faculty leadership, VCs and CSR partners under a single premium roof.",
  },
  {
    icon: Briefcase,
    title: "Recruitment Pipeline",
    body: "Shortlist candidates for internships and full-time roles by watching them build in real time.",
  },
  {
    icon: Heart,
    title: "CSR & Community Impact",
    body: "Support open innovation across AI, FinTech, Healthcare and Climate — with measurable outcomes.",
  },
  {
    icon: Rocket,
    title: "Product Promotion",
    body: "Launch APIs, SDKs or challenges. Get real developers using your product for 24 unbroken hours.",
  },
];

function WhySponsor() {
  return (
    <section id="benefits" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Sponsor"
          title={
            <>
              Six reasons to <span className="gradient-text">back InnovateX</span>
            </>
          }
          subtitle="Every sponsorship is designed as a business outcome — visibility, talent, and product traction."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[rgba(240,180,41,0.35)] via-[rgba(255,122,69,0.12)] to-transparent glow-hover"
            >
              <div className="relative h-full rounded-2xl bg-card p-6 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="relative h-11 w-11 rounded-xl gradient-bg grid place-items-center shadow-[var(--shadow-glow)]">
                      <w.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- About --------------------------------- */

const ABOUT_STEPS = [
  {
    icon: Trophy,
    title: "24 Hours of Pure Building",
    body: "A single continuous sprint from ideation to demo — food, energy drinks, and code included.",
  },
  {
    icon: Layers,
    title: "AgriTech, FinTech, EduTech, Sustainability",
    body: "Four focused tracks plus an Open Innovation category to welcome every kind of builder.",
  },
  {
    icon: ShieldCheck,
    title: "Judged by Industry Leaders",
    body: "Founders, engineering leaders and faculty jury evaluate live demos and technical depth.",
  },
  {
    icon: Globe,
    title: "National Reach",
    body: "Participants from 20+ colleges across India — engineered as a serious talent showcase.",
  },
];

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About the Event"
          title={
            <>
              A 24-hour showcase of <span className="gradient-text">India&apos;s next builders</span>
            </>
          }
          subtitle="InnovateX 2026 is engineered as a serious, industry-grade hackathon — not a workshop, not a fest."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={g1}
                alt="Students collaborating during hackathon"
                width={800}
                height={1000}
                loading="lazy"
                className="rounded-2xl w-full h-56 sm:h-72 object-cover gradient-border"
              />
              <img
                src={g2}
                alt="Developer typing code on laptop"
                width={800}
                height={800}
                loading="lazy"
                className="rounded-2xl w-full h-56 sm:h-72 object-cover gradient-border mt-8"
              />
              <img
                src={g4}
                alt="Team planning with sticky notes"
                width={800}
                height={700}
                loading="lazy"
                className="rounded-2xl w-full h-56 sm:h-72 object-cover gradient-border"
              />
              <img
                src={g6}
                alt="Overhead view of a coding workspace"
                width={800}
                height={800}
                loading="lazy"
                className="rounded-2xl w-full h-56 sm:h-72 object-cover gradient-border mt-8"
              />
            </div>
          </div>

          <ol className="relative border-l border-[rgba(255,236,200,0.12)] pl-6 space-y-8">
            {ABOUT_STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <span className="absolute -left-[34px] top-1 grid h-6 w-6 place-items-center rounded-full gradient-bg ring-4 ring-background">
                  <s.icon className="h-3 w-3 text-primary-foreground" />
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Packages ------------------------------- */

const PACKAGES = [
  {
    name: "Community Sponsor",
    price: "₹5,000",
    tag: "Entry Level",
    icon: "🤝",
    features: [
      "Logo on Website",
      "Social Media Shoutout",
      "Certificate of Appreciation",
      "Listed in Partner Directory",
    ],
    extras: [
      "Mention in post-event report",
      "Access to event photo library",
      "Community newsletter feature",
    ],
    compare: { logo: "Small", booth: "—", stage: "—", talent: "—" },
    cta: "Contact Us",
  },
  {
    name: "Silver Sponsor",
    price: "₹10,000",
    tag: "Great to Start",
    icon: "🥈",
    features: [
      "Logo on Website & Posters",
      "3 Dedicated Social Media Posts",
      "Certificate & Logo on Participant Certs",
      "Standard Exhibition Booth",
      "10-min Product Demo Slot",
    ],
    extras: [
      "Logo on banners and standees",
      "Mention during opening ceremony",
      "Post-event digital thank-you",
    ],
    compare: { logo: "Medium", booth: "Standard", stage: "Mention", talent: "Resume drop" },
    cta: "Contact Us",
  },
  {
    name: "Title Sponsor",
    price: "₹35,000",
    tag: "Recommended",
    icon: "👑",
    highlight: true,
    features: [
      "Largest Logo — Event Name Co-brand",
      "Opening & Closing Keynote Slot",
      "Judge Nomination",
      "Co-branded Challenge Track",
      "Full Participant Resume Book",
      "Premium Exhibition Booth",
      "All Social Media Channels",
    ],
    extras: [
      "Co-branded challenge track with its own prize",
      "Dedicated email blast to all registrants",
      "Banner + stage backdrop branding",
      "Priority recruitment access",
    ],
    compare: { logo: "Largest", booth: "Premium", stage: "Keynote", talent: "Full resume book" },
    cta: "Become Title Sponsor",
  },
  {
    name: "Gold Sponsor",
    price: "₹20,000",
    tag: "Popular",
    icon: "🥇",
    features: [
      "Prominent Logo Placement",
      "Stage Mention & Recognition",
      "Workshop / Mentoring Session Slot",
      "Branded Merchandise in Swag Kits",
      "Recruitment Access + Shortlist",
      "All Silver Benefits",
    ],
    extras: [
      "5 dedicated social posts",
      "Shortlisted candidate introductions",
      "On-site booth with branding",
    ],
    compare: { logo: "Large", booth: "Standard+", stage: "Mention", talent: "Shortlist access" },
    cta: "Contact Us",
  },
];

const COMPARE_ROWS: { key: keyof (typeof PACKAGES)[number]["compare"]; label: string }[] = [
  { key: "logo", label: "Logo size" },
  { key: "booth", label: "Booth" },
  { key: "stage", label: "Stage time" },
  { key: "talent", label: "Talent access" },
];

function Packages() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="packages" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sponsorship Packages"
          title={
            <>
              Pick a tier that <span className="gradient-text">fits your goals</span>
            </>
          }
          subtitle="Hover a card to preview, expand it to compare every benefit side by side."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PACKAGES.map((p, i) => {
            const isOpen = expanded === p.name;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-3xl p-[1px] transition-shadow duration-300 ${
                  p.highlight
                    ? "gradient-bg shadow-[var(--shadow-glow)]"
                    : "bg-gradient-to-b from-[rgba(240,180,41,0.25)] to-[rgba(255,122,69,0.08)] hover:shadow-[var(--shadow-elegant)]"
                }`}
              >
                <div className="relative h-full rounded-3xl bg-card p-6 flex flex-col overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(400px_200px_at_50%_0%,rgba(240,180,41,0.14),transparent_70%)]" />
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow)]">
                      Most Popular
                    </span>
                  )}
                  <div className="relative flex items-center justify-between">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{p.tag}</div>
                    {"icon" in p && <span className="text-2xl">{(p as any).icon}</span>}
                  </div>
                  <h3 className="relative mt-1 text-xl font-bold">{p.name}</h3>
                  <div className="relative mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold gradient-text">{p.price}</span>
                  </div>
                  <ul className="relative mt-6 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground/85"
                      >
                        <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/15 grid place-items-center transition-colors group-hover:bg-primary/25">
                          <Check className="h-3 w-3 text-[var(--brand-2)]" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="relative overflow-hidden"
                      >
                        <div className="mt-5 border-t border-[rgba(255,236,200,0.12)] pt-5">
                          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">
                            Also included
                          </div>
                          <ul className="mt-3 space-y-2">
                            {p.extras.map((e) => (
                              <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-2)]" />
                                {e}
                              </li>
                            ))}
                          </ul>
                          <dl className="mt-5 space-y-2">
                            {COMPARE_ROWS.map((r) => (
                              <div
                                key={r.key}
                                className="flex items-center justify-between gap-3 rounded-xl bg-[rgba(240,180,41,0.06)] px-3 py-2 text-xs"
                              >
                                <dt className="text-muted-foreground">{r.label}</dt>
                                <dd className="font-semibold text-foreground">{p.compare[r.key]}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : p.name)}
                    aria-expanded={isOpen}
                    className="relative mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-[rgba(255,236,200,0.14)] px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:text-foreground hover:border-[rgba(240,180,41,0.45)] hover:bg-[rgba(240,180,41,0.08)]"
                  >
                    {isOpen ? "Show less" : "Compare benefits"}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <a
                    href="#contact"
                    className={`relative mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                      p.highlight
                        ? "gradient-bg text-primary-foreground hover:brightness-110 shadow-[var(--shadow-glow)]"
                        : "glass text-foreground hover:bg-[rgba(240,180,41,0.08)]"
                    }`}
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ----------------------------- In-Kind Sponsorship --------------------- */

const IN_KIND = [
  { icon: "🍕", label: "Food & Refreshments", desc: "Sponsor meals, snacks, and energy drinks for 200+ participants." },
  { icon: "🧢", label: "Caps & Merchandise", desc: "Branded caps, hoodies, or apparel for all participants." },
  { icon: "🎁", label: "Goodies & Swag", desc: "Gadgets, kits, or branded goody bags in the swag packs." },
  { icon: "🖨️", label: "Printing & Banners", desc: "Event banners, certificates, posters and standees." },
  { icon: "☁️", label: "Cloud / API Credits", desc: "AWS, GCP, Azure credits or API access for participants to build with." },
  { icon: "💻", label: "Software Subscriptions", desc: "Dev tools, licenses, SaaS products, or IDE subscriptions." },
  { icon: "🏆", label: "Awards & Trophies", desc: "Sponsor the winner trophies, shields and medals." },
  { icon: "🎟️", label: "Vouchers & Gift Cards", desc: "E-commerce, food delivery, or platform vouchers for participants." },
];

function InKindSponsorship() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="In-Kind Sponsorship"
          title={
            <>
              Not cash? <span className="gradient-text">Contribute in kind</span>
            </>
          }
          subtitle="No monetary budget? We welcome in-kind contributions — sponsor an experience, a meal, or a product that participants will love."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {IN_KIND.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass rounded-2xl p-5 glow-hover group relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative flex items-start gap-4">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            All in-kind sponsors receive website acknowledgment, social media mentions, and a certificate of appreciation.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full gradient-bg text-primary-foreground shadow-[var(--shadow-glow)] px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
          >
            Discuss In-Kind Sponsorship <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Sponsor Benefits (icons timeline) ----- */

const BENEFITS = [
  { icon: Globe, label: "Logo on Website" },
  { icon: Palette, label: "Logo on Posters" },
  { icon: Award, label: "Certificates" },
  { icon: Mic, label: "Stage Recognition" },
  { icon: Camera, label: "Social Promotions" },
  { icon: Rocket, label: "Product Showcase" },
  { icon: Handshake, label: "On-Site Booth" },
  { icon: UserPlus, label: "Recruitment Access" },
  { icon: ShieldCheck, label: "Judge Nomination" },
  { icon: Gift, label: "Goodie Distribution" },
];

function Benefits() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sponsor Benefits"
          title={
            <>
              Everything you get when you <span className="gradient-text">partner with us</span>
            </>
          }
        />
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="glass rounded-2xl p-5 flex flex-col items-start gap-3 glow-hover"
            >
              <div className="h-10 w-10 rounded-xl gradient-bg grid place-items-center">
                <b.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="text-sm font-medium">{b.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Timeline ------------------------------- */

const TIMELINE = [
  { icon: Calendar, title: "Registration", date: "Aug – Sep 10, 2026" },
  { icon: Mic, title: "Opening Ceremony", date: "Sep 19 · 09:00 AM" },
  { icon: Code2, title: "24 Hour Build", date: "Sep 19 – Sep 20" },
  { icon: ShieldCheck, title: "Judging", date: "Sep 20 · Afternoon" },
  { icon: Trophy, title: "Awards Ceremony", date: "Sep 20 · Evening" },
];

function Timeline() {
  return (
    <section id="timeline" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Event Timeline"
          title={
            <>
              From registration to <span className="gradient-text">the awards stage</span>
            </>
          }
        />

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-[rgba(240,180,41,0.35)] to-transparent hidden lg:block"
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TIMELINE.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="mx-auto h-16 w-16 rounded-2xl gradient-bg grid place-items-center shadow-[var(--shadow-glow)] relative z-10">
                  <t.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="mt-5 text-center">
                  <div className="text-sm font-semibold">{t.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{t.date}</div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Gallery ------------------------------- */

const GALLERY = [
  { src: g1, alt: "Students collaborating on laptops", h: "h-72 sm:h-80" },
  { src: g3, alt: "Hackathon presentation on stage", h: "h-64 sm:h-96" },
  { src: g2, alt: "Hands typing code with neon lighting", h: "h-56 sm:h-72" },
  { src: g5, alt: "Trophy under stage lights with confetti", h: "h-72 sm:h-96" },
  { src: g4, alt: "Team planning with sticky notes", h: "h-64 sm:h-72" },
  { src: g6, alt: "Overhead view of a coding workspace", h: "h-72 sm:h-80" },
];

function Gallery() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Gallery"
          title={
            <>
              Moments from the <span className="gradient-text">arena floor</span>
            </>
          }
        />
        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="mb-5 group relative overflow-hidden rounded-2xl gradient-border break-inside-avoid"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full ${g.h} object-cover scale-100 group-hover:scale-105 transition-all duration-700`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ ---------------------------------- */

const FAQ = [
  {
    q: "Who can sponsor SRM InnovateX 2026?",
    a: "Any technology company, startup, brand, agency, investor, CSR arm or local business aligned with student innovation is welcome to sponsor.",
  },
  {
    q: "How do I sponsor the event?",
    a: "Fill the sponsorship request form on this page. Our team responds within 24 business hours with a curated proposal.",
  },
  {
    q: "Can early-stage startups sponsor?",
    a: "Absolutely — we have Community Partner and Silver tiers designed specifically for startups looking for exposure and hiring reach.",
  },
  {
    q: "Can I become a hiring / recruitment partner?",
    a: "Yes. All Gold and Title sponsors get direct recruitment access, and we offer standalone recruitment partnerships on request.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfer (NEFT / RTGS), UPI, and international wires. Payments go to the official SRM InnovateX account.",
  },
  {
    q: "Will I receive an invoice and GST receipt?",
    a: "Yes. Every sponsor receives a signed invoice with GST details for accounting and CSR reporting.",
  },
];

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium">{q}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Answers before you <span className="gradient-text">reach out</span>
            </>
          }
        />
        <div className="mt-12 space-y-4">
          {FAQ.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ---------------------------- */

const TESTIMONIALS = [
  {
    name: "Dr. R. Krishnan",
    role: "Faculty Coordinator, SRM",
    body: "InnovateX has become the flagship where our top engineering talent meets industry — a serious hackathon, not a workshop.",
  },
  {
    name: "Ananya Kapoor",
    role: "Head of Talent, Fintech Startup",
    body: "We hired two of our best engineers directly from the InnovateX finalists cohort. Highest signal per rupee we've spent on hiring.",
  },
  {
    name: "Rahul Mehta",
    role: "Final Year, CSE",
    body: "Twenty-four hours of pure building alongside founders and judges you would otherwise never get to meet in college.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What partners and students <span className="gradient-text">say about us</span>
            </>
          }
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 glow-hover"
            >
              <div className="flex gap-1 text-[var(--brand-2)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-bg grid place-items-center text-sm font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Current Sponsors --------------------------- */

const CURRENT_SPONSORS = [
  {
    name: "Paryan Technologies Private Limited",
    type: "Financial Sponsor",
    contribution: "₹15,000 cash sponsorship",
    description: "Providing financial support to fuel prizes, venue operations, and event infrastructure.",
    icon: "🏢",
    color: "from-primary/20 to-accent/10",
  },
  {
    name: "Big Bucks Innovation Private Limited",
    type: "Product & Talent Partner",
    contribution: "₹2,000 participant vouchers + internships",
    description: "Offering vouchers for all registered participants plus software and IoT internship opportunities for top performers.",
    icon: "💡",
    color: "from-accent/20 to-primary/10",
  },
];

function CurrentSponsors() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Current Partners"
          title={
            <>
              Proudly backed by <span className="gradient-text">industry leaders</span>
            </>
          }
          subtitle="Join these forward-thinking organizations already committed to powering InnovateX 2026."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {CURRENT_SPONSORS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="glass rounded-3xl p-6 sm:p-8 glow-hover group relative overflow-hidden"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${s.color} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
              />
              <div className="relative flex items-start gap-5">
                <div className="text-4xl shrink-0">{s.icon}</div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{s.type}</div>
                  <h3 className="mt-1 text-lg font-bold">{s.name}</h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    <Check className="h-3 w-3" /> {s.contribution}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          More partnerships being finalized — reach out to join this list.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------- Contact ------------------------------- */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl gradient-border p-6 sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/30 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[var(--blue-glow)]/20 blur-[140px]"
          />

          <div className="relative grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Get In Touch"
                title={
                  <>
                    Let&apos;s craft a <span className="gradient-text">custom sponsorship</span>
                  </>
                }
                subtitle="Share a few details and our sponsorship team will get back within one business day."
              />
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl glass grid place-items-center">
                    <Mail className="h-4 w-4 text-[var(--brand-2)]" />
                  </div>
                  <div>
                    <div className="text-muted-foreground">Email</div>
                    <div className="font-medium">sponsors@srminnovatex.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl glass grid place-items-center">
                    <Phone className="h-4 w-4 text-[var(--brand-2)]" />
                  </div>
                  <div>
                    <div className="text-muted-foreground">Phone</div>
                    <div className="font-medium">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl glass grid place-items-center">
                    <MapPin className="h-4 w-4 text-[var(--brand-2)]" />
                  </div>
                  <div>
                    <div className="text-muted-foreground">Venue</div>
                    <div className="font-medium">SRM University, Ramapuram, Chennai</div>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 4000);
              }}
              className="glass rounded-2xl p-6 sm:p-8 space-y-4"
              aria-label="Sponsorship request form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Company Name" name="company" required />
                <Field label="Contact Person" name="person" required />
                <Field label="Email" type="email" name="email" required />
                <Field label="Phone" type="tel" name="phone" />
                <div className="sm:col-span-2">
                  <Field label="Website" name="website" placeholder="https://" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl bg-[rgba(240,180,41,0.05)] border border-[rgba(255,236,200,0.12)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition"
                    placeholder="Tell us about your sponsorship goals..."
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground gradient-bg shadow-[var(--shadow-glow)] hover:brightness-110 transition disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" /> Request Sent
                  </>
                ) : (
                  <>
                    Request Sponsorship <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                By submitting, you agree to be contacted by the SRM InnovateX team.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-muted-foreground mb-1.5">
        {label} {required && <span className="text-[var(--brand-2)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-[rgba(240,180,41,0.05)] border border-[rgba(255,236,200,0.12)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition"
      />
    </div>
  );
}

/* --------------------------------- Footer ------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-[rgba(255,236,200,0.12)] mt-16">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white grid place-items-center overflow-hidden p-0.5">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SRM InnovateX logo" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold">SRM InnovateX</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                2026
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            India&apos;s premier student-led 24-hour national hackathon. Building the next
            generation of innovators.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Instagram, Github].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 rounded-lg glass grid place-items-center hover:text-[var(--brand-2)] transition"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-foreground transition">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>sponsors@srminnovatex.in</li>
            <li>+91 98765 43210</li>
            <li>SRM University, Ramapuram</li>
            <li>Tamil Nadu, India</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Sponsor Us</div>
          <p className="text-sm text-muted-foreground mb-4">
            Ready to reach India&apos;s next generation of builders?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-primary-foreground gradient-bg shadow-[var(--shadow-glow)] hover:brightness-110 transition"
          >
            Become Sponsor <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="border-t border-[rgba(255,236,200,0.12)]">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 SRM InnovateX. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------- Back to top button ------------------------- */

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full gradient-bg text-primary-foreground shadow-[var(--shadow-glow)] grid place-items-center hover:brightness-110 transition"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* --------------------------- Section Header helper ---------------------- */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      <div
        className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] ${
          align === "center" ? "" : ""
        }`}
      >
        <Star className="h-3 w-3 text-[var(--brand-2)]" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

/* --------------------------------- Page --------------------------------- */

export default function SponsorLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhySponsor />
        <About />
        <Packages />
        <InKindSponsorship />
        <Benefits />
        <Timeline />
        <Gallery />
        <Faq />
        <Testimonials />
        <CurrentSponsors />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
