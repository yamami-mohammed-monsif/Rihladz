import cta from "@/public/assets/cta-guide.webp";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <Image
              src={cta}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-primary/30" />
            <div className="relative px-8 md:px-16 py-20 md:py-28 max-w-3xl">
              <span className="inline-block bg-accent/20 text-secondary border border-accent/30 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                Limited departures · 2026
              </span>
              <h2 className="mt-5 font-display text-5xl md:text-7xl text-primary-foreground text-balance">
                Your Algeria
                <br />
                <span className="italic font-light text-secondary">
                  starts with a conversation.
                </span>
              </h2>
              <p className="mt-6 text-primary-foreground/80 max-w-xl text-lg">
                Tell us how you travel. We'll design a private journey around
                your dates, your tempo and the regions that move you most.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-accent text-accent-foreground pl-7 pr-2 py-2 rounded-full font-medium hover:scale-[1.03] transition-transform"
                >
                  Explore Journeys Now
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-primary-foreground text-primary group-hover:-rotate-45 transition-transform">
                    →
                  </span>
                </Link>
                {/* <Link
                  href="/destinations"
                  className="text-primary-foreground/90 hover:text-secondary px-4 py-3 underline-offset-8 hover:underline"
                >
                  Browse all packages
                </Link> */}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
