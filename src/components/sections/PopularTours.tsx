import Link from "next/link";
import Image from "next/image";
import { packages } from "@/data/packages";
import { Star, Clock, Users } from "lucide-react";
import { Reveal } from "../Reveal";

export function PopularTours() {
  const tours = packages.slice(0, 3);
  return (
    <section className="py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                Most popular tours
              </span>
              <h2 className="mt-5 font-display text-5xl md:text-6xl text-balance">
                Journeys our travelers
                <br />
                <span className="italic font-light">come back for.</span>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="text-primary hover:text-accent transition-colors story-link"
            >
              View all packages →
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {tours.map((t, i) => (
            <Link
              key={t.slug}
              href={`/destinations/${t.slug}`}
              className="group  hover-lift bg-background rounded-3xl overflow-hidden border border-border"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="img-zoom relative aspect-4/5">
                <Image
                  src={t.cover.src}
                  alt={t.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 453px"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-primary text-xs px-3 py-1.5 rounded-full font-medium">
                  {t.region}
                </span>
                <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 font-medium">
                  <Star size={12} fill="currentColor" /> {t.rating}
                </span>
                <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
                  <h3 className="font-display text-2xl text-primary-foreground">
                    {t.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {t.tagline}
                </p>
                <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} /> {t.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={14} /> {t.groupSize}
                  </span>
                </div>
                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="font-display text-2xl text-primary">
                      {t.price.toLocaleString()} DA
                    </p>
                  </div>
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground group-hover:bg-accent group-hover:-rotate-45 transition-all">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
