"use client";

const segments = [
  {
    emoji: "🔧",
    label: "Trades & Home Services",
    description: "HVAC, plumbing, electrical, landscaping — you do great work. Let your website prove it.",
  },
  {
    emoji: "🏠",
    label: "Real Estate & Staging",
    description: "Photos and listings aren't enough anymore. A personal site sets you apart.",
  },
  {
    emoji: "🚗",
    label: "Gig Workers & Freelancers",
    description: "Uber, DoorDash, or five side hustles — a professional web presence makes you more legit.",
  },
  {
    emoji: "🍽️",
    label: "Restaurants & Food",
    description: "Your food deserves better than a Yelp page. Own your online presence.",
  },
  {
    emoji: "💆",
    label: "Wellness & Beauty",
    description: "Salons, trainers, therapists — booking, portfolio, and brand all in one place.",
  },
  {
    emoji: "🧠",
    label: "Consultants & Coaches",
    description: "You have the expertise. I'll help the world find you and take you seriously.",
  },
  {
    emoji: "🚀",
    label: "Early-Stage Founders",
    description: "You have an idea and limited runway. Let's move fast and look like you've been at it for years.",
  },
  {
    emoji: "👋",
    label: "Friends & Family",
    description: "Word of mouth is how this grows. If someone you know sent you here, you're already in.",
  },
];

export default function WhoIServe() {
  return (
    <section
      id="who"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #3d2b1f 0%, #1a1208 60%, #2a1a0e 100%)",
      }}
    >
      {/* Decorative amber blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "#c17a2e", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: "#c75a3a", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span
            className="text-amber text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Who I Serve
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I work with people,
            <br />
            <em className="text-amber-light">not job titles.</em>
          </h2>
          <p
            className="mt-5 text-ivory/60 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            My best clients aren&apos;t tech people — they&apos;re good at what they do
            and tired of their online presence not showing it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((seg) => (
            <div
              key={seg.label}
              className="group rounded-2xl p-6 border border-ivory/8 bg-ivory/5 hover:bg-ivory/10 hover:border-amber/30 transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-3 block">{seg.emoji}</span>
              <h3
                className="text-ivory font-semibold text-base mb-2 group-hover:text-amber-light transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {seg.label}
              </h3>
              <p
                className="text-ivory/50 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {seg.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-16 text-center">
          <blockquote
            className="text-ivory/40 text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &ldquo;I&apos;ve shipped products at Bose and built tools at scale. Now I use
            that same rigor to help everyday businesses win online.&rdquo;
          </blockquote>
          <cite
            className="mt-4 block text-amber text-sm font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            — Kyle DeCubellis
          </cite>
        </div>
      </div>
    </section>
  );
}
