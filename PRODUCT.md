# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers, design leads and recruiters screening Colette Fung for a senior product designer role. The role is broad: end-to-end product design, with design systems as one strength among several rather than the whole pitch. Target markets are Singapore, remote or regional APAC roles, and public sector / GovTech digital teams.

They arrive by direct link (from an application, CV or message), usually scan the homepage in well under a minute, and open one or two case studies only if the first impression earns it.

## Product Purpose

A personal portfolio that gets Colette shortlisted. Success means a screener quickly understands her seniority, range and way of thinking, and reads at least one case study to judge depth.

## Positioning

The combination is hers alone: a Psychology degree and research grounding, a recent part-time MSc in Information Systems (NTU) with deliberately technical electives, and practice across three very different contexts: Singapore public housing (HDB), B2B e-commerce across four markets (GFG: ZALORA, THE ICONIC, Dafiti, Lamoda), and corporate event web building (CWT). She was the sole steward of HDB's intranet design system; her current focus at HDB is product design for the sales (BTO application) journey. The through-line is moving between human behaviour and technical systems, and using judgement to weigh trade-offs.

## Operating Context

- Homepage (`index.html`): hero intro, case studies, "From people to systems" about text, qualifications (education, design-related work history, languages).
- Three case studies under `casestudy/`:
  - Application Timeline (HDB, public sector, citizen service, cross-org alignment)
  - Milestone Component (HDB intranet design system)
  - Product Inspector (GFG, B2B e-commerce pricing)
- Fixed top navigation linking Home, each case study and an email address.
- `resume.pdf` is available alongside the site.

## Capabilities and Constraints

- Plain static HTML, CSS (`styles.css`) and JS (`script.js`), no framework or build step. Served locally with `npx serve` on port 5500.
- Hosted from the GitHub repo `colette-hy/portfolio`.
- **The site must stay unindexed.** `robots.txt` disallows all crawlers, and the portfolio is shared by direct link only. Do not remove this or add SEO work that assumes public discovery.
- Each case study ends with a disclaimer.

## Brand Commitments

- Voice: first person, plain and grounded, curious; personal details (hiking Kinabalu and Fuji) are part of the about text.
- The repo's authoring notes (`generate_casestudy.md.txt`) ask for no em dashes in case study copy. They also contain an earlier colour and font idea. That is historical, not binding here; the shipped CSS is the visual authority.

## Evidence on Hand

- Real content: `self-intro.txt`, `resume.pdf`, `portrait.png`, three case study pages, plus extracted text files for each in `casestudy/*/`.
- Credentials: MSc Information Systems (NTU, 2024–2026, part-time), NN/g UX Certificate (Aug 2025, ID 1076703), Diploma in Multimedia Graphic Design (HKPC, 2007), BSocSc Psychology (HKU, 2003–2006).
- No testimonials, client quotes or outcome metrics are provided. Do not invent any.

## Product Principles

1. Earn the first fifteen seconds: role, seniority and range must read at a glance.
2. Show range, not a single specialism: design systems, research and end-to-end product work each get their place.
3. Depth lives in the case studies; the homepage routes to them rather than repeating them.
4. Only claim what is real and already shared. Nothing is fabricated, and the case studies stay within what their disclaimers allow.
