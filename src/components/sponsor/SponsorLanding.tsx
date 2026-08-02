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
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-xl bg-[var(--gradient-brand)] grid place-items-center shadow-[var(--shadow-glow)]">
            <Code2 className="h-5 w-5 text-white" />
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
            className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-[var(--gradient-brand)] shadow-[var(--shadow-glow)] hover:brightness-110 transition"
          >
            Become Sponsor
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-white/5"
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
            className="lg:hidden overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-[var(--gradient-brand)]"
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
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
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
            National-Level 24 Hour Hackathon · March 2026
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
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white bg-[var(--gradient-brand)] shadow-[var(--shadow-glow)] hover:brightness-110 transition"
            >
              Become a Sponsor
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-foreground glass hover:bg-white/[0.06] transition"
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
                  className="h-8 w-8 rounded-full ring-2 ring-background grid place-items-center text-[10px] font-bold text-white"
                  style={{
                    background: [
                      "linear-gradient(135deg,#6d5ef9,#4f9dff)",
                      "linear-gradient(135deg,#7b61ff,#22c55e)",
                      "linear-gradient(135deg,#4f9dff,#7b61ff)",
                      "linear-gradient(135deg,#22c55e,#6d5ef9)",
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
            <div className="h-8 w-8 rounded-lg bg-[var(--gradient-brand)] grid place-items-center">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <div className="text-xs">
              <div className="font-semibold">AI Track</div>
              <div className="text-muted-foreground">Frontier Models</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-10 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-[var(--shadow-elegant)] hidden sm:flex"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <div className="h-8 w-8 rounded-lg bg-[var(--gradient-brand)] grid place-items-center">
              <Trophy className="h-4 w-4 text-white" />
            </div>
            <div className="text-xs">
              <div className="font-semibold">₹50K+ Prize</div>
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
  { value: 50, suffix: "K+", prefix: "₹", label: "Prize Pool" },
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
              className="text-center"
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
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent glow-hover"
            >
              <div className="relative h-full rounded-2xl bg-card p-6 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative">
                  <div className="h-11 w-11 rounded-xl bg-[var(--gradient-brand)] grid place-items-center shadow-[var(--shadow-glow)]">
                    <w.icon className="h-5 w-5 text-white" />
                  </div>
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
    title: "AI, FinTech, HealthTech, Climate",
    body: "Four flagship tracks plus an Open Innovation category to welcome every kind of builder.",
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

          <ol className="relative border-l border-white/10 pl-6 space-y-8">
            {ABOUT_STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <span className="absolute -left-[34px] top-1 grid h-6 w-6 place-items-center rounded-full bg-[var(--gradient-brand)] ring-4 ring-background">
                  <s.icon className="h-3 w-3 text-white" />
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
    name: "Community Partner",
    price: "In-kind",
    tag: "Non-monetary",
    features: [
      "Logo on Website",
      "Social Media Shoutout",
      "Community Reach",
      "Certificate of Partnership",
    ],
    cta: "Contact Us",
  },
  {
    name: "Silver Sponsor",
    price: "₹10,000",
    tag: "Great to start",
    features: [
      "Logo on Website & Posters",
      "Social Media Promotions",
      "Certificate",
      "Standard Booth",
      "Product Demo Slot",
    ],
    cta: "Contact Us",
  },
  {
    name: "Title Sponsor",
    price: "₹25,000+",
    tag: "Recommended",
    highlight: true,
    features: [
      "Largest Logo Placement",
      "Stage Mention & Recognition",
      "Judge Nomination Slot",
      "Premium Booth",
      "All Social Media Channels",
      "Certificates for Team",
      "Featured on Website",
    ],
    cta: "Become Title Sponsor",
  },
  {
    name: "Gold Sponsor",
    price: "₹15,000",
    tag: "Popular",
    features: [
      "Prominent Logo Placement",
      "Stage Mention",
      "Standard Booth",
      "Social Media Promotions",
      "Certificates",
      "Recruitment Access",
    ],
    cta: "Contact Us",
  },
];

function Packages() {
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
          subtitle="Every tier is flexible — talk to us about co-branded challenges, workshops, or custom activations."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className={`relative rounded-3xl p-[1px] ${
                p.highlight
                  ? "bg-[var(--gradient-brand)] shadow-[var(--shadow-glow)]"
                  : "bg-gradient-to-b from-white/10 to-white/5"
              }`}
            >
              <div className="relative h-full rounded-3xl bg-card p-6 flex flex-col">
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gradient-brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)]">
                    Most Popular
                  </span>
                )}
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {p.tag}
                </div>
                <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold gradient-text">{p.price}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/15 grid place-items-center">
                        <Check className="h-3 w-3 text-[var(--brand-2)]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-[var(--gradient-brand)] text-white hover:brightness-110 shadow-[var(--shadow-glow)]"
                      : "glass text-foreground hover:bg-white/[0.06]"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
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
              <div className="h-10 w-10 rounded-xl bg-[var(--gradient-brand)] grid place-items-center">
                <b.icon className="h-4 w-4 text-white" />
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
  { icon: Calendar, title: "Registration", date: "Jan – Feb 2026" },
  { icon: Mic, title: "Opening Ceremony", date: "Day 1 · 10:00 AM" },
  { icon: Code2, title: "24 Hour Build", date: "Day 1 – Day 2" },
  { icon: ShieldCheck, title: "Judging", date: "Day 2 · Afternoon" },
  { icon: Trophy, title: "Awards Ceremony", date: "Day 2 · Evening" },
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
            className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block"
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
                <div className="mx-auto h-16 w-16 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center shadow-[var(--shadow-glow)] relative z-10">
                  <t.icon className="h-6 w-6 text-white" />
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
                className={`w-full ${g.h} object-cover blur-sm scale-105 group-hover:blur-0 group-hover:scale-100 transition-all duration-700`}
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
                <div className="h-10 w-10 rounded-full bg-[var(--gradient-brand)] grid place-items-center text-sm font-bold">
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
                    <div className="font-medium">SRM Institute, Kattankulathur, TN</div>
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
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] focus:border-transparent transition"
                    placeholder="Tell us about your sponsorship goals..."
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white bg-[var(--gradient-brand)] shadow-[var(--shadow-glow)] hover:brightness-110 transition disabled:opacity-70"
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
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] focus:border-transparent transition"
      />
    </div>
  );
}

/* --------------------------------- Footer ------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-[var(--gradient-brand)] grid place-items-center">
              <Code2 className="h-5 w-5 text-white" />
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
            <li>SRM Institute, Kattankulathur</li>
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
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-white bg-[var(--gradient-brand)] shadow-[var(--shadow-glow)] hover:brightness-110 transition"
          >
            Become Sponsor <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
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
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-glow)] grid place-items-center hover:brightness-110 transition"
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
        <Benefits />
        <Timeline />
        <Gallery />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
