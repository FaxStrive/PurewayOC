# SEO Audit Report

**Site:** PureWay OC
**URL:** https://purewayoc.com
**Date:** 2026-03-23
**Mode:** Live Crawl
**Pages Analyzed:** 19
**Overall Score:** 75/100 -- Above Average

---

## Score Summary

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Technical Foundation | 16 | 19 | Good |
| On-Page SEO | 15 | 25 | Fair |
| Structured Data | 12 | 16 | Fair |
| Open Graph / Social | 8 | 12 | Fair |
| Performance Signals | 11 | 18 | Fair |
| LLM / GEO Optimization | 20 | 20 | Good |
| **TOTAL** | **75** | **100** | **Above Average** |

---

## Executive Summary

- **[HIGH]** Add FAQPage schema to pages with question headings
- **[HIGH]** Add H1 to 1 page(s)
- **[HIGH]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
- **[HIGH]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
- **[HIGH]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)

---

## 1. Technical Foundation -- 16/19

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

## 2. On-Page SEO -- 15/25

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| Unique title tags, correct length | 3 | 2 | FAIL | 9 page(s) with missing/bad-length titles |
| Unique meta descriptions, correct length | 3 | 2 | FAIL | 11 page(s) with missing/bad-length meta desc |
| Single H1 per page | 2 | 1 | FAIL | 1 page(s) missing H1 |
| Proper heading hierarchy (H1>H2>H3) | 2 | 1 | FAIL | 1 page(s) have H3 without H2 |
| Alt text on all images | 2 | 2 | PASS |  |
| Image dimensions (CLS prevention) | 2 | 2 | PASS |  |
| Internal linking with descriptive anchors | 2 | 2 | PASS |  |
| No orphan pages (all pages internally linked) | 1 | 0 | FAIL | 14 page(s) with no internal links pointing to them: /about, /before-after, /blog/[slug]... |
| External links have rel="noopener" | 1 | 1 | PASS |  |
| Content length meets threshold | 1 | 0 | FAIL | Homepage: 206 words (need 400+); 9 thin service page(s) |
| Primary keyword in title + H1 | 2 | 1 | FAIL | 15/19 pages have matching keywords in title and H1 |
| No plain text email addresses exposed | 1 | 0 | FAIL | 1 email(s) exposed in plain text: baharehlopez@gmail.com |
| Top keywords present in title + meta description | 2 | 1 | FAIL | 10/19 pages have keyword alignment (53%) |
| Business address visible on page | 1 | 0 | FAIL | Business address not found in visible page content (footer/header). Only in schema is not enough. |

## 3. Structured Data -- 12/16

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LocalBusiness or subtype schema | 3 | 3 | PASS | Found: HomeAndConstructionBusiness |
| NAP in schema | 1 | 1 | PASS |  |
| NAP consistency (schema vs page) | 1 | 0 | FAIL | Schema phone +1-000-000-0000 not found in page content phones: 4084021920, (408) 402-1920, 320 120 1... |
| WebSite schema on homepage | 1 | 1 | PASS |  |
| BreadcrumbList on interior pages | 2 | 2 | PASS |  |
| FAQPage schema | 3 | 1 | FAIL | 4 page(s) have questions but no FAQPage schema |
| Service schema | 2 | 2 | PASS |  |
| Article schema | 1 | 0 | FAIL | No Article schema (may not have blog) |
| dateModified/datePublished in schemas | 1 | 1 | PASS |  |
| Schema validates (no parse errors) | 1 | 1 | PASS |  |

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

## 5. Performance Signals -- 11/18

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

## 6. LLM / GEO Optimization -- 20/20

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| llms.txt well-formed | 2 | 2 | PASS | 5 links |
| llms-full.txt extended context file | 1 | 1 | PASS |  |
| FAQ with query-matched headings | 3 | 3 | PASS | 11 page(s) with question headings |
| Citation-ready answer blocks | 2 | 2 | PASS |  |
| Statistics with citations | 2 | 2 | PASS |  |
| Named authors with credentials | 2 | 2 | PASS |  |
| Content freshness (dateModified) | 2 | 2 | PASS |  |
| Semantic HTML elements | 2 | 2 | PASS |  |
| Comparison tables | 1 | 1 | PASS |  |
| Direct answer in first 100 words | 1 | 1 | PASS |  |
| AI crawler rules optimized | 2 | 2 | PASS |  |

---

## Page-by-Page Summary

| Page | Score | Title (chars) | Meta Desc (chars) | H1 | Alt | Words | Issues |
|------|-------|--------------|-------------------|-------|-----|-------|--------|
| / | 21/25 | 56ch | 162ch | OK | OK | 206 | desc 162ch |
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
| /services/reverse-osmosis | 18/25 | 49ch | 177ch | OK | OK | 174 | title 49ch, desc 177ch |
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

1. **[Structured Data]** Add FAQPage schema to pages with question headings
2. **[On-Page]** Add H1 to 1 page(s)
3. **[Structured Data]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
4. **[On-Page]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
5. **[On-Page]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
### MEDIUM

6. **[Performance]** Add Bing site verification (msvalidate.01 meta tag or BingSiteAuth.xml) and submit sitemap to Bing Webmaster Tools
7. **[OG/Social]** Add og:image to all pages
8. **[On-Page]** Remove or obfuscate plain text email addresses to prevent spam scraping
9. **[On-Page]** Align title tags and meta descriptions with top page keywords for better ranking
10. **[On-Page]** Add business address to footer or contact section (visible text, not just schema)
11. **[On-Page]** Add internal links to orphan pages — these pages have no links pointing to them from other pages
12. **[OG/Social]** Add social profile links to footer (Missing: facebook, instagram, twitter, linkedin, youtube)
### LOW

13. **[Performance]** Move inline styles to CSS classes or Tailwind utilities
---

## External Audit Estimate (SEOptimer-style)

| Category | Est. Grade | Our Score |
|----------|-----------|----------|
| Overall | **C** | 75/100 |
| On-Page SEO | D+ | 60% |
| Usability | C- | 70% |
| Performance | D | 61% |
| Social | D+ | 67% |

*Note: External audit tools may differ. This is an estimate based on our internal scoring.*

---

*Generated by Fax Strive SEO Bot v3.0*
*Run again after applying fixes to measure improvement*
