export default function Home() {
  return (
    <main>

      {/* Nav */}
      <nav>
        <a href="#hero" className="nav-monogram">KD</a>
        <div className="nav-links">
          <a href="#portfolio">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <h1 className="hero-headline">
          Built to<br />
          help you<br />
          <span className="accent">win.</span>
        </h1>
        <p className="hero-sub">
          From resume to revenue — whatever you need, whatever stage you&apos;re at.
        </p>
        <a href="#contact" className="hero-cta">Let&apos;s talk →</a>
      </section>

      {/* 01 Origin Story */}
      <section id="origin">
        <div className="section-split">
          <div className="section-num">01</div>
          <div className="section-content">
            <h2>This started with a favor.</h2>
            <p>
              A friend needed a website. A family member needed help positioning themselves
              for a new job. I said yes — and somewhere in the process of applying what
              I&apos;d spent 15 years building at companies like Bose, I realized this was
              the most fulfilling work I&apos;d ever done.
            </p>
            <p>
              Not because it was easy. Because it mattered to the person sitting across
              from me in a way that a product roadmap or a patent filing never quite does.
            </p>
            <p>So I kept saying yes. And I haven&apos;t stopped.</p>
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section id="belief">
        <p className="belief-headline">&ldquo;You could use Fiverr. That&apos;s not what I am.&rdquo;</p>
        <div className="belief-cols">
          <p>
            Fiverr will get you a deliverable. A file. A checkbox. I&apos;m not interested
            in checkboxes.<br /><br />
            I&apos;m interested in understanding what you&apos;re actually trying to do —
            and staying until it&apos;s done right.
          </p>
          <p>
            No job is too small. No ambition is too large. Resume optimization and
            e-commerce product launches live in the same practice because they require
            the same thing: someone who genuinely wants you to win.
          </p>
        </div>
      </section>

      {/* 02 Services */}
      <section id="services">
        <div className="services-header">
          <div className="section-num">02</div>
          <div className="section-content">
            <h2>What I do.</h2>
          </div>
        </div>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-name">Web Design + Development</div>
            <div className="service-desc">Sites that earn trust, convert visitors, and actually launch.</div>
          </div>
          <div className="service-item">
            <div className="service-name">AI Tools + Automation</div>
            <div className="service-desc">Custom workflows, prompt systems, and tools built around how you actually work.</div>
          </div>
          <div className="service-item">
            <div className="service-name">Product Strategy + Roadmapping</div>
            <div className="service-desc">Clarity on what to build, in what order, and why — from someone who&apos;s shipped real products.</div>
          </div>
          <div className="service-item">
            <div className="service-name">E-Commerce + Manufacturing</div>
            <div className="service-desc">From concept through sourcing, production, and selling. End to end.</div>
          </div>
          <div className="service-item">
            <div className="service-name">Resume + Personal Branding</div>
            <div className="service-desc">Positioning that reflects what you&apos;ve actually built — and opens the right doors.</div>
          </div>
          <div className="service-item">
            <div className="service-name">Image + Creative Assets</div>
            <div className="service-desc">AI-generated photography, renders, and visual assets built to look real and work hard.</div>
          </div>
        </div>
      </section>

      {/* 03 The Range */}
      <section id="range">
        <div className="range-header">
          <div className="section-num">03</div>
          <div className="section-content">
            <h2>The range.</h2>
            <p className="range-subhead">From one afternoon to six months.</p>
          </div>
        </div>
        <div className="ticker-wrap">
          <div className="ticker-track">
            <span className="ticker-item">Resume rewrite</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Logo design</span><span className="ticker-sep" />
            <span className="ticker-item">Full website</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Product roadmap</span><span className="ticker-sep" />
            <span className="ticker-item">AI workflow</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">E-commerce launch</span><span className="ticker-sep" />
            <span className="ticker-item">Brand identity</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Pitch deck</span><span className="ticker-sep" />
            <span className="ticker-item">Image generation</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Manufacturing sourcing</span><span className="ticker-sep" />
            <span className="ticker-item">SEO audit</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Automation build</span><span className="ticker-sep" />
            <span className="ticker-item">Market research</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Social content</span><span className="ticker-sep" />
            <span className="ticker-item">Business plan</span><span className="ticker-sep" />
            {/* duplicate for seamless loop */}
            <span className="ticker-item">Resume rewrite</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Logo design</span><span className="ticker-sep" />
            <span className="ticker-item">Full website</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Product roadmap</span><span className="ticker-sep" />
            <span className="ticker-item">AI workflow</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">E-commerce launch</span><span className="ticker-sep" />
            <span className="ticker-item">Brand identity</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Pitch deck</span><span className="ticker-sep" />
            <span className="ticker-item">Image generation</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Manufacturing sourcing</span><span className="ticker-sep" />
            <span className="ticker-item">SEO audit</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Automation build</span><span className="ticker-sep" />
            <span className="ticker-item">Market research</span><span className="ticker-sep" />
            <span className="ticker-item cobalt">Social content</span><span className="ticker-sep" />
            <span className="ticker-item">Business plan</span><span className="ticker-sep" />
          </div>
        </div>
      </section>

      {/* 04 Portfolio */}
      <section id="portfolio">
        <div className="portfolio-header">
          <div className="section-num">04</div>
          <div className="section-content">
            <h2>Recent work.</h2>
          </div>
        </div>
        <div className="portfolio-list">
          <div className="portfolio-row">
            <span className="portfolio-name">Haven &amp; Co.</span>
            <span className="portfolio-desc">Home staging + interior design studio</span>
            <a href="https://home-by-nkm.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio-link">View →</a>
          </div>
          <div className="portfolio-row">
            <span className="portfolio-name">Studio Marlowe</span>
            <span className="portfolio-desc">Editorial interior design brand</span>
            <a href="https://andrea-thomas-interiors.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio-link">View →</a>
          </div>
          <div className="portfolio-row">
            <span className="portfolio-name">Rob Laurie</span>
            <span className="portfolio-desc">Local HVAC specialist site</span>
            <a href="https://rob-design-variant-2.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio-link">View →</a>
          </div>
          <div className="portfolio-row">
            <span className="portfolio-name">Southboro Sitters</span>
            <span className="portfolio-desc">Kids activity + sitting service</span>
            <a href="https://southboro-sitters.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio-link">View →</a>
          </div>
          <div className="portfolio-row">
            <span className="portfolio-name">Dufazz</span>
            <span className="portfolio-desc">Photography + videography portfolio</span>
            <a href="https://dufazz.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio-link">View →</a>
          </div>
          <div className="portfolio-row">
            <span className="portfolio-name">Kyle DeCubellis</span>
            <span className="portfolio-desc">This site</span>
            <a href="https://kyle-psi.vercel.app" target="_blank" rel="noopener noreferrer" className="portfolio-link">View →</a>
          </div>
        </div>
      </section>

      {/* 05 Contact */}
      <section id="contact">
        <div className="contact-num">05</div>
        <h2 className="contact-headline">
          Let&apos;s win<br />
          <span className="accent">together.</span>
        </h2>
        <p className="contact-sub">
          Tell me what you&apos;re working on. There&apos;s no ask too small or too ambitious.
        </p>
        <a href="mailto:hello@kyledec.com" className="contact-email">hello@kyledec.com</a>
        <p className="contact-location">Greater Boston &nbsp;·&nbsp; Available now</p>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2026 Kyle DeCubellis</span>
        <span>kyledec.com</span>
      </footer>

    </main>
  );
}
