import Image from "next/image";
import WaitlistForm from "./components/WaitlistForm";

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LightVib",
  description:
    "LightVib is an intimate wellness device combining red light (660nm) and near-infrared (850nm) therapy for vaginal rejuvenation, postpartum recovery, and cancer-related healing. Non-hormonal, non-invasive, and clinically inspired.",
  brand: { "@type": "Brand", name: "LightVib" },
  url: "https://lightvib.com",
  image: "https://lightvib.com/product-closeup.png",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "149",
    priceCurrency: "USD",
    url: "https://lightvib.com/#waitlist",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Women seeking vaginal rejuvenation, postpartum recovery, or cancer-related healing",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "LightVib Early Tester",
    },
    reviewBody:
      "Finally a non-hormonal option for intimate wellness. The red light therapy approach is backed by real science and the device is beautifully designed.",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LightVib",
  url: "https://lightvib.com",
  logo: "https://lightvib.com/product-closeup.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@lightvib.com",
    contactType: "customer support",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61591668155230",
    "https://www.instagram.com/lightvib.official",
  ],
};

const faqItems = [
  {
    question: "What is red light therapy for vaginal rejuvenation?",
    answer:
      "Red light therapy (photobiomodulation) uses specific wavelengths of light — typically 660nm — to stimulate collagen production, improve blood circulation, and accelerate tissue repair in vaginal and pelvic tissues. It is non-hormonal, non-invasive, and backed by 40+ years of clinical research.",
  },
  {
    question: "Is LightVib safe for cancer survivors?",
    answer:
      "LightVib is hormone-free and drug-free, making it suitable for women who cannot use hormonal treatments due to hormone-sensitive cancers. It uses red light and near-infrared therapy only. Always consult your oncologist before starting any new wellness device.",
  },
  {
    question: "How does LightVib help with postpartum recovery?",
    answer:
      "After childbirth, pelvic and vaginal tissues often need support to heal and regain elasticity and sensation. LightVib's 660nm red light stimulates cellular repair and collagen synthesis, while 850nm near-infrared light penetrates deeper to support muscle and mucosal tissue recovery.",
  },
  {
    question: "Is red light therapy safe for intimate use?",
    answer:
      "Yes. Red light and near-infrared therapy are well-studied modalities used in clinical settings for wound healing, pain relief, and tissue regeneration. LightVib uses body-safe, medical-grade materials and does not emit heat or UV radiation.",
  },
  {
    question: "When will LightVib be available?",
    answer:
      "LightVib is launching on Kickstarter. Join the waitlist at lightvib.com to get first access and exclusive early-bird pricing before the public launch.",
  },
  {
    question: "What is the difference between 660nm and 850nm light therapy?",
    answer:
      "660nm red light works at the surface level — stimulating collagen, reducing inflammation, and accelerating tissue repair. 850nm near-infrared light penetrates deeper tissue layers, energizing mitochondria (ATP production), supporting nerve regeneration, and promoting deeper healing.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main>
        {/* ───────────── HERO ───────────── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
          style={{ background: "radial-gradient(ellipse at 50% 60%, #1a0510 0%, #080508 60%)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(181,16,42,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Logo */}
          <div className="relative z-10 mb-12">
            <div className="flex items-center gap-2 justify-center">
              <div
                className="w-6 h-6 rounded-full"
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
            {/* Product image */}
            <div
              className="mx-auto mb-10 animate-float relative overflow-hidden rounded-2xl"
              style={{
                width: "280px",
                height: "320px",
                boxShadow: "0 0 60px rgba(181,16,42,0.4), 0 0 120px rgba(181,16,42,0.15)",
              }}
            >
              <Image
                src="/product-closeup.png"
                alt="LightVib red light therapy device — internal LED array visible through transparent silicone for vaginal rejuvenation"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
              <span className="gradient-text">Red light therapy.</span>
              <br />
              <span style={{ color: "#f5ede8" }}>Intimate wellness.</span>
              <br />
              <span style={{ color: "#c47a8a" }}>One device.</span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-4 mx-auto max-w-xl"
              style={{ color: "rgba(196,122,138,0.7)" }}
            >
              Clinical-grade red light and near-infrared therapy for vaginal rejuvenation, postpartum recovery, and intimate wellness — designed for women who deserve to feel like themselves again.
            </p>

            <p className="text-sm mb-10 mx-auto max-w-lg" style={{ color: "rgba(196,122,138,0.45)" }}>
              Non-hormonal &middot; Non-invasive &middot; Clinically inspired &middot; Body-safe
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

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
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
                  desc: "Childbirth changes everything. LightVib red light therapy supports tissue regeneration and helps restore comfort and sensation at your own pace.",
                  detail: "Red light (660nm) accelerates cellular repair and collagen production.",
                },
                {
                  icon: "◇",
                  title: "Vaginal rejuvenation",
                  desc: "Restore elasticity, reduce vaginal dryness, and reclaim intimate confidence — without invasive procedures or hormones.",
                  detail: "NIR (850nm) penetrates deep tissue to stimulate blood flow and natural repair.",
                },
                {
                  icon: "◉",
                  title: "Cancer recovery",
                  desc: "Treatment and surgery can leave lasting changes. LightVib offers gentle, non-hormonal red light therapy support for healing and sensation.",
                  detail: "Safe for hormone-sensitive conditions. No drugs. No heat.",
                },
              ].map((card) => (
                <article key={card.title} className="card-glass rounded-2xl p-6">
                  <div className="text-2xl mb-4" style={{ color: "#b5102a" }}>
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
                </article>
              ))}
            </div>

            <div className="mt-6 card-glass rounded-2xl p-5 flex items-center gap-4">
              <div className="text-xl" style={{ color: "#b5102a" }}>◫</div>
              <p className="text-sm" style={{ color: "rgba(196,122,138,0.7)" }}>
                <strong style={{ color: "#f5ede8" }}>Menopause & perimenopause</strong>
                {" "}&mdash; Hormonal shifts that cause vaginal dryness, discomfort, and low libido are among the conditions LightVib was designed to address with non-hormonal red light therapy.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────── THE SCIENCE ───────────── */}
        <section
          id="science"
          aria-label="Red light therapy science"
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
                Red light and near-infrared photobiomodulation therapy have 40+ years of clinical research behind them. LightVib puts that science exactly where it&apos;s needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                    <div className="text-sm font-medium" style={{ color: "#f5ede8" }}>Red Light Therapy</div>
                    <div className="text-xs" style={{ color: "#7a6068" }}>630 – 660 nm</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Stimulates collagen and elastin production",
                    "Accelerates surface tissue repair",
                    "Reduces inflammation and vaginal discomfort",
                    "Improves local blood circulation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(196,122,138,0.8)" }}>
                      <span className="mt-0.5 text-xs" style={{ color: "#b5102a" }}>&#9670;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

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
                    <div className="text-sm font-medium" style={{ color: "#f5ede8" }}>Near-Infrared Therapy</div>
                    <div className="text-xs" style={{ color: "#7a6068" }}>810 – 850 nm</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Penetrates deeper tissue layers",
                    "Energizes cellular mitochondria (ATP production)",
                    "Supports nerve regeneration and sensation",
                    "Promotes mucosal and muscle tissue recovery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(196,122,138,0.8)" }}>
                      <span className="mt-0.5 text-xs" style={{ color: "#b5102a" }}>&#9670;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
        <section aria-label="LightVib device features" className="py-24 px-6" style={{ background: "#09060a" }}>
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
              <div className="flex justify-center">
                <div
                  className="relative animate-float overflow-hidden rounded-2xl"
                  style={{
                    width: "300px",
                    height: "460px",
                    boxShadow: "0 0 50px rgba(181,16,42,0.25), 0 0 100px rgba(181,16,42,0.1)",
                  }}
                >
                  <Image
                    src="/product-front.png"
                    alt="LightVib intimate wellness device — transparent silicone with red light LED array for vaginal rejuvenation and postpartum recovery"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Transparent medical-grade silicone",
                    desc: "You can see the red light LEDs glowing through the device — a visual reminder that photobiomodulation therapy is working.",
                  },
                  {
                    title: "Dual-wavelength LED array",
                    desc: "Red light (660nm) and near-infrared (850nm) LEDs positioned for optimal coverage of vaginal tissue.",
                  },
                  {
                    title: "Vibration + light therapy, together",
                    desc: "Gentle vibration enhances blood flow while red light therapy does its deeper work. One session, dual benefit.",
                  },
                  {
                    title: "Waterproof & rechargeable",
                    desc: "IPX7 rated. USB-C charging. Whisper quiet. Designed for real life.",
                  },
                  {
                    title: "Body-safe materials",
                    desc: "Non-porous, hypoallergenic, phthalate-free. The same safety standards as medical devices.",
                  },
                ].map((feat) => (
                  <div key={feat.title} className="flex gap-4">
                    <div
                      className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#b5102a", boxShadow: "0 0 6px rgba(181,16,42,0.6)" }}
                    />
                    <div>
                      <h3 className="text-sm font-medium mb-1" style={{ color: "#f5ede8" }}>{feat.title}</h3>
                      <p className="text-sm" style={{ color: "rgba(196,122,138,0.65)" }}>{feat.desc}</p>
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
          aria-label="Join the LightVib waitlist"
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

        {/* ───────────── FAQ ───────────── */}
        <section
          id="faq"
          aria-label="Frequently asked questions about LightVib red light therapy"
          className="py-24 px-6"
          style={{ background: "#09060a" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#7a6068" }}>
                FAQ
              </p>
              <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#f5ede8" }}>
                Common questions.
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="card-glass rounded-2xl group"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <summary
                    className="cursor-pointer px-6 py-5 flex items-center justify-between gap-4 list-none"
                    style={{ color: "#f5ede8" }}
                  >
                    <h3 className="font-serif text-base md:text-lg font-normal">{item.question}</h3>
                    <span
                      className="flex-shrink-0 text-lg transition-transform group-open:rotate-45"
                      style={{ color: "#b5102a" }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: "rgba(196,122,138,0.75)" }}
                  >
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
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
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61591668155230"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LightVib on Facebook"
                  style={{ color: "rgba(122,96,104,0.5)" }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/lightvib.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LightVib on Instagram"
                  style={{ color: "rgba(122,96,104,0.5)" }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="mailto:hello@lightvib.com" className="text-xs" style={{ color: "rgba(122,96,104,0.5)" }}>
                  hello@lightvib.com
                </a>
              </div>
              <p className="text-xs" style={{ color: "#7a6068" }}>
                &copy; {new Date().getFullYear()} LightVib
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
