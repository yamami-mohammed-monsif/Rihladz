# Rihla DZ

A modern travel and tourism website concept for discovering Algeria through curated destinations, tours, and locally rooted travel experiences.

**Live Demo:** https://rihladz.vercel.app/  
**Repository:** https://github.com/yamami-mohammed-monsif/Rihladz

## Overview

Rihla DZ is a portfolio concept showing how I combine frontend development, UI/UX, and CRO methodology. After completing a CRO course, I designed the experience around a hypothetical goal: helping visitors move from discovering a destination to making a qualified travel inquiry. This is a demo project, not a live business experiment; no conversion uplift is claimed.

## Conversion Strategy

The page was structured around a simple conversion journey: help visitors understand the offer, build trust, reduce uncertainty, and guide them toward a booking-related action.

### CTA hierarchy

A single primary CTA is emphasized in the hero to give visitors a clear next step without competing actions.

### Trust placement

Trust-building statistics are positioned directly below the primary hero CTA to reinforce credibility at the point where visitors are deciding whether to continue.

### Social proof

Testimonials are used to provide social proof and reduce perceived risk before visitors reach the final conversion point.

### Objection handling

An FAQ section addresses common questions and potential objections before the final CTA, reducing friction in the decision-making process.

### Conversion flow

The page follows a deliberate structure:

![cro-notes](docs/cro-notes.jpg)

**Value proposition → Primary CTA → Trust → Destinations & experiences → Social proof → Objection handling → Final CTA**

The goal was to make the next action obvious while giving visitors enough information and reassurance to make a decision.

## CRO Method & Measurement Plan

CRO is more than adding a prominent button. It means understanding what visitors need, identifying friction in their journey, and using evidence to decide what to improve.

For this concept, I structured the experience to communicate the offer, make destinations easier to explore, address common questions, and guide visitors toward an inquiry. The decisions in the interface are CRO-informed design hypotheses—not validated results.

### How I would approach CRO on a real project

1. **Define the goal:** agree what counts as a valuable conversion, such as a completed, qualified travel inquiry.
2. **Measure the journey:** configure GA4 and Google Tag Manager to track key actions and establish a baseline.
3. **Find friction:** review funnel drop-offs and use heatmaps, scroll maps, and session recordings where appropriate to understand how visitors use the site.
4. **Form a hypothesis:** connect an observed problem to a specific change and a measurable expected outcome.
5. **Test and learn:** run an A/B test when traffic and tracking support a reliable comparison. Otherwise, use usability feedback and monitored iteration without presenting the result as a controlled experiment.
6. **Evaluate the outcome:** focus on the agreed conversion metric while monitoring guardrails such as page performance and unwanted drop-offs.

### Example hypothesis for Rihla DZ

**Hypothesis:** Mobile visitors may be more likely to explore a trip when the next step is easy to spot and important decision information is easy to find.

**Possible test:** compare the current journey with a version that makes the destination or tour action clearer and brings relevant practical information closer to the decision point.

**Example events to track:** `hero_cta_click`, `destination_select`, `tour_detail_view`, `faq_expand`, `inquiry_start`, and `inquiry_submit`.

**Primary metric:** completed qualified inquiries per eligible visit.  
**Supporting metrics:** CTA click-through rate and progression from destination or tour exploration to inquiry.

### Demo-project limitations

GA4/GTM tracking, heatmaps, and conversion experiments are not configured for this portfolio demo, and it has no production conversion data. The events and test above are a proposed measurement plan, not collected results.

Any sample statistics or testimonials shown in a demo should be treated as illustrative unless they are backed by verified business data. They should be replaced with approved real information before a commercial launch.

## Performance & Technical Optimization

Performance was treated as part of the user experience and conversion path, particularly for mobile visitors.

The implementation uses Next.js image optimization, responsive image sizing, reusable components, and a lightweight frontend architecture.

### Mobile Lighthouse / PageSpeed Insights

- **Performance:** 100/100
- **SEO:** 100/100
- **Best Practices:** 96/100
- **Accessibility:** 90/100
- **Largest Contentful Paint:** 0.9s
- **First Contentful Paint:** 0.9s
- **Total Blocking Time:** 10ms
- **Cumulative Layout Shift:** 0
- **Speed Index:** 1.3s

These results were measured using Google PageSpeed Insights and can vary between test runs.

## Performance Evidence

Mobile PageSpeed Insights test:

![Mobile PageSpeed Insights results](docs/pagespeed-test-result.png)

## Features

- Immersive hero section with Algerian Sahara imagery
- Scroll-based parallax effect in the hero
- Responsive navigation and layouts
- Destination and tour sections
- Testimonials and trust signals
- FAQ section
- Reusable call-to-action sections
- Responsive image handling with Next.js Image
- Component-based page architecture
- Interactive hover states and visual transitions

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Icons
- Vercel

## Project Structure

The main page is composed from reusable sections:

- Header
- Hero
- Popular Tours
- Destinations
- Why Us
- Testimonials
- FAQs
- CTA
- Footer

This keeps the page modular and makes individual sections easier to maintain and iterate on.

## Development Approach

This project was developed as a personal portfolio project with AI-assisted development. AI tools were used during implementation and iteration, while the resulting code and architecture were reviewed and adapted as part of the development process.

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yamami-mohammed-monsif/Rihladz.git
cd Rihladz
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## What I Focused On

The main goals of the project were to practice:

- Building production-style interfaces with Next.js
- Creating reusable React components
- Developing responsive layouts with Tailwind CSS
- Using optimized images and modern Next.js features
- Designing clear user journeys and calls to action
- Combining visual storytelling with practical frontend implementation
