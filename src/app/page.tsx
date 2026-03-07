"use client";

import { useEffect } from "react";

const TERMINAL_HTML = `<span class="t-prompt">$ </span><span class="t-cmd">whoami</span>
<span class="t-out">  kyle-decubellis</span>

<span class="t-prompt">$ </span><span class="t-cmd">cat ./background.log</span>
<span class="t-out">  [2012] Bose Corporation
            </span><span class="t-arrow">-&gt;</span><span class="t-out"> co-op kid &gt; lead project engineer

  [2019] Bose Frames
            </span><span class="t-arrow">-&gt;</span><span class="t-out"> napkin sketch &gt; shipped to market

  [2020] Hatch
            </span><span class="t-arrow">-&gt;</span><span class="t-out"> 1M+ connected devices shipped

  [2021] VP Product
            </span><span class="t-arrow">-&gt;</span><span class="t-out"> built the whole stack, start to scale</span>

<span class="t-prompt">$ </span><span class="t-cmd">ls ./credentials/</span>
<span class="t-out">  patents/[10-granted-4-pending]/
  northeastern-ME/
  bose/ hatch/ raycon/</span>

<span class="t-prompt">$ </span><span class="t-cmd">ls ./services/</span>
<span class="t-out">  websites/ ai-tools/ strategy/ full-stack/</span>

<span class="t-prompt">$ </span><span class="t-cmd">./launch --for=real-people --no-jargon</span>
<span class="t-out">  &gt; compiling warmth.............. </span><span class="t-check">✓</span>
<span class="t-out">  &gt; stripping tech-bro............. </span><span class="t-check">✓</span>
<span class="t-out">  &gt; loading craft.................. </span><span class="t-check">✓</span>
<span class="t-out">  &gt; ready. </span><span class="t-cursor">▌</span>`;

const TICKER_ITEMS = [
  { label: "Resume rewrite", heavy: true },
  { label: "Logo design", heavy: false },
  { label: "Full website", heavy: true },
  { label: "Product roadmap", heavy: false },
  { label: "AI workflow", heavy: true },
  { label: "E-commerce launch", heavy: false },
  { label: "Brand identity", heavy: true },
  { label: "Pitch deck", heavy: false },
  { label: "Image generation", heavy: true },
  { label: "Manufacturing sourcing", heavy: false },
  { label: "SEO audit", heavy: true },
  { label: "Automation build", heavy: false },
  { label: "Social content", heavy: true },
  { label: "Business plan", heavy: false },
];

const WORK_ITEMS = [
  {
    name: "Haven & Co.",
    desc: "Home staging + interior design studio",
    url: "https://home-by-nkm.vercel.app/",
  },
  {
    name: "Studio Marlowe",
    desc: "Editorial interior design brand",
    url: "https://andrea-thomas-interiors.vercel.app/",
  },
  {
    name: "Rob Laurie",
    desc: "Local HVAC specialist",
    url: "https://rob-design-variant-2.vercel.app/",
  },
  {
    name: "Southboro Sitters",
    desc: "Kids activity + sitting service",
    url: "https://southboro-sitters.vercel.app/",
  },
  {
    name: "Dufazz",
    desc: "Photography + videography portfolio",
    url: "https://dufazz.vercel.app/",
  },
  {
    name: "Kyle DeCubellis",
    desc: "This site",
    url: "https://kyledec.com/",
  },
];

const SERVICES = [
  {
    name: "Web Design + Development",
    desc: "Sites that earn trust, convert visitors, and actually launch.",
  },
  {
    name: "AI Tools + Automation",
    desc: "Custom workflows, prompt systems, and tools built around how you actually work.",
  },
  {
    name: "Product Strategy + Roadmapping",
    desc: "Clarity on what to build, in what order, and why — from someone who's shipped real products.",
  },
  {
    name: "E-Commerce + Manufacturing",
    desc: "From concept through sourcing, production, and selling. End to end.",
  },
  {
    name: "Resume + Personal Branding",
    desc: "Positioning that reflects what you've actually built — and opens the right doors.",
  },
  {
    name: "Image + Creative Assets",
    desc: "AI-generated photography, renders, and visual assets built to look real and work hard.",
  },
];

export default function Home() {
  useEffect(() => {
    // Nav IntersectionObserver
    const nav = document.getElementById("main-nav");
    const terminalSection = document.getElementById("terminal-hero");

    if (nav && terminalSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            nav.classList.remove("nav-light");
          } else {
            nav.classList.add("nav-light");
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(terminalSection);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Mobile nav toggle
    const hamburger = document.getElementById("nav-hamburger");
    const mobileMenu = document.getElementById("nav-mobile-menu");

    if (!hamburger || !mobileMenu) return;

    const toggle = () => {
      const isOpen = mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    const closeMenu = () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-label", "Open menu");
    };

    hamburger.addEventListener("click", toggle);

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    return () => {
      hamburger.removeEventListener("click", toggle);
      mobileLinks.forEach((link) =>
        link.removeEventListener("click", closeMenu)
      );
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nav" id="main-nav">
        <a href="#" className="nav-monogram">
          KD
        </a>
        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className="nav-hamburger"
          id="nav-hamburger"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="nav-mobile-menu" id="nav-mobile-menu">
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* TERMINAL HERO */}
      <section className="terminal-hero" id="terminal-hero">
        <div className="terminal-inner">
          <div className="terminal-titlebar">
            <div className="terminal-dots">
              <span className="terminal-dot dot-red"></span>
              <span className="terminal-dot dot-yellow"></span>
              <span className="terminal-dot dot-green"></span>
            </div>
            <span className="terminal-label">kyle@local ~ zsh</span>
          </div>

          <div
            className="terminal-content"
            dangerouslySetInnerHTML={{ __html: TERMINAL_HTML }}
          />

          <div className="terminal-scroll-hint">
            scroll to ascend
            <span className="scroll-arrow">↓</span>
          </div>
        </div>

        <div className="terminal-fade"></div>
      </section>

      {/* ORIGIN STORY */}
      <section className="origin">
        <div className="section-number">01</div>
        <h2 className="section-headline">This started with a favor.</h2>

        <div className="origin-body">
          <p>
            A friend needed a website. A family member needed help getting a new
            job. I said yes — and realized it was the most fulfilling work I'd
            ever done.
          </p>
          <p>
            Not because it was easy. Because it mattered to the person sitting
            across from me in a way that shipping a patent never quite does.
          </p>
          <p>So I kept saying yes. Haven&apos;t stopped.</p>
        </div>

        <div className="origin-ghost">
          <div>$ # you could use fiverr.</div>
          <div>$ # that&apos;s not what I am.</div>
        </div>
      </section>

      {/* STATS PANEL */}
      <section className="stats">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-number">15 years</span>
            <span className="stat-label">in product</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10 patents</span>
            <span className="stat-label">granted</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6 sites</span>
            <span className="stat-label">launched</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-number">02</div>
        <h2 className="section-headline">What I do.</h2>

        <ul className="service-list">
          {SERVICES.map((s) => (
            <li key={s.name} className="service-item">
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* RANGE TICKER */}
      <section className="range">
        <div className="range-header">
          <div className="range-number">03</div>
          <div className="range-title">The range.</div>
          <div className="range-sub">From one afternoon to six months.</div>
        </div>

        <div className="ticker-track-wrap">
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className={`ticker-item ${item.heavy ? "heavy" : "light"}`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work" id="work">
        <div className="section-number">04</div>
        <h2 className="section-headline">Recent work.</h2>

        <ul className="work-list">
          {WORK_ITEMS.map((w) => (
            <li key={w.name} className="work-item">
              <span className="work-name">{w.name}</span>
              <span className="work-desc">{w.desc}</span>
              <a
                className="work-link"
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View →
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <h2 className="contact-headline">
            Let&apos;s win
            <br />
            <span>together.</span>
          </h2>

          <p className="contact-body">
            Tell me what you&apos;re working on.
            <br />
            No ask is too small or too ambitious.
          </p>

          <a href="mailto:hello@kyledec.com" className="contact-email">
            hello@kyledec.com
          </a>

          <p className="contact-location">Greater Boston · Available now</p>

          <p className="contact-booking">
            Currently booking Spring 2026 — a small number of spots at a time.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-copy">© 2026 Kyle DeCubellis</span>
        <span className="footer-domain">kyledec.com</span>
      </footer>
    </>
  );
}
