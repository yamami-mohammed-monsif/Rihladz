"use client";

import hero from "@/public/assets/hero-sahara.webp";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, MapPin, Smile, Award } from "lucide-react";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-svh overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${y * 0.3}px) scale(1.06)` }}
      >
        <Image
          src={hero}
          alt="Algerian Sahara at sunset"
          priority
          sizes="100vw"
          className="hero-entrance-bg w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/40 via-primary/20 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-20 relative">
        {/* Badge */}
        {/* <div className="flex justify-center">
          <span className="hero-entrance-badge inline-flex items-center gap-2 bg-background/60 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-sm text-primary">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Discover the heart of Algeria
          </span>
        </div> */}

        {/* Title */}
        <h1 className="hero-entrance-title mt-8 text-center font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] text-primary-foreground drop-shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
          Where the Sahara
          <br />
          <span className="italic font-light text-secondary">
            writes the sky
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-entrance-sub mt-6 max-w-xl mx-auto text-center text-primary-foreground/85 text-lg">
          Rihla DZ designs slow, locally-rooted journeys across Algeria — from
          the dunes of Tassili to the white walls of Algiers.
        </p>

        {/* CTAs */}
        <div className="hero-entrance-cta mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground pl-7 pr-2 py-2 rounded-full font-medium hover:scale-[1.03] transition-transform"
          >
            Plan my journey
            <span className="grid place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground group-hover:-rotate-45 transition-transform">
              →
            </span>
          </Link>
          <Link
            href="/about"
            className="text-primary-foreground hover:text-accent transition-colors px-4 py-3 underline-offset-8 hover:underline"
          >
            How we travel
          </Link>
        </div>

        {/* Trust signals bar */}
        <div className="hero-entrance-trust mt-16 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-0 md:divide-x md:divide-primary-foreground/20 bg-primary-foreground/6 backdrop-blur-md border border-primary-foreground/10 rounded-2xl px-8 py-6">
            {[
              { icon: Award, value: "12+", label: "Years Experience" },
              { icon: Calendar, value: "340+", label: "Trips Organized" },
              { icon: Smile, value: "3,400+", label: "Happy Travelers" },
              { icon: MapPin, value: "58", label: "Wilayas Covered" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center gap-3 px-4 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i === 3 ? "md:pr-0" : ""}`}
                style={{ animationDelay: `${1.0 + i * 0.12}s` }}
              >
                <div className="grid place-items-center w-10 h-10 rounded-full bg-accent/15 text-accent shrink-0">
                  <stat.icon size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-display text-xl md:text-2xl text-primary-foreground leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs text-primary-foreground/60 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
