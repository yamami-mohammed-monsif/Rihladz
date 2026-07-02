import { Star } from "lucide-react";
import { Reveal } from "../Reveal";

const reviews = [
  {
    name: "Sofia M.",
    from: "Lisbon, Portugal",
    trip: "Tassili Expedition",
    text: "The silence on Tin Merzouga at sunrise rewired something in me. Our Tuareg guide treated us like family — not clients.",
  },
  {
    name: "Yacine B.",
    from: "Montréal, Canada",
    trip: "Algiers + Tipaza",
    text: "I am Algerian-born and I learned more about my own city in three days with Rihla than in twenty visits.",
  },
  {
    name: "Anneke V.",
    from: "Amsterdam, NL",
    trip: "Hoggar Traverse",
    text: "The most thoughtfully organized adventure trip I have ever booked. Logistics invisible, hospitality everywhere.",
  },
  {
    name: "Marco R.",
    from: "Milan, Italy",
    trip: "Ghardaïa",
    text: "The M'Zab valley felt like time travel. Rihla opens doors that no online guide will ever show you.",
  },
];

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="py-28 overflow-hidden">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-14">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
            Travelers' words
          </span>
          <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl max-w-2xl text-balance">
              Stories that came home
              <span className="italic font-light"> with them.</span>
            </h2>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
              <span className="ml-2 text-muted-foreground">
                <strong className="text-primary">4.9</strong> · 412 reviews
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="relative">
        <div
          className="flex gap-6 marquee w-max"
          style={{ paddingLeft: "1.5rem" }}
        >
          {loop.map((r, i) => (
            <article
              key={i}
              className="w-95 shrink-0 bg-surface border border-border rounded-3xl p-7 hover-lift"
            >
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-primary leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <p className="font-medium text-primary">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.from}</p>
                </div>
                <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                  {r.trip}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
