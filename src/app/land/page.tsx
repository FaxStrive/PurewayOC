/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages, react/no-unescaped-entities */
"use client";

import Script from "next/script";
import {
  Phone, Star, Check, ShieldCheck, Clock, Award, Gift,
  Home, CalendarCheck, type LucideIcon,
} from "lucide-react";

const BRAND = "#0891b2";
const BRAND_DARK = "#152B47";
const PHONE = "(949) 998-9443";
const PHONE_TEL = "tel:9499989443";

function GhlFormCard({ height = 620, instance = "main" }: { height?: number; instance?: string }) {
  const iframeId = `inline-Q9KJNIYhe4S9zd4qPI76-${instance}`;
  return (
    <div style={{ width: "100%" }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/Q9KJNIYhe4S9zd4qPI76"
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: 8, background: "white", display: "block" }}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="LP Form"
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id="Q9KJNIYhe4S9zd4qPI76"
        title="Lead capture form"
      />
    </div>
  );
}

function HeroTestimonial() {
  return (
    <div className="rounded-xl border border-white/20 bg-white/95 text-[#0c1f2e] p-4 shadow-lg">
      <div className="flex items-center gap-1 mb-2" aria-label="5 star rating">
        {[0,1,2,3,4].map((i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
        <span className="ml-2 text-xs font-semibold text-[#475569]">5.0 · Google reviews</span>
      </div>
      <p className="text-[13px] text-[#475569] leading-snug">
        Verified customer · Orange County
      </p>
    </div>
  );
}

function ConversionTestimonial() {
  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-[#f4f7fb] p-5">
      <div className="flex items-center gap-1 mb-2" aria-label="5 star rating">
        {[0,1,2,3,4].map((i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
        <span className="ml-2 text-xs font-semibold text-[#475569]">5.0 · Google reviews</span>
      </div>
      <p className="text-[13px] text-[#475569] leading-snug">
        Verified customer · Orange County
      </p>
    </div>
  );
}

export default function LpPage() {
  return (
    <div className="bg-white text-[#0c1f2e] font-sans" data-lp-root>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <Header />
      <Hero />
      <Proof />
      <ProblemStatement />
      <ConversionForm />
      <RiskReversal />
      <SoftBonus />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white border-b border-[#e2e8f0]">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-5 sm:px-8 py-4">
        <img src="/images/logo-main.png" alt="PureWay OC" className="h-12 w-auto" />
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={PHONE_TEL} className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold border-2" style={{ color: BRAND, borderColor: BRAND }}>
            <Phone className="w-4 h-4" />{PHONE}
          </a>
          <a href="#get-quote" className="inline-flex items-center px-4 py-2.5 rounded-md text-sm font-semibold text-white" style={{ backgroundColor: BRAND }}>
            Get Free Water Test
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative text-white overflow-hidden" style={{ backgroundColor: BRAND_DARK }}>
      <img src="/images/oc-costa-mesa-aerial.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" aria-hidden />
      <div className="absolute inset-0" style={{ background: `linear-gradient(110deg, ${BRAND_DARK}f0 0%, ${BRAND_DARK}cc 45%, ${BRAND_DARK}99 100%)` }} aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-3" style={{ color: "#67e8f9" }}>Free in-home water test</p>
          <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-extrabold tracking-tight" style={{ color: "white" }}>
            Find out what&rsquo;s <span style={{ color: "#67e8f9" }}>actually</span> in your Orange County water.
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center text-[12px] sm:text-[13px] font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20">Lifetime warranty</span>
            <span className="inline-flex items-center text-[12px] sm:text-[13px] font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20">Same-week install</span>
            <span className="inline-flex items-center text-[12px] sm:text-[13px] font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20">OC local</span>
            <span className="inline-flex items-center text-[12px] sm:text-[13px] font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20">0% APR financing</span>
          </div>
          <p className="mt-5 text-lg sm:text-xl max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
            A PureWay OC specialist visits your home, runs a full water test, and explains every number in plain English. No pressure, no obligation.
          </p>
          <a href="#get-quote" className="mt-7 inline-flex items-center px-7 py-3.5 rounded-md text-base font-bold text-white" style={{ backgroundColor: BRAND }}>
            Schedule my free test
          </a>
          <div className="mt-6 flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.88)" }}>
            <Phone className="w-4 h-4" /><span>Or call</span>
            <a href={PHONE_TEL} className="font-bold underline">{PHONE}</a>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>·</span>
            <span>We call back same-day</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <HeroTestimonial />
          <GhlFormCard height={620} instance="hero" />
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const items: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: Home, title: "OC homes", body: "Orange County water specialists" },
    { icon: Star, title: "5★ Google", body: "Whole-home filtration, softeners, RO" },
    { icon: ShieldCheck, title: "Lifetime warranty", body: "On every system we install" },
    { icon: CalendarCheck, title: "Same-week install", body: "Tested today, installed this week" },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-14 lg:py-20">
        <p className="text-center text-[11px] font-bold tracking-[0.24em] uppercase mb-3" style={{ color: BRAND }}>Why Orange County picks PureWay</p>
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0c1f2e] mb-10">The numbers behind every install.</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-lg bg-[#f4f7fb] p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: BRAND }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg font-bold mb-1" style={{ color: BRAND }}>{title}</div>
              <p className="text-sm text-[#475569]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemStatement() {
  const points = [
    "Chlorine and chloramine taste from city water",
    "Hard-water scale destroying your water heater",
    "Skin and hair dryness after every shower",
    "Hidden contaminants in OC city water",
  ];
  return (
    <section className="bg-white border-t border-[#e2e8f0]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-3" style={{ color: BRAND }}>What&rsquo;s actually in your water</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">
            Orange County water is rough on skin, fixtures, and appliances.
          </h2>
          <p className="text-[#475569] text-lg mb-7 max-w-xl">
            Most OC homes have at least one of these, and you don&rsquo;t need to live with any of them.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex w-6 h-6 rounded-full items-center justify-center shrink-0" style={{ backgroundColor: BRAND }}>
                  <Check className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-[#0c1f2e]">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden aspect-[4/3] relative">
          <img src="/images/kitchen-faucet-running.jpg" alt="OC tap water flowing into kitchen sink" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function ConversionForm() {
  return (
    <section id="get-quote" className="bg-white border-t border-[#e2e8f0]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-10 items-stretch">
          <div className="rounded-lg overflow-hidden relative min-h-[260px] lg:min-h-full">
            <img src="/images/family-drinking-water.jpg" alt="Orange County family enjoying clean PureWay water" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${BRAND}00 50%, ${BRAND}dd 100%)` }} aria-hidden />
            <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold drop-shadow">Irvine · Newport Beach · Costa Mesa · Huntington Beach</div>
          </div>
          <div className="rounded-lg border border-[#e2e8f0] p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-3" style={{ color: BRAND }}>Schedule your free test</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight text-[#0c1f2e]">Book your free in-home water test.</h2>
            <p className="text-[#475569] mb-5">Takes 30 minutes on-site. We&rsquo;ll confirm your appointment within one business day. No pressure, no obligation, same-day callback.</p>
            <p className="text-[12px] font-semibold mb-5" style={{ color: BRAND }}>$0 down · 0% APR financing available</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="inline-flex items-center justify-center px-6 py-3.5 rounded-md text-base font-bold text-white" style={{ backgroundColor: BRAND }}>
                Use the form at top
              </a>
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-base font-bold border-2" style={{ color: BRAND, borderColor: BRAND }}>
                <Phone className="w-4 h-4" /> Call {PHONE}
              </a>
            </div>
            <div className="mt-5">
              <ConversionTestimonial />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RiskReversal() {
  const items = [
    { icon: ShieldCheck, title: "Lifetime warranty", body: "Every system is backed by a lifetime warranty for as long as you own the home." },
    { icon: Clock, title: "Same-week install", body: "Test today, install this week. Most jobs finish in under a day." },
    { icon: Award, title: "OC local", body: "Trained, insured, and trusted across Orange County." },
    { icon: Gift, title: "$0 down financing", body: "Approved homeowners pay nothing up front. 0% APR available." },
  ];
  return (
    <section className="bg-white border-t border-[#e2e8f0]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-14 lg:py-20">
        <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-3" style={{ color: BRAND }}>The guarantees behind every install</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0c1f2e] mb-3">You carry zero risk. We carry all of it.</h2>
        <p className="text-[#475569] mb-8 max-w-2xl">Testing your water and meeting our team is a zero-cost, zero-pressure decision.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: BRAND }}>
                <Icon className="w-5 h-5 text-white" />
              </span>
              <div>
                <div className="font-bold text-[#0c1f2e]">{title}</div>
                <p className="text-[#475569] mt-1">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftBonus() {
  return (
    <section style={{ backgroundColor: BRAND }} className="text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] uppercase opacity-90 mb-1" style={{ color: "white" }}>This week&rsquo;s bonus</p>
          <p className="text-lg sm:text-xl font-bold" style={{ color: "white" }}>Book this week and we&rsquo;ll waive the $99 service-call fee on any future repair, for life.</p>
        </div>
        <a href="#get-quote" className="inline-flex items-center px-6 py-3 rounded-md font-bold bg-white" style={{ color: BRAND }}>
          Claim my free test
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: BRAND_DARK }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-12 grid sm:grid-cols-2 gap-8">
        <div className="max-w-md">
          <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            PureWay OC · Whole-home water filtration for Orange County homes.
          </p>
          <p className="mt-5" style={{ color: "rgba(255,255,255,0.85)" }}><a href={PHONE_TEL} className="hover:underline">{PHONE}</a></p>
        </div>
        <div className="sm:text-right">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>{" "}/{" "}
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
