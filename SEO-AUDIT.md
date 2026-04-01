# SEO Audit Report

**Site:** PureWay OC
**URL:** https://purewayoc.com
**Date:** 2026-03-31
**Mode:** Live Crawl
**Pages Analyzed:** 19
**Overall Score:** 62/100 -- Average

---

## Score Summary

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Technical Foundation | 17 | 21 | Good |
| On-Page SEO | 17 | 28 | Fair |
| Structured Data | 3 | 21 | Needs Work |
| Open Graph / Social | 8 | 12 | Fair |
| Performance Signals | 14 | 24 | Needs Work |
| LLM / GEO Optimization | 23 | 27 | Good |
| **TOTAL** | **62** | **100** | **Average** |

---

## Executive Summary

- **[HIGH]** Add LocalBusiness schema to homepage
- **[HIGH]** Add FAQPage schema to pages with question headings
- **[HIGH]** Add H1 to 1 page(s)
- **[HIGH]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
- **[HIGH]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)

---

## 1. Technical Foundation -- 17/21

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| HTTPS | 2 | 2 | PASS |  |
| Viewport meta tag | 1 | 1 | PASS |  |
| HTML lang attribute | 1 | 1 | PASS |  |
| Charset declaration | 1 | 1 | PASS |  |
| robots.txt valid | 2 | 2 | PASS |  |
| XML sitemap exists | 2 | 2 | PASS | Dynamic sitemap.ts |
| Sitemap in robots.txt | 1 | 1 | PASS |  |
| No broken internal links | 2 | 2 | PASS |  |
| Canonical tags on all pages | 2 | 0 | FAIL | 4/19 pages missing canonical tag |
| Clean URL structure | 1 | 1 | PASS |  |
| Favicon | 1 | 1 | PASS |  |
| Custom 404 page | 1 | 1 | PASS |  |
| Analytics tracking installed | 1 | 1 | PASS | Found: GA4 |
| Mobile content parity (no critical content hidden) | 1 | 0 | FAIL | 15 page(s) hide SEO-critical content on mobile (hidden lg:block pattern) |
| All pages within 3 clicks of homepage | 1 | 1 | PASS |  |

## 2. On-Page SEO -- 17/28

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| Unique title tags, correct length | 3 | 2 | FAIL | 9 page(s) with missing/bad-length titles |
| Unique meta descriptions, correct length | 3 | 2 | FAIL | 11 page(s) with missing/bad-length meta desc |
| Single H1 per page | 2 | 1 | FAIL | 1 page(s) missing H1 |
| Proper heading hierarchy (H1>H2>H3) | 2 | 1 | FAIL | 1 page(s) have H3 without H2 |
| Alt text on all images | 2 | 2 | PASS |  |
| Image dimensions (CLS prevention) | 2 | 2 | PASS |  |
| Images use next/image component | 2 | 2 | PASS |  |
| No duplicate content across pages | 1 | 0 | FAIL | 9 page pair(s) with >50% content overlap: /contact <> /faq (62%); /contact <> /service-area (58%) |
| Internal linking with descriptive anchors | 2 | 2 | PASS |  |
| No orphan pages (all pages internally linked) | 1 | 0 | FAIL | 14 page(s) with no internal links pointing to them: /about, /before-after, /blog/[slug]... |
| External links have rel="noopener" | 1 | 1 | PASS |  |
| Content length meets threshold | 1 | 0 | FAIL | Homepage: 210 words (need 400+); 9 thin service page(s) |
| Primary keyword in title + H1 | 2 | 1 | FAIL | 15/19 pages have matching keywords in title and H1 |
| No plain text email addresses exposed | 1 | 0 | FAIL | 1 email(s) exposed in plain text: purewayoc@gmail.com |
| Top keywords present in title + meta description | 2 | 1 | FAIL | 10/19 pages have keyword alignment (53%) |
| Business address visible on page | 1 | 0 | FAIL | Business address not found in visible page content (footer/header). Only in schema is not enough. |

## 3. Structured Data -- 3/21

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LocalBusiness or subtype schema | 3 | 0 | FAIL | No LocalBusiness schema found |
| NAP in schema | 1 | 0 | FAIL | No NAP data in schema |
| NAP consistency (schema vs page) | 1 | 1 | PASS |  |
| WebSite schema on homepage | 1 | 1 | PASS |  |
| BreadcrumbList on interior pages | 2 | 0 | FAIL | 0/18 interior pages have BreadcrumbList |
| FAQPage schema | 3 | 0 | FAIL | 6 page(s) have questions but no FAQPage schema |
| Service schema | 2 | 0 | FAIL | No Service schema found |
| Article schema | 1 | 0 | FAIL | No Article schema (may not have blog) |
| dateModified/datePublished in schemas | 1 | 0 | FAIL | No dateModified or datePublished found in any JSON-LD schema |
| Schema validates (no parse errors) | 1 | 1 | PASS |  |
| GeoCoordinates in LocalBusiness | 1 | 0 | FAIL | No geo coordinates in LocalBusiness schema. Add latitude/longitude via .seo-config.json. |
| hasCertification in schema | 1 | 0 | FAIL | No certifications in schema. Add certifications via .seo-config.json. |
| HowTo schema | 1 | 0 | FAIL | 4 page(s) have step content but no HowTo schema |
| AggregateRating in schema | 1 | 0 | FAIL | No AggregateRating in schema. Add reviewRating/reviewCount via .seo-config.json. |
| VideoObject schema | 1 | 0 | FAIL | No VideoObject schema. Add YouTube video embeds to pages for video rich results. |

## 4. Open Graph / Social -- 8/12

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| og:title on all pages | 2 | 2 | PASS |  |
| og:description on all pages | 2 | 2 | PASS |  |
| og:image on all pages | 2 | 1 | FAIL | 4/19 missing og:image |
| og:url on all pages | 1 | 1 | PASS |  |
| og:type set | 1 | 1 | PASS |  |
| Twitter/X card tags | 1 | 1 | PASS |  |
| og:image:alt | 1 | 0 | FAIL | og:image:alt missing |
| Social profile links on site | 2 | 0 | FAIL | Missing: facebook, instagram, twitter, linkedin, youtube |

## 5. Performance Signals -- 14/24

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LCP image preloaded | 3 | 3 | PASS |  |
| INP < 200ms | 3 | 1 | FAIL | Requires real user measurement (PageSpeed Insights) |
| CLS: images have width/height | 3 | 3 | PASS |  |
| Resource hints (preconnect/dns-prefetch) | 2 | 2 | PASS |  |
| Font loading optimized | 2 | 0 | FAIL | No font-display: swap detected |
| No render-blocking JS in <head> | 2 | 2 | PASS |  |
| Bing sitemap submitted (Bing verification) | 2 | 0 | FAIL | No Bing site verification found (add msvalidate.01 meta tag or BingSiteAuth.xml) |
| Minimal inline styles | 1 | 0 | FAIL | 202 inline style attributes found across pages (move to CSS classes) |
| Click-to-call (phone numbers in tel: links) | 1 | 0 | FAIL | 17 phone number(s) not wrapped in tel: links |
| GA4 conversion event tracking | 2 | 1 | FAIL | Analytics installed but no conversion events detected. Add gtag("event", "generate_lead") or dataLay... |
| Call tracking configured | 1 | 0 | FAIL | Phone numbers found but no call tracking (CallRail, CallTrackingMetrics, Marchex, WhatConverts). Can... |
| Form submission tracking | 1 | 1 | PASS | No forms detected |
| Conversion funnel (CTA on all pages) | 1 | 1 | PASS | 18/19 pages have CTAs (good) |

## 6. LLM / GEO Optimization -- 23/27

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| llms.txt well-formed | 2 | 2 | PASS | 5 links |
| llms-full.txt extended context file | 1 | 1 | PASS |  |
| FAQ with query-matched headings | 3 | 3 | PASS | 11 page(s) with question headings |
| Citation-ready answer blocks | 2 | 2 | PASS |  |
| Statistics with citations | 2 | 2 | PASS |  |
| Named authors with credentials | 2 | 2 | PASS |  |
| Content freshness (dateModified) | 2 | 0 | FAIL | No dateModified or <time> tags found |
| Semantic HTML elements | 2 | 2 | PASS |  |
| Comparison tables | 1 | 1 | PASS |  |
| Direct answer in first 100 words | 1 | 1 | PASS |  |
| AI crawler rules optimized | 2 | 2 | PASS |  |
| Entity density (brand/org/product names) | 2 | 2 | PASS | Avg 25 entities/page |
| Passage-level section length (134-250 words) | 1 | 0 | FAIL | Sections too thin: avg 58 words (need 134+). Expand content under each H2/H3. |
| BLUF: keyword in first 100 words after H1 | 1 | 1 | PASS | 18/19 pages have BLUF |
| Content freshness (files updated within 180 days) | 1 | 1 | PASS | Oldest page: 12 days |
| Multimodal content (text + images + video + schema + tables + lists) | 1 | 1 | PASS | Avg 3.6 content types/page |

---

## Page-by-Page Summary

| Page | Score | Title (chars) | Meta Desc (chars) | H1 | Alt | Words | Issues |
|------|-------|--------------|-------------------|-------|-----|-------|--------|
| / | 21/25 | 56ch | 162ch | OK | OK | 210 | desc 162ch |
| /about | 21/25 | 51ch | 170ch | OK | OK | 145 | desc 170ch |
| /before-after | 20/25 | 46ch | 145ch | OK | OK | 75 | title 46ch, thin |
| /blog | 19/25 | 30ch | 146ch | OK | - | 1121 | title 30ch, no canonical |
| /blog/[slug] | 16/25 | 38ch | 148ch | NONE | - | 1119 | title 38ch, no H1, no canonical |
| /contact | 23/25 | 55ch | 146ch | OK | OK | 50 | thin |
| /faq | 24/25 | 54ch | 157ch | OK | OK | 189 | - |
| /privacy | 14/25 | 40ch | 70ch | OK | - | 97 | title 40ch, desc 70ch, no canonical, thin |
| /service-area | 20/25 | 58ch | 165ch | OK | OK | 80 | desc 165ch, thin |
| /services | 21/25 | 52ch | 171ch | OK | OK | 186 | desc 171ch |
| /services/commercial | 21/25 | 53ch | 195ch | OK | OK | 148 | desc 195ch |
| /services/free-water-testing | 18/25 | 44ch | 162ch | OK | OK | 128 | title 44ch, desc 162ch |
| /services/maintenance | 20/25 | 47ch | 139ch | OK | OK | 73 | title 47ch, thin |
| /services/reverse-osmosis | 18/25 | 49ch | 195ch | OK | OK | 179 | title 49ch, desc 195ch |
| /services/water-softeners | 21/25 | 53ch | 168ch | OK | OK | 146 | desc 168ch |
| /services/well-water | 21/25 | 47ch | 157ch | OK | OK | 182 | title 47ch |
| /services/whole-house-filtration | 21/25 | 54ch | 195ch | OK | OK | 123 | desc 195ch |
| /terms | 14/25 | 42ch | 78ch | OK | - | 5 | title 42ch, desc 78ch, no canonical, thin |
| /testimonials | 23/25 | 58ch | 153ch | OK | OK | 98 | thin |

**Page Score Stats:** avg 20/25, min 14/25, max 24/25, 3 page(s) below 18/25 threshold

---

## Content Gaps

**Found:** Services overview page, About page, Contact page, FAQ page, Reviews / Testimonials, Service area pages, Blog / Resources, Privacy policy, Terms of service

**Missing:**
- Pricing / Financing
- Certifications page
- Process / How it works
- Individual city pages

---

## Priority Fix List

### HIGH

1. **[Structured Data]** Add LocalBusiness schema to homepage
2. **[Structured Data]** Add FAQPage schema to pages with question headings
3. **[On-Page]** Add H1 to 1 page(s)
4. **[On-Page]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
5. **[On-Page]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
6. **[Technical]** Fix mobile content parity — SEO-critical content is hidden on mobile via hidden lg:block patterns
7. **[Performance]** Wrap all phone numbers in tel: links for click-to-call on mobile
8. **[On-Page]** Fix duplicate content — multiple pages have >50% content overlap, risking cannibalization
### MEDIUM

9. **[Structured Data]** Add BreadcrumbList schema to interior pages
10. **[Structured Data]** Add Service schema to service pages
11. **[Performance]** Add Bing site verification (msvalidate.01 meta tag or BingSiteAuth.xml) and submit sitemap to Bing Webmaster Tools
12. **[OG/Social]** Add og:image to all pages
13. **[On-Page]** Remove or obfuscate plain text email addresses to prevent spam scraping
14. **[On-Page]** Align title tags and meta descriptions with top page keywords for better ranking
15. **[On-Page]** Add business address to footer or contact section (visible text, not just schema)
16. **[On-Page]** Add internal links to orphan pages — these pages have no links pointing to them from other pages
17. **[OG/Social]** Add social profile links to footer (Missing: facebook, instagram, twitter, linkedin, youtube)
18. **[LLM/GEO]** Optimize section lengths: each H2/H3 section should be 134-250 words for ideal LLM citation extraction
19. **[Structured Data]** Add GeoCoordinates to LocalBusiness schema via .seo-config.json (latitude/longitude)
20. **[Structured Data]** Add business certifications to schema via .seo-config.json
21. **[Structured Data]** Add AggregateRating to schema via .seo-config.json (reviewRating/reviewCount)
22. **[Performance]** Add conversion event tracking to analytics: gtag("event", "generate_lead"), dataLayer.push for form submissions and phone clicks
23. **[Performance]** Install call tracking (CallRail, CallTrackingMetrics) to measure phone call conversions and attribute calls to marketing channels
24. **[Performance]** 60-80% of calls go unanswered during peak hours. Consider adding: (1) after-hours answering service, (2) AI voice agent for 24/7 coverage, (3) callback request form, (4) SMS text-back automation.
### LOW

25. **[Performance]** Move inline styles to CSS classes or Tailwind utilities
26. **[LLM/GEO]** Add dateModified to schemas and <time> elements to content
27. **[Structured Data]** Add dateModified and datePublished to Article/Service JSON-LD schemas
28. **[Structured Data]** Add HowTo schema to pages with step-by-step content (process, how-it-works)
29. **[Structured Data]** Add VideoObject schema to pages with YouTube embeds for video rich results
---

## External Audit Estimate (SEOptimer-style)

| Category | Est. Grade | Our Score |
|----------|-----------|----------|
| Overall | **D** | 62/100 |
| On-Page SEO | D+ | 61% |
| Usability | D+ | 67% |
| Performance | F | 58% |
| Social | D+ | 67% |

*Note: External audit tools may differ. This is an estimate based on our internal scoring.*

---

*Generated by Fax Strive SEO Bot v3.0*
*Run again after applying fixes to measure improvement*
