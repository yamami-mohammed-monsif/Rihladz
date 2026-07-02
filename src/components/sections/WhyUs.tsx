import { Compass, Heart, ShieldCheck, Sparkles } from "lucide-react";
import culture from "@/public/assets/tour-culture.jpg";
import { Reveal } from "../Reveal";

const items = [
  {
    icon: Compass,
    title: "Local-only guides",
    text: "Every itinerary is led by Algerian guides — Tuareg, Kabyle, Mozabite — born on the land they share.",
  },
  {
    icon: Heart,
    title: "Slow by design",
    text: "Smaller groups, longer stays, fewer transfers. We measure success in conversations, not kilometers.",
  },
  {
    icon: ShieldCheck,
    title: "Permits handled",
    text: "Sahara permits, invitation letters and military escorts where required — we take care of the paperwork.",
  },
  {
    icon: Sparkles,
    title: "Hand-built trips",
    text: "Every journey is privately customizable. Tell us your tempo and we shape the days around it.",
  },
];

export function WhyUs() {
  return (
    <section className="py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="img-zoom rounded-3xl overflow-hidden">
                <img
                  src={culture.src}
                  alt="Algerian tea ceremony"
                  className="w-full aspect-4/5 object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-display text-4xl text-secondary">12+</p>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-widest">
                    Years
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-secondary">3.4k</p>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-widest">
                    Travelers
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-secondary">48</p>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-widest">
                    Wilayas
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-block bg-primary-foreground/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                Why Rihla DZ
              </span>
            </Reveal>
            <Reveal>
              <h2 className="mt-5 font-display text-5xl md:text-6xl text-primary-foreground text-balance">
                Algerian travel,
                <br />
                <span className="italic font-light text-secondary">
                  told by Algerians.
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-5 text-primary-foreground/70 max-w-xl">
                We are a small team based in Algiers. We work only with the
                families, drivers and guides we have known for years — and we
                keep our trips small enough to stay personal.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {items.map((it, i) => (
                <Reveal key={it.title}>
                  <div
                    className=" bg-primary-foreground/4 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/8 hover:border-accent/40 transition-colors"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent text-accent-foreground mb-4">
                      <it.icon size={18} />
                    </div>
                    <h3 className="text-primary-foreground font-display text-xl">
                      {it.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/65 mt-2 leading-relaxed">
                      {it.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
