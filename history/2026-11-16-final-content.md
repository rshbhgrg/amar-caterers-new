# [2026-11-16] Apply client's final content to the site

Branch `copy/final-content`. Source: client file "Amar Caterers (2) final content mostly.html" (not committed; it's a plain styled draft with placeholder phone numbers `+910000000000`).

## Client instructions (via owner)
1. Hero headline stays "Forty years. One standard." (the final file's "Catering done properly, for forty years." was NOT used).
2. Section 2 (Story) second paragraph changes: now ends "carrying the name of Amar, his father's cold drinks shop".
3. Everything else: use the final content as written.
4. Theme/design stays exactly as before (no token or style changes).
5. Social media manager contract may end: the site has no social links/embeds, nothing to change. Open question raised: whether any event photos came from that person (rights).
- "2000+ guests": used as "2,000+ guests" in Story para 3 and the Four Decades paragraph. The testimonial quote "Two thousand guests over three days" is a quote and was left untouched.
- Owner confirmed the stats are intentional: 40+ years, 5,000+ events, 10,00,000+ guests served (was 4,000+ / 100,000+).

## Decisions (owner said "go with your recommendations")
- Placeholders in final file not shipped: "[dal/curry base]"/"[signature sweet]" rewritten as "from the base of every dal to the way each sweet is finished tableside"; "[Real client quote]" not used, the three existing testimonials stay.
- Removed sections not in final content: PromiseBand, LiveCounters, Process, Craft's menu copy, Food cuisine list + dietary chips, Contact's minimum (50 guests) and booking (9–14 months) rows, two-business-day reply line.
- Kept the WhatsApp enquiry form (only lead capture); added Call us / WhatsApp us buttons from the final's CTA, using real numbers from `lib/contact.js`.
- Buttons to non-existent pages: "See Our Work" -> #gallery, "Plan Your Occasion"/"Talk to Our Team"/"Planning Outside Rajasthan?" -> #enquire; self-referencing ones (Read Our Story, Explore Occasions, View Gallery) and "View Our Menu Matrix" (no content yet) dropped.
- Abroad copy is the final's softer "A few celebrations overseas"; US/UK no longer named in visible copy (JSON-LD areaServed still lists US/UK).
- Headings kept in the site's sentence case rather than the final file's Title Case (design consistency).
- Gallery: the final's six category labels shown as one line under the intro, not stamped on individual photos (avoids mislabeling a wedding photo as "Corporate events").

## New page order
Hero -> StatsBand (new, in old PromiseBand's wine jaali band) -> Story -> Occasions (4: weddings, corporate, social, special) -> Food ("Food and our menus" + 3 pillars) -> FourDecades (was Craft; paragraph + 3 stats) -> Values (was Standard; Integrity/Hospitality/Humility) -> Testimonials ("Trusted for four decades") -> Gallery -> WhereWeCatered (was BeyondIndia; Rajasthan cities, Maharashtra, Across India, Abroad) -> Contact ("Planning an occasion?") -> Footer ("Pure vegetarian since 1986").

Also: header/footer nav, meta description, OG description, JSON-LD description, title, sitemap lastmod, CLAUDE.md structure + content rule.

## Verification
`npm run lint` clean, `npm run build` (incl. prerender) OK. Checked in Chrome on `vite preview`: every in-page `#` link resolves, no horizontal overflow, Hero/Stats/Occasions/Where sections render in existing theme.
