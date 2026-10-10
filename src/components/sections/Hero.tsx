import hero from "@/public/assets/hero-sahara.webp";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin, Users } from "lucide-react";

const proofPoints = [
  { icon: Award, value: "12+", label: "years of experience" },
  { icon: Users, value: "3.4k", label: "travelers welcomed" },
  { icon: MapPin, value: "48", label: "wilayas covered" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={hero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-entrance-bg object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/25" />
        <div className="absolute inset-0 bg-linear-to-b from-primary/55 via-primary/25 to-primary/90" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/30 via-transparent to-primary/15" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-9 pt-28 text-center sm:px-8 md:pb-11 lg:px-10">
        <p className="hero-entrance-badge inline-flex items-center gap-2 rounded-full border border-white/30 bg-primary/40 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          Algeria · Locally led journeys
        </p>

        <h1 className="hero-entrance-title mt-6 max-w-5xl font-display text-[clamp(3.15rem,7.2vw,6.7rem)] leading-[0.91] tracking-[-0.045em] text-balance text-white drop-shadow-[0_3px_28px_rgba(4,16,28,0.38)]">
          Where the Sahara
          <br />
          <span className="font-light italic text-secondary">
            writes the sky
          </span>
        </h1>

        <p className="hero-entrance-sub mt-6 max-w-2xl text-base leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(4,16,28,0.45)] sm:text-lg">
          Locally led journeys through Algeria’s Sahara, coast and heritage
          cities—thoughtfully paced, with permits and planning handled for you.
        </p>

        <div className="hero-entrance-cta mt-8 flex flex-col items-center gap-3">
          <Link
            href="#popular-tours"
            className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-accent pl-7 pr-2 text-base font-semibold text-accent-foreground shadow-[0_12px_32px_rgba(11,27,42,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-accent/95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
          >
            Explore journeys
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={18} aria-hidden="true" />
            </span>
          </Link>
          <p className="text-sm font-medium text-white/90 drop-shadow-[0_2px_10px_rgba(4,16,28,0.45)]">
            Compare itineraries, trip lengths and starting prices
          </p>
        </div>

        <div className="hero-entrance-trust mt-8 w-full max-w-4xl rounded-2xl border border-white/25 bg-primary/75 px-4 py-4 shadow-[0_22px_70px_rgba(5,17,29,0.32)] backdrop-blur-xl sm:px-7 sm:py-5">
          <dl
            aria-label="Rihla DZ at a glance"
            className="grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/20"
          >
            {proofPoints.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`flex items-center justify-center gap-3 px-2 text-left sm:px-4 md:px-6 ${index === 2 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/20 text-secondary sm:h-11 sm:w-11">
                  <Icon size={19} strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="flex flex-col">
                  <dt className="order-2 mt-1 text-xs leading-tight text-white/85 sm:text-sm">
                    {label}
                  </dt>
                  <dd className="order-1 font-display text-2xl leading-none text-white sm:text-[1.75rem]">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
