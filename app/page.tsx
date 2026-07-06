import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <main>
      {/* ───────────── HERO ───────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 60%, #1a0510 0%, #080508 60%)" }}
      >
        {/* Background glow orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(181,16,42,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(196,122,138,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-2 justify-center mb-2">
            {/* Light icon */}
            <div
              className="w-6 h-6 rounded-full animate-pulse-glow"
              style={{
                background: "radial-gradient(circle, #e03050, #7a0a1e)",
                boxShadow: "0 0 12px rgba(224,48,80,0.6), 0 0 24px rgba(181,16,42,0.3)",
              }}
            />
            <span
              className="text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: "rgba(196,122,138,0.7)" }}
            >
              LightVib
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className="relative z-10 max-w-3xl">
          {/* Product visual placeholder */}
          <div className="mx-auto mb-10 animate-float relative" style={{ width: "120px", height: "280px" }}>
            {/* Device silhouette */}
            <div
              className="w-full h-full rounded-full relative overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 0 40px rgba(181,16,42,0.25), 0 0 80px rgba(181,16,42,0.1), inset 0 0 30px rgba(181,16,42,0.15)",
              }}
            >
              {/* Inner LED glow */}
              <div
                className="absolute inset-4 rounded-full"
                style={{
                  background: "radial-gradient(ellipse at center 60%, rgba(224,48,80,0.6) 0%, rgba(181,16,42,0.3) 40%, transparent 70%)",
                }}
              />
              {/* Light dots representing LEDs */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: i % 2 === 0 ? "6px" : "4px",
                      height: i % 2 === 0 ? "6px" : "4px",
                      background: i % 3 === 0 ? "#ff4060" : "#cc2040",
                      boxShadow: `0 0 6px rgba(255,64,96,0.8), 0 0 12px rgba(181,16,42,0.5)`,
                      opacity: 0.7 + (i * 0.05),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
            <span className="gradient-text">Red light therapy.</span>
            <br />
            <span style={{ color: "#f5ede8" }}>Intimate wellness.</span>
            <br />
            <span style={{ color: "#c47a8a" }}>One device.</span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 mx-auto max-w-xl"
            style={{ color: "rgba(196,122,138,0.7)" }}
          >
            Clinical-grade red light and near-infrared therapy — designed for women who deserve to feel like themselves again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="btn-primary text-white px-8 py-4 rounded-xl text-sm font-medium tracking-wide"
            >
              Join the waitlist
            </a>
            <a
              href="#science"
              className="btn-outline px-8 py-4 rounded-xl text-sm font-medium tracking-wide"
              style={{ color: "#e8b4c0" }}
            >
              Learn the science
            </a>
          </div>

          <p className="text-xs mt-6" style={{ color: "#7a6068" }}>
            Launching on Kickstarter &middot; Early supporters get first access & best pricing
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-12 opacity-30"
            style={{ background: "linear-gradient(to bottom, #c47a8a, transparent)" }}
          />
        </div>
      </section>

      {/* ───────────── WHO IT'S FOR ───────────── */}
      <section className="py-24 px-6" style={{ background: "#09060a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#7a6068" }}>
              Designed for you
            </p>
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#f5ede8" }}>
              Every woman&apos;s body tells<br />
              <span className="italic" style={{ color: "#c47a8a" }}>a different story.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "◈",
                title: "Postpartum recovery",
                desc: "Childbirth changes everything. LightVib supports tissue regeneration and helps restore comfort and sensation at your own pace.",
                detail: "Red light accelerates cellular repair and collagen production.",
              },
              {
                icon: "◇",
                title: "Vaginal rejuvenation",
                desc: "Restore elasticity, reduce dryness, and reclaim intimate confidence — without invasive procedures.",
                detail: "NIR penetrates deep tissue to stimulate blood flow and natural repair.",
              },
              {
                icon: "◉",
                title: "Cancer recovery",
                desc: "Treatment and surgery can leave lasting changes. LightVib offers gentle, non-hormonal support for healing and sensation.",
                detail: "Safe for hormone-sensitive conditions. No drugs. No heat.",
              },
            ].map((card) => (
              <div key={card.title} className="card-glass rounded-2xl p-6">
                <div
                  className="text-2xl mb-4"
                  style={{ color: "#b5102a" }}
                >
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl mb-3" style={{ color: "#f5ede8" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(196,122,138,0.7)" }}>
                  {card.desc}
                </p>
                <p
                  className="text-xs leading-relaxed pt-4"
                  style={{ color: "#7a6068", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {card.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Menopause tag */}
          <div className="mt-6 card-glass rounded-2xl p-5 flex items-center gap-4">
            <div className="text-xl" style={{ color: "#b5102a" }}>◫</div>
            <div>
              <span className="text-sm font-medium" style={{ color: "#f5ede8" }}>Menopause & perimenopause</span>
              <span className="text-sm" style={{ color: "rgba(196,122,138,0.6)" }}>
                {" "}&mdash; Hormonal shifts that cause dryness, discomfort, and low libido are among the conditions LightVib was designed to address.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── THE SCIENCE ───────────── */}
      <section
        id="science"
        className="py-24 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 100%, #120510 0%, #080508 60%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#7a6068" }}>
              The science
            </p>
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#f5ede8" }}>
              Light that heals.
            </h2>
            <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "rgba(196,122,138,0.7)" }}>
              Red light and near-infrared therapy have decades of clinical research behind them. LightVib puts that science exactly where it&apos;s needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Red light */}
            <div className="card-glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{
                    background: "rgba(181,16,42,0.2)",
                    border: "1px solid rgba(181,16,42,0.4)",
                    color: "#e03050",
                  }}
                >
                  RL
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "#f5ede8" }}>Red Light</div>
                  <div className="text-xs" style={{ color: "#7a6068" }}>630 – 660 nm</div>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Stimulates collagen and elastin production",
                  "Accelerates surface tissue repair",
                  "Reduces inflammation and discomfort",
                  "Improves local circulation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(196,122,138,0.8)" }}>
                    <span className="mt-0.5 text-xs" style={{ color: "#b5102a" }}>&#9670;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NIR */}
            <div className="card-glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{
                    background: "rgba(100,10,80,0.2)",
                    border: "1px solid rgba(150,20,120,0.4)",
                    color: "#c060a0",
                  }}
                >
                  NIR
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "#f5ede8" }}>Near-Infrared</div>
                  <div className="text-xs" style={{ color: "#7a6068" }}>810 – 850 nm</div>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Penetrates deeper tissue layers",
                  "Energizes cellular mitochondria (ATP production)",
                  "Supports nerve regeneration and sensation",
                  "Promotes muscle and mucosal tissue recovery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(196,122,138,0.8)" }}>
                    <span className="mt-0.5 text-xs" style={{ color: "#b5102a" }}>&#9670;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key facts */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: "40+", label: "Years of photobiomodulation research" },
              { stat: "Non-hormonal", label: "Safe for hormone-sensitive conditions" },
              { stat: "Non-invasive", label: "No drugs, no needles, no heat" },
            ].map((item) => (
              <div key={item.stat} className="text-center p-6 card-glass rounded-xl">
                <div className="font-serif text-2xl mb-1 gradient-text">{item.stat}</div>
                <div className="text-xs" style={{ color: "#7a6068" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── THE PRODUCT ───────────── */}
      <section className="py-24 px-6" style={{ background: "#09060a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#7a6068" }}>
              The device
            </p>
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#f5ede8" }}>
              Beauty meets<br />
              <span className="italic" style={{ color: "#c47a8a" }}>clinical precision.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="flex justify-center">
              <div
                className="relative rounded-full animate-float"
                style={{ width: "180px", height: "420px" }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 0 60px rgba(181,16,42,0.3), 0 0 120px rgba(181,16,42,0.12), inset 0 0 50px rgba(181,16,42,0.2)",
                  }}
                >
                  {/* LED array */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pt-16">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="flex gap-2">
                        {[...Array(i % 2 === 0 ? 3 : 2)].map((_, j) => (
                          <div
                            key={j}
                            className="rounded-full"
                            style={{
                              width: "5px",
                              height: "5px",
                              background: i % 3 === 0 ? "#ff4060" : "#cc2040",
                              boxShadow: "0 0 8px rgba(255,64,96,0.9)",
                              opacity: 0.6 + (i * 0.04),
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  title: "Transparent medical-grade silicone",
                  desc: "You can see the LEDs glowing through the device — a visual reminder that therapy is working.",
                },
                {
                  title: "Dual-wavelength LED array",
                  desc: "Red (660nm) and near-infrared (850nm) LEDs positioned for optimal coverage of target tissue.",
                },
                {
                  title: "Vibration + light, together",
                  desc: "Gentle vibration enhances blood flow while the light therapy does its deeper work. One session, dual benefit.",
                },
                {
                  title: "Waterproof & rechargeable",
                  desc: "IPX7 rated. USB-C charging. Whisper quiet. Designed for real life.",
                },
                {
                  title: "Body-safe materials",
                  desc: "Non-porous, hypoallergenic, phthalate-free. The same standards as medical devices.",
                },
              ].map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <div
                    className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#b5102a", boxShadow: "0 0 6px rgba(181,16,42,0.6)" }}
                  />
                  <div>
                    <div className="text-sm font-medium mb-1" style={{ color: "#f5ede8" }}>{feat.title}</div>
                    <div className="text-sm" style={{ color: "rgba(196,122,138,0.65)" }}>{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── WAITLIST / QUESTIONNAIRE ───────────── */}
      <section
        id="waitlist"
        className="py-24 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #150810 0%, #080508 55%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#7a6068" }}>
              Early access
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: "#f5ede8" }}>
              Be among the first.
            </h2>
            <p className="text-base" style={{ color: "rgba(196,122,138,0.7)" }}>
              Answer 5 quick questions, then leave your email.<br />
              Early supporters get first access and Kickstarter-exclusive pricing.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-8">
            <WaitlistForm />
          </div>

          <p className="text-center text-xs mt-6" style={{ color: "#7a6068" }}>
            Launching on Kickstarter &middot; lightvib.com
          </p>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="py-10 px-6 divider" style={{ background: "#080508" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background: "radial-gradient(circle, #e03050, #7a0a1e)",
                boxShadow: "0 0 8px rgba(224,48,80,0.4)",
              }}
            />
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "rgba(196,122,138,0.5)" }}>
              LightVib
            </span>
          </div>
          <p className="text-xs text-center" style={{ color: "#7a6068" }}>
            LightVib is a wellness device. Not intended to diagnose, treat, or cure any medical condition.<br />
            Consult your healthcare provider before use.
          </p>
          <p className="text-xs" style={{ color: "#7a6068" }}>
            &copy; {new Date().getFullYear()} LightVib
          </p>
        </div>
      </footer>
    </main>
  );
}
