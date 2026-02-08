# DropVox Marketing Site: Roadmap to 10/10

> Generated: January 23, 2026
> Current Score: **6.5/10**

This document outlines everything needed to reach market readiness for DropVox's public launch.

---

## Current Score Justification

DropVox has solid technical foundations with a clean landing page, pricing structure, working payment integration, blog content, SEO basics, and analytics setup. However, it lacks critical conversion optimization elements, social proof, media assets, launch coordination, and market positioning that would elevate it to launch-ready status. The site is functional but feels incomplete from a marketing perspective.

### Strengths to Maintain
1. Clean, professional landing page design
2. Working Stripe payment integration
3. Good blog content (3 posts)
4. Pricing structure established ($9.99 USD / R$49,90 BRL)
5. Basic SEO framework in place
6. Analytics providers configured (PostHog, Umami)

---

## Priority 1: Critical for Launch (Must Complete Before Going Live)

### M1. Create High-Quality Media Assets
**Time: 5-7 days | Impact: Critical**

Missing: OG image, product screenshots, demo video

- [ ] Create social sharing og-image (1200x630px) - **currently missing, breaks social shares**
- [ ] Create 3-5 high-quality app screenshots:
  - [ ] Menu bar interaction
  - [ ] Full app window with dashboard
  - [ ] Drop zone in action
  - [ ] Transcription result view
  - [ ] Settings/model selection
- [ ] Record 30-60 second demo video showing workflows
- [ ] Create product demo GIF for landing page hero
- [ ] Design launch graphics (Twitter/X header, ProductHunt banner)

**Files needed:**
- `/public/og-image.png` (referenced in layout.tsx but missing)
- `/public/screenshots/*.png`
- `/public/demo.mp4` or `/public/demo.gif`

---

### M2. Privacy Policy & Legal Pages
**Time: 2-3 days | Impact: Critical**

**Required for legitimate paid product:**

- [ ] Create `/privacy` page with complete privacy policy covering:
  - [ ] Local-only processing explanation
  - [ ] Data retention policy
  - [ ] Analytics disclosure
  - [ ] License key storage
- [ ] Create `/terms` page with terms of service:
  - [ ] License usage terms
  - [ ] Limitations
  - [ ] 14-day refund policy
- [ ] Add cookie consent banner (if using analytics)
- [ ] Link privacy/terms in footer of all pages

---

### M3. Fix Analytics Setup
**Time: 1-2 days | Impact: Critical**

Can't measure launch success without working analytics.

- [ ] Verify PostHog API key configured (`NEXT_PUBLIC_POSTHOG_KEY`)
- [ ] Verify Umami website ID is registered
- [ ] Add event tracking to key conversion points:
  - [ ] Download button clicks
  - [ ] Pricing page views
  - [ ] Checkout attempts
  - [ ] Blog reads
- [ ] Set up conversion funnel: landing → pricing → checkout → success

---

### M4. Complete Email Infrastructure
**Time: 2-3 days | Impact: Critical**

Payment workflow depends on email delivery.

- [ ] Verify Resend configuration with correct API key
- [ ] Test license email template in different clients
- [ ] Add license recovery email flow
- [ ] Create welcome email sequence
- [ ] Test Stripe webhook → Supabase → Resend integration end-to-end

---

### M5. System Requirements Clarity
**Time: 1 day | Impact: High**

Prevents support burden from incompatible purchases.

- [ ] Add prominent system requirements badge on pricing page
- [ ] Create detailed compatibility FAQ:
  - [ ] Why Intel Macs aren't supported
  - [ ] Minimum macOS 14 requirement
  - [ ] Which M-series chips work (all M1+)
- [ ] Add warning on download button: "Requires macOS 14+ & Apple Silicon"
- [ ] Consider pre-purchase compatibility checker

---

### M6. Checkout Flow UX
**Time: 2-3 days | Impact: High**

- [ ] Test checkout button → Stripe modal flow end-to-end
- [ ] Add trust badges on pricing (Stripe, SSL, money-back guarantee)
- [ ] Improve checkout success page (currently minimal)
- [ ] Add error handling for failed payments
- [ ] Test mobile checkout experience

---

## Priority 2: Quality & Growth (Critical for 8+ Score)

### M7. Social Proof & Testimonials
**Time: 3-5 days | Impact: High (15-25% conversion boost)**

**Currently zero social proof:**

- [ ] Reach out to beta users for testimonials
- [ ] Collect 3-5 testimonials with:
  - [ ] Name, title (or anonymous)
  - [ ] Specific results/benefits
  - [ ] Photo (if willing)
- [ ] Add testimonials section to landing page
- [ ] Add social proof to pricing page: "Used by X users"
- [ ] Create shareable testimonial graphics

---

### M8. Blog Content Strategy & SEO
**Time: 1-2 weeks | Impact: High**

Current: 3 solid posts but missing distribution.

- [ ] Write 2-3 more blog posts:
  - [ ] "DropVox vs MacWhisper: Full Comparison"
  - [ ] "WhatsApp Voice Message Management Guide"
  - [ ] "Local AI on Mac: Complete WhisperKit Guide"
- [ ] Add internal linking between posts
- [ ] Create blog newsletter signup
- [ ] Add related posts sidebar
- [ ] Add meta descriptions to all blog articles
- [ ] Set up social sharing buttons

---

### M9. Email Capture & Waitlist
**Time: 2-3 days | Impact: Medium**

**Currently no email capture at all.**

- [ ] Add email signup form on landing page
- [ ] Create "Newsletter" section above fold
- [ ] Set up Resend email list
- [ ] Create welcome email for signups
- [ ] Add benefit copy: "Get notified of new features, tips, and updates"

---

### M10. SEO Optimization
**Time: 3-5 days | Impact: Medium**

- [ ] Add meta descriptions to all pages
- [ ] Fix og-image for social shares
- [ ] Create keyword clusters:
  - [ ] "WhatsApp transcription" (currently targeted)
  - [ ] "macOS audio tools"
  - [ ] "offline AI transcription"
  - [ ] "Apple Silicon apps"
- [ ] Set up Google Search Console
- [ ] Test Core Web Vitals

---

### M11. Competitor Positioning
**Time: 2-3 days | Impact: High**

- [ ] Create explicit comparison chart vs MacWhisper
- [ ] Clarify why DropVox is better for:
  - [ ] WhatsApp users specifically
  - [ ] Users who want zero setup
  - [ ] Privacy-conscious users
- [ ] Add "Why DropVox" section with unique selling points
- [ ] Highlight: open source, free model options, native Swift quality

---

### M12. Expanded FAQ
**Time: 2-3 days | Impact: Medium**

Add objection handlers:

- [ ] "Will this work offline after downloading model?"
- [ ] "Can I use my license on multiple machines?"
- [ ] "What happens when v2 releases?"
- [ ] "How accurate is WhisperKit vs cloud options?"
- [ ] "Do you ever access my audio?"
- [ ] Link FAQ prominently from pricing page

---

## Priority 3: Scale & Polish (Nice-to-Haves)

### M13. Launch Campaign Coordination
**Time: 1-2 weeks | Impact: High**

- [ ] Create ProductHunt listing (graphics, description, video)
- [ ] Prepare Show HN post with talking points
- [ ] Coordinate Twitter/X launch thread (5-7 tweets)
- [ ] Prepare email list launch announcement
- [ ] Create Reddit strategy (r/macapps, r/privacy, r/productivity)
- [ ] Reach out to tech bloggers for coverage
- [ ] Create launch checklist with dates/times

**Show HN Draft:**
```
Show HN: DropVox – Transcribe WhatsApp Voice Messages Locally on Mac

I built DropVox because I was tired of:
1. Listening to 5-minute voice messages in real-time
2. Sending my audio to cloud services
3. Apps that require subscription for basic features

DropVox uses WhisperKit (Apple's on-device Whisper) to transcribe
audio files completely locally. No internet required after model download.

Features:
- Menu bar app with drag-and-drop
- Supports .opus (WhatsApp), .mp3, .m4a, .wav
- Multiple Whisper models (tiny to large)
- One-time purchase, no subscription

Tech: Swift/SwiftUI, WhisperKit, macOS 14+

Try free: [link]

Feedback welcome!
```

---

### M14. Twitter Launch Thread Draft
```
1/ Just shipped DropVox - a native macOS app that transcribes
WhatsApp voice messages using on-device AI.

No cloud. No subscription. Just your audio, your Mac.

Here's why I built it...

2/ Problem: WhatsApp voice messages are a nightmare.

5-minute messages you can't skim. No search. No copy-paste.
And cloud transcription means your private conversations
go through someone else's servers.

3/ Solution: DropVox uses WhisperKit (Apple's on-device Whisper)
to transcribe audio 100% locally.

- Drag & drop from Finder
- Paste with CMD+V
- Menu bar quick access

4/ Privacy-first by design:
- Audio never leaves your Mac
- No account required
- Works offline (after model download)

5/ One-time purchase. No subscription BS.

$9.99 gets you unlimited transcriptions forever.

6/ Try it free - the free tier lets you test with
the tiny model before buying.

[link]

What features would you want to see? 🙏
```

---

### M15. Advanced Analytics
**Time: 1-2 weeks | Impact: Medium**

- [ ] Set up funnel analysis: landing → pricing → checkout → success
- [ ] Add heatmap tracking to pricing page
- [ ] Create A/B test variants for CTA text
- [ ] Track user journey from blog → purchase

---

### M16. Mobile Optimization
**Time: 2-3 days | Impact: Medium**

- [ ] Test entire site on mobile
- [ ] Simplify CTAs for mobile
- [ ] Test mobile checkout flow on iOS Safari

---

### M17. Community Building
**Time: Ongoing | Impact: Long-term**

- [ ] Create Discord community for users
- [ ] Set up GitHub Discussions for feature requests
- [ ] Create "User Stories" showcase
- [ ] Host monthly updates

---

### M18. Video Content
**Time: 2-3 weeks | Impact: High**

- [ ] Create YouTube channel with tutorials
- [ ] Embed demo video on landing page
- [ ] Create video testimonials

---

## Launch Readiness Scorecard

| Category | Current | Target | Gap |
|----------|---------|--------|-----|
| Landing Page | 8/10 | 9/10 | Minor polish |
| Pricing & Payment | 7/10 | 9/10 | UX improvements |
| Blog & Content | 6/10 | 8/10 | More posts + promotion |
| SEO | 6/10 | 8/10 | Optimization + keywords |
| Social Proof | 2/10 | 8/10 | Testimonials + reviews |
| Media Assets | 3/10 | 8/10 | Screenshots + video |
| Legal/Compliance | 2/10 | 9/10 | Privacy + terms |
| Analytics | 4/10 | 8/10 | Setup + events |
| Email/CRM | 3/10 | 8/10 | Capture + automation |
| Launch Plan | 0/10 | 9/10 | ProductHunt + campaigns |

---

## Quick Wins (Complete This Week)

| Task | Time | Impact |
|------|------|--------|
| Create og-image.png | 30 min | Critical |
| Add privacy policy page | 2 hours | Critical |
| Write 3-5 testimonials | 2 hours | High |
| Add comparison chart | 1 hour | High |
| Create email signup form | 1 hour | Medium |
| Take 3-5 app screenshots | 2-3 hours | Critical |

---

## Recommended Timeline

**Week 1: Do or Die**
1. Create og-image.png and screenshots
2. Write privacy policy + terms
3. Set up legal pages in footer
4. Test Stripe/Resend integration end-to-end

**Week 2: Strengthen Fundamentals**
1. Add testimonials section to landing
2. Expand FAQ based on objections
3. Create comparison vs competitors
4. Add email signup form

**Week 3: Content & Growth**
1. Write 2 new blog posts
2. Record demo video
3. Set up ProductHunt + HN posts
4. Launch social campaign

---

## Estimated Timeline to 10/10

- **Priority 1 (Critical):** 2-3 weeks → gets to 8/10
- **Priority 2 (Growth):** 2-3 weeks → gets to 9/10
- **Priority 3 (Scale):** Ongoing → 10/10

**Total for Launch Readiness (P1+P2):** 4-6 weeks

---

*Last updated: January 23, 2026*
