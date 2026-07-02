"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqImg from "@/public/assets/faq-mountains.jpg";
import { Reveal } from "../Reveal";

const defaultFaqs = [
  {
    q: "What types of trips does Rihla DZ offer?",
    a: "Sahara expeditions, coastal escapes, heritage city walks, and fully private custom journeys across Algeria's 48 wilayas.",
  },
  {
    q: "What is your cancellation or refund policy?",
    a: "Free cancellation up to 45 days before departure. Between 45 and 14 days a 30% fee applies. Within 14 days non-refundable, but transferable to another date or person.",
  },
  {
    q: "Are Rihla's trips safe and well-guided?",
    a: "Yes. All Sahara routes use licensed local guides, registered vehicles, satellite communications and where required, official military escorts. Our team is on call 24/7 during every trip.",
  },
  {
    q: "Can I customize my travel itinerary?",
    a: "Absolutely. Every public trip can be privatized and reshaped — extend, shorten, swap regions, add cooking classes, hammam, or photography sessions.",
  },
  {
    q: "How do I book a trip?",
    a: "Send us a message via the contact page or WhatsApp. We reply within 24 hours with a tailored proposal and a secure deposit link.",
  },
];

export function FAQs({
  title = "All you should know before embarking on your Algerian journey",
  faqs = defaultFaqs,
  image = faqImg.src,
}: {
  title?: string;
  faqs?: { q: string; a: string }[];
  image?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                FAQ
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-balance max-w-2xl">
                {title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <Reveal>
              <p className="font-semibold text-primary">
                Didn't see your question?
              </p>
              <p className="text-muted-foreground mt-2 max-w-sm">
                Our team is here to help — just reach out and we'll reply
                shortly, usually within a few hours.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="img-zoom rounded-3xl overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full aspect-4/3 object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left bg-background border border-border rounded-2xl px-6 py-5 hover:border-accent/50 transition-colors cursor-pointer"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-primary">{f.q}</span>
                    <span
                      className={`grid place-items-center w-8 h-8 rounded-full bg-secondary text-primary shrink-0 transition-transform ${open === i ? "rotate-180 bg-accent text-accent-foreground" : ""}`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </div>
                  <div
                    className="grid transition-all duration-500"
                    style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-4 text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
