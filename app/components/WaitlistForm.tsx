"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

type Segment =
  | "postpartum"
  | "rejuvenation"
  | "cancer"
  | "menopause"
  | "other"
  | "";

type Concern =
  | "dryness"
  | "pain"
  | "sensation"
  | "healing"
  | "libido"
  | "other"
  | "";

type PriceIntent = "yes" | "probably" | "more-info" | "no" | "";

interface FormData {
  segment: Segment;
  concern: Concern;
  triedOther: string;
  scienceImportance: number;
  priceIntent: PriceIntent;
  firstName: string;
  email: string;
}

const TOTAL_STEPS = 6;

export default function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormData>({
    segment: "",
    concern: "",
    triedOther: "",
    scienceImportance: 0,
    priceIntent: "",
    firstName: "",
    email: "",
  });

  useEffect(() => {
    trackEvent("form_step_view", {
      event_category: "waitlist_form",
      step_number: 1,
    });
  }, []);

  const progress = ((step - 1) / TOTAL_STEPS) * 100;

  const canAdvance = () => {
    if (step === 1) return form.segment !== "";
    if (step === 2) return form.concern !== "";
    if (step === 3) return form.triedOther !== "";
    if (step === 4) return form.scienceImportance > 0;
    if (step === 5) return form.priceIntent !== "";
    if (step === 6) return form.firstName.trim() !== "" && form.email.includes("@");
    return false;
  };

  const next = () => {
    if (canAdvance() && step < TOTAL_STEPS) {
      const nextStep = step + 1;
      setStep(nextStep);
      trackEvent("form_step_complete", {
        event_category: "waitlist_form",
        step_number: step,
        step_name: ["segment", "concern", "treatments", "science", "price_intent", "contact"][step - 1],
      });
      trackEvent("form_step_view", {
        event_category: "waitlist_form",
        step_number: nextStep,
      });
    }
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Something went wrong");
      setSubmitted(true);
      trackEvent("form_submit", {
        event_category: "waitlist_form",
        segment: form.segment,
        concern: form.concern,
        price_intent: form.priceIntent,
        science_importance: form.scienceImportance,
      });
      trackEvent("generate_lead", {
        event_category: "waitlist_form",
      });
    } catch {
      setError("Something went wrong. Please try again.");
      trackEvent("form_error", {
        event_category: "waitlist_form",
        step_number: 6,
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const shareText = encodeURIComponent("I just joined the waitlist for LightVib — a red light therapy device for intimate wellness and vaginal rejuvenation. Worth checking out:");
    const shareUrl = encodeURIComponent("https://lightvib.com");
    const emailBody = encodeURIComponent(`Hi,\n\nI found something you might find interesting. LightVib is a red light therapy device designed for intimate wellness — for postpartum recovery, vaginal rejuvenation, or cancer-related healing.\n\nThey're launching on Indiegogo soon and early supporters get the best pricing.\n\nCheck it out: https://lightvib.com\n`);

    return (
      <div className="text-center py-8 animate-fade-in-up">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "linear-gradient(135deg, #b5102a, #c47a8a)" }}>
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-3" style={{ color: "#f5ede8" }}>
          You&apos;re on the list.
        </h3>
        <p style={{ color: "#7a6068" }} className="text-sm leading-relaxed mb-8">
          We&apos;ll reach out to {form.email} when LightVib launches.<br />
          Early supporters get priority access and the best pricing.
        </p>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} className="pt-8">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#7a6068" }}>
            Know someone who could benefit?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`https://api.whatsapp.com/send?text=${shareText}%20https%3A%2F%2Flightvib.com`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("share_click", { method: "whatsapp" })}
              className="inline-block text-white text-xs font-semibold px-5 py-3 rounded-lg"
              style={{ background: "#25D366" }}
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("share_click", { method: "facebook" })}
              className="inline-block text-white text-xs font-semibold px-5 py-3 rounded-lg"
              style={{ background: "#1877F2" }}
            >
              Facebook
            </a>
            <a
              href={`mailto:?subject=This%20might%20interest%20you%20%E2%80%94%20LightVib&body=${emailBody}`}
              onClick={() => trackEvent("share_click", { method: "email" })}
              className="inline-block text-white text-xs font-semibold px-5 py-3 rounded-lg"
              style={{ background: "#b5102a" }}
            >
              Email
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("share_click", { method: "twitter" })}
              className="inline-block text-white text-xs font-semibold px-5 py-3 rounded-lg"
              style={{ background: "#000000" }}
            >
              X / Twitter
            </a>
          </div>
          <p className="text-xs mt-4" style={{ color: "rgba(122,96,104,0.6)" }}>
            Or share this link: <a href="https://lightvib.com" style={{ color: "#c47a8a" }}>lightvib.com</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-xs" style={{ color: "#7a6068" }}>
            Step {step} of {TOTAL_STEPS}
          </span>
          <span className="text-xs" style={{ color: "#7a6068" }}>
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="w-full h-px rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
          <div
            className="h-px rounded-full progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="animate-fade-in-up">
          <h3 className="font-serif text-xl mb-2" style={{ color: "#f5ede8" }}>
            Which best describes you?
          </h3>
          <p className="text-sm mb-6" style={{ color: "#7a6068" }}>
            This helps us tailor LightVib to your needs.
          </p>
          <div className="space-y-3">
            {[
              { value: "postpartum", label: "I recently had a child", sub: "Postpartum recovery" },
              { value: "rejuvenation", label: "I&apos;m seeking vaginal rejuvenation", sub: "Cosmetic & wellness" },
              { value: "cancer", label: "I&apos;m a cancer survivor or in treatment", sub: "Oncology recovery" },
              { value: "menopause", label: "I&apos;m in menopause or perimenopause", sub: "Hormonal transition" },
              { value: "other", label: "Something else", sub: "Other reason" },
            ].map((opt) => (
              <button
                key={opt.value}
                className={`option-card w-full text-left px-4 py-4 rounded-xl ${form.segment === opt.value ? "selected" : ""}`}
                onClick={() => setForm({ ...form, segment: opt.value as Segment })}
              >
                <div className="text-sm font-medium" style={{ color: "#f5ede8" }}
                  dangerouslySetInnerHTML={{ __html: opt.label }} />
                <div className="text-xs mt-0.5" style={{ color: "#7a6068" }}>{opt.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="animate-fade-in-up">
          <h3 className="font-serif text-xl mb-2" style={{ color: "#f5ede8" }}>
            What&apos;s your main concern right now?
          </h3>
          <p className="text-sm mb-6" style={{ color: "#7a6068" }}>
            Select the one that matters most to you.
          </p>
          <div className="space-y-3">
            {[
              { value: "dryness", label: "Vaginal dryness" },
              { value: "pain", label: "Pain or discomfort during intimacy" },
              { value: "sensation", label: "Reduced sensation or libido" },
              { value: "healing", label: "Tissue healing or scarring" },
              { value: "libido", label: "Overall intimacy & confidence" },
              { value: "other", label: "Something else" },
            ].map((opt) => (
              <button
                key={opt.value}
                className={`option-card w-full text-left px-4 py-3.5 rounded-xl ${form.concern === opt.value ? "selected" : ""}`}
                onClick={() => setForm({ ...form, concern: opt.value as Concern })}
              >
                <div className="text-sm font-medium" style={{ color: "#f5ede8" }}>{opt.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="animate-fade-in-up">
          <h3 className="font-serif text-xl mb-2" style={{ color: "#f5ede8" }}>
            Have you tried other treatments or products before?
          </h3>
          <p className="text-sm mb-6" style={{ color: "#7a6068" }}>
            Helps us understand the gap LightVib fills.
          </p>
          <div className="space-y-3">
            {[
              { value: "yes-medical", label: "Yes — medical treatments (laser, PRP, physical therapy)" },
              { value: "yes-products", label: "Yes — wellness products or devices" },
              { value: "yes-both", label: "Yes — both medical and wellness" },
              { value: "no-havent", label: "No — haven&apos;t found anything suitable" },
              { value: "no-looking", label: "No — just starting to explore options" },
            ].map((opt) => (
              <button
                key={opt.value}
                className={`option-card w-full text-left px-4 py-3.5 rounded-xl ${form.triedOther === opt.value ? "selected" : ""}`}
                onClick={() => setForm({ ...form, triedOther: opt.value })}
              >
                <div className="text-sm font-medium" style={{ color: "#f5ede8" }}
                  dangerouslySetInnerHTML={{ __html: opt.label }} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <div className="animate-fade-in-up">
          <h3 className="font-serif text-xl mb-2" style={{ color: "#f5ede8" }}>
            How important is it that a device has clinical backing?
          </h3>
          <p className="text-sm mb-8" style={{ color: "#7a6068" }}>
            1 = not important &nbsp;&middot;&nbsp; 5 = essential
          </p>
          <div className="flex gap-3 justify-center">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`w-14 h-14 rounded-xl text-lg font-semibold transition-all duration-200 ${
                  form.scienceImportance === n
                    ? "btn-primary text-white"
                    : "option-card"
                }`}
                style={{ color: form.scienceImportance === n ? "#fff" : "#f5ede8" }}
                onClick={() => setForm({ ...form, scienceImportance: n })}
              >
                {n}
              </button>
            ))}
          </div>
          {form.scienceImportance > 0 && (
            <p className="text-center text-xs mt-4" style={{ color: "#7a6068" }}>
              {form.scienceImportance <= 2
                ? "Got it — design and experience matter more."
                : form.scienceImportance === 3
                ? "A balance of science and experience."
                : "We&apos;ll make sure the research is front and center."}
            </p>
          )}
        </div>
      )}

      {/* Step 5 */}
      {step === 5 && (
        <div className="animate-fade-in-up">
          <h3 className="font-serif text-xl mb-2" style={{ color: "#f5ede8" }}>
            If LightVib were available today for $149, would you buy it?
          </h3>
          <p className="text-sm mb-6" style={{ color: "#7a6068" }}>
            Be honest — it helps us get the launch right.
          </p>
          <div className="space-y-3">
            {[
              { value: "yes", label: "Yes, I&apos;d buy it now", sub: "I&apos;m ready" },
              { value: "probably", label: "Probably", sub: "I need to learn a bit more" },
              { value: "more-info", label: "I need more information first", sub: "Send me research & details" },
              { value: "no", label: "No, it&apos;s not the right fit for me", sub: "That&apos;s okay" },
            ].map((opt) => (
              <button
                key={opt.value}
                className={`option-card w-full text-left px-4 py-4 rounded-xl ${form.priceIntent === opt.value ? "selected" : ""}`}
                onClick={() => setForm({ ...form, priceIntent: opt.value as PriceIntent })}
              >
                <div className="text-sm font-medium" style={{ color: "#f5ede8" }}
                  dangerouslySetInnerHTML={{ __html: opt.label }} />
                <div className="text-xs mt-0.5" style={{ color: "#7a6068" }}
                  dangerouslySetInnerHTML={{ __html: opt.sub }} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 6 */}
      {step === 6 && (
        <div className="animate-fade-in-up">
          <h3 className="font-serif text-xl mb-2" style={{ color: "#f5ede8" }}>
            You&apos;re in. Leave your details.
          </h3>
          <p className="text-sm mb-6" style={{ color: "#7a6068" }}>
            We&apos;ll notify you the moment we launch — with early-bird pricing reserved just for you.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-xs mb-1.5" style={{ color: "#7a6068" }}>First name</label>
              <input
                type="text"
                placeholder="Your first name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="block text-xs mb-1.5" style={{ color: "#7a6068" }}>Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm"
              />
            </div>
            <p className="text-xs" style={{ color: "#7a6068" }}>
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={back}
          className={`btn-outline px-5 py-2.5 rounded-xl text-sm ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
        >
          Back
        </button>

        {step < TOTAL_STEPS ? (
          <button
            onClick={next}
            disabled={!canAdvance()}
            className={`btn-primary text-white px-6 py-2.5 rounded-xl text-sm font-medium ${
              !canAdvance() ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canAdvance() || loading}
            className={`btn-primary text-white px-6 py-2.5 rounded-xl text-sm font-medium ${
              !canAdvance() || loading ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? "Saving..." : "Reserve my spot"}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-center mt-4" style={{ color: "#e03050" }}>{error}</p>
      )}
    </div>
  );
}
