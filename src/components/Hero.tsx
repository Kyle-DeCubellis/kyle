"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionTemplate,
  motion,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

// ─── Terminal sequence ───────────────────────────────────────────────────────

const LINES: { prompt?: string; text: string; subtext?: string; delay: number }[] = [
  { prompt: "$ ", text: "whoami",                              delay: 300  },
  { text: "kyle-decubellis",                                  delay: 700  },
  { text: "",                                                 delay: 900  },
  { prompt: "$ ", text: "cat ./background.log",               delay: 1100 },
  {
    text: "[2012] Bose Corporation",
    subtext: "          -> co-op kid > lead project engineer",
    delay: 1600,
  },
  {
    text: "[2019] Bose Frames",
    subtext: "          -> napkin sketch > shipped to market",
    delay: 2300,
  },
  {
    text: "[2020] Hatch",
    subtext: "          -> 1M+ connected devices shipped",
    delay: 3000,
  },
  {
    text: "[2021] VP Product",
    subtext: "          -> built the whole stack, start to scale",
    delay: 3700,
  },
  { text: "",                                                 delay: 4200 },
  { prompt: "$ ", text: "ls ./credentials/",                  delay: 4400 },
  { text: "patents/[10-granted-4-pending]/",                  delay: 4800 },
  { text: "northeastern-ME/",                                 delay: 5000 },
  { text: "bose/  hatch/  raycon/",                           delay: 5200 },
  { text: "",                                                 delay: 5400 },
  { prompt: "$ ", text: "ls ./services/",                     delay: 5600 },
  { text: "websites/  ai-tools/  strategy/",                  delay: 6000 },
  { text: "full-stack/",                                      delay: 6200 },
  { text: "",                                                 delay: 6400 },
  { prompt: "$ ", text: "./launch --no-jargon",               delay: 6600 },
  { text: "> compiling warmth......... ✓",                    delay: 7100 },
  { text: "> stripping tech-bro....... ✓",                    delay: 7500 },
  { text: "> loading craft............ ✓",                    delay: 7900 },
  { text: "> ready.",                                         delay: 8300 },
];

function TerminalLine({
  line,
  visible,
  isLast,
}: {
  line: (typeof LINES)[0];
  visible: boolean;
  isLast: boolean;
}) {
  const isOutput = !line.prompt && line.text !== "";
  const isEmpty = line.text === "";

  if (isEmpty) return <div className="h-3" />;

  // Split subtext at "->" so we can color the arrow independently
  const subtextParts = line.subtext
    ? (() => {
        const idx = line.subtext.indexOf("->");
        return {
          before: line.subtext.slice(0, idx),
          after: line.subtext.slice(idx + 2),
        };
      })()
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Primary line */}
      <div
        className={`flex items-start gap-1.5 font-mono text-xs md:text-sm leading-relaxed ${
          isOutput ? "pl-3 sm:pl-4 text-amber/60" : "text-amber"
        }`}
      >
        {line.prompt && (
          <span className="text-amber/40 select-none flex-shrink-0">{line.prompt}</span>
        )}
        <span>{line.text}</span>
        {isLast && visible && !subtextParts && (
          <span className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-amber ml-0.5 animate-pulse" />
        )}
      </div>

      {/* Indented subtext line with colored arrow */}
      {subtextParts && (
        <div
          className="font-mono text-xs md:text-sm leading-relaxed pl-3 sm:pl-4 text-amber/60"
          style={{ whiteSpace: "pre" }}
        >
          <span className="select-none">{subtextParts.before}</span>
          <span className="text-amber">-&gt;</span>
          <span>{subtextParts.after}</span>
          {isLast && visible && (
            <span className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-amber ml-0.5 animate-pulse align-middle" />
          )}
        </div>
      )}
    </motion.div>
  );
}

function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleCount(i + 1);
      }, line.delay);
      return () => clearTimeout(t);
    });
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden">
      {/* Window chrome */}
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-2 mb-4 opacity-40">
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
          <span
            className="ml-4 text-amber/30 text-xs font-mono tracking-widest"
          >
            kyle@local ~ zsh
          </span>
        </div>

        {/* Lines */}
        <div className="space-y-0.5">
          {LINES.map((line, i) => (
            <TerminalLine
              key={i}
              line={line}
              visible={i < visibleCount}
              isLast={i === visibleCount - 1}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint — only visible before scrolling */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-amber/30 text-xs tracking-widest">
          scroll to ascend
        </span>
        <ArrowDown size={14} className="text-amber/30" />
      </motion.div>
    </div>
  );
}

// ─── Dark hero (seamless continuation of terminal) ────────────────────────────

function HeroContent() {
  return (
    <div className="absolute inset-0" style={{ background: "#0a0804" }}>
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-3xl mx-auto px-6 pt-20 pb-16">

        {/* Headline */}
        <h1
          className="text-ivory text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          This started with a favor.
        </h1>

        {/* Body */}
        <div
          className="mt-10 space-y-5 text-amber/70 text-lg sm:text-xl leading-loose max-w-2xl"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          <p>
            A friend needed a website. A family member needed help getting a new
            job. I said yes — and realized it was the most fulfilling work I&apos;d
            ever done.
          </p>
          <p>
            Not because it was easy. Because it mattered to the person sitting
            across from me in a way that shipping a patent never quite does.
          </p>
          <p>So I kept saying yes. Haven&apos;t stopped.</p>
        </div>

        {/* Terminal-style comment lines */}
        <div className="mt-10 space-y-1 font-mono text-xs text-amber/50">
          <div>$ # you could use fiverr.</div>
          <div>$ # that&apos;s not what I am.</div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#work"
            className="font-mono text-amber hover:text-amber-light transition-colors duration-200 text-sm tracking-wide"
          >
            See the work →
          </a>
        </div>

        {/* Booking note */}
        <p className="mt-6 font-mono text-amber/35 text-xs">
          Currently booking Spring 2026 — a small number of spots at a time.
        </p>

      </div>

      {/* Bottom fade into Services (#faf6f0 / ivory) */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ height: "120px", background: "linear-gradient(to bottom, #0a0804, #faf6f0)" }}
      />
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Terminal recedes: fades out, scales down slightly, sinks away
  const terminalOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const terminalScale   = useTransform(scrollYProgress, [0, 0.45], [1, 0.94]);
  const terminalY       = useTransform(scrollYProgress, [0, 0.45], [0, 40]);
  const terminalBlurVal = useTransform(scrollYProgress, [0, 0.45], [0, 14]);
  const terminalFilter  = useMotionTemplate`blur(${terminalBlurVal}px)`;

  // Hero descends to meet you: rises up from above, fades in
  const heroOpacity = useTransform(scrollYProgress, [0.1, 0.55], [0, 1]);
  const heroY       = useTransform(scrollYProgress, [0.1, 0.55], [-50, 0]);

  return (
    // Tall section — gives room to scroll through the transition
    <section
      ref={containerRef}
      id="hero"
      className="relative"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: "#0a0804" }}>

        {/* ── Layer 1: Terminal (ground level) ── */}
        <motion.div
          className="absolute inset-0 z-20"
          style={{
            opacity: terminalOpacity,
            scale: terminalScale,
            y: terminalY,
            filter: terminalFilter,
            background: "#0a0804",
          }}
        >
          {/* Subtle scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
            }}
          />
          {/* Very subtle warm glow top-left */}
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(193,122,46,0.06) 0%, transparent 70%)",
              transform: "translate(-20%, -20%)",
            }}
          />
          <Terminal />
        </motion.div>

        {/* ── Layer 2: Warm hero (altitude) ── */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            opacity: heroOpacity,
            y: heroY,
          }}
        >
          <HeroContent />
        </motion.div>

      </div>
    </section>
  );
}
