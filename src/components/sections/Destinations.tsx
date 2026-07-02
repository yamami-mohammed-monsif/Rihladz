"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { packages } from "@/data/packages";
import Link from "next/link";
import { Reveal } from "../Reveal";

const ANIM_MS = 700;
const SWIPE_THRESHOLD = 50;

export function Destinations() {
  const items = packages;
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [leaving, setLeaving] = useState<{
    idx: number;
    dir: 1 | -1;
    key: number;
  } | null>(null);
  const [enterKey, setEnterKey] = useState(0);
  const lockRef = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const active = items[i];

  const change = (target: number, delta: 1 | -1) => {
    if (lockRef.current || target === i) return;
    lockRef.current = true;
    setLeaving({ idx: i, dir: delta, key: enterKey });
    setDir(delta);
    setI(target);
    setEnterKey((k) => k + 1);
    window.setTimeout(() => {
      setLeaving(null);
      lockRef.current = false;
    }, ANIM_MS);
  };

  const prev = () => change((i - 1 + items.length) % items.length, -1);
  const next = () => change((i + 1) % items.length, 1);
  const jumpTo = (target: number) => {
    if (target === i) return;
    const forward =
      (target - i + items.length) % items.length <= items.length / 2;
    change(target, forward ? 1 : -1);
  };

  const thumbsLeft = [
    items[(i + items.length - 2) % items.length],
    items[(i + items.length - 1) % items.length],
  ];
  const thumbsRight = [
    items[(i + 1) % items.length],
    items[(i + 2) % items.length],
  ];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <section className="py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left side: title + left thumbs */}
          <div className="lg:col-span-3 space-y-12">
            <Reveal>
              <div>
                <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                  Destinations
                </span>
                <h2 className="mt-5 font-display text-5xl text-balance">
                  Destinations
                  <br />
                  <span className="italic font-light">you'll love</span>
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="hidden lg:grid grid-cols-2 gap-3">
                {thumbsLeft.map((t, idx) => {
                  const realIdx = (i + items.length - (2 - idx)) % items.length;
                  return (
                    <button
                      key={t.slug + idx}
                      onClick={() => jumpTo(realIdx)}
                      className="group text-left cursor-pointer"
                    >
                      <div className="img-zoom rounded-2xl overflow-hidden aspect-4/5">
                        <img
                          src={t.cover.src}
                          alt={t.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        0{realIdx + 1}{" "}
                        <span className="ml-2 text-primary group-hover:text-accent transition-colors">
                          {t.region}
                        </span>
                      </p>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Center: big oval card */}
          <div className="lg:col-span-6 select-none">
            <Reveal>
              <div
                className="relative bg-secondary/50 rounded-[2.5rem] p-6 md:p-10 overflow-hidden touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
                <div className="relative">
                  {leaving && (
                    <div
                      key={`leave-${leaving.key}`}
                      className="absolute inset-0 will-change-transform"
                      style={{
                        animation: `destSlideOut ${ANIM_MS}ms cubic-bezier(.22,.8,.2,1) both`,
                        ["--dest-dir" as any]: leaving.dir,
                      }}
                    >
                      <div className="flex flex-wrap gap-2 mb-6">
                        {items[leaving.idx].tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-background/80 backdrop-blur text-primary text-xs px-3 py-1.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        className="relative mx-auto rounded-[50%] overflow-hidden shadow-[0_20px_80px_-20px_rgba(10,37,64,0.45)]"
                        style={{ aspectRatio: "4/5", maxWidth: 480 }}
                      >
                        <img
                          src={items[leaving.idx].cover.src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-8 flex items-end justify-between gap-4">
                        <h3 className="font-display text-3xl md:text-4xl text-primary">
                          {items[leaving.idx].title}
                        </h3>
                        <span className="hidden md:inline-flex shrink-0 items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm">
                          Explore →
                        </span>
                      </div>
                    </div>
                  )}
                  <div
                    key={`enter-${enterKey}`}
                    className="will-change-transform"
                    style={{
                      animation: `destSlideIn ${ANIM_MS}ms cubic-bezier(.22,.8,.2,1) both`,
                      ["--dest-dir" as any]: dir,
                    }}
                  >
                    <div className="flex flex-wrap gap-2 mb-6">
                      {active.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-background/80 backdrop-blur text-primary text-xs px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className="relative mx-auto rounded-[50%] overflow-hidden img-zoom shadow-[0_20px_80px_-20px_rgba(10,37,64,0.45)]"
                      style={{ aspectRatio: "4/5", maxWidth: 480 }}
                    >
                      <img
                        src={active.cover.src}
                        alt={active.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-8 flex items-end justify-between gap-4">
                      <h3 className="font-display text-3xl md:text-4xl text-primary">
                        {active.title}
                      </h3>
                      <Link
                        href={`/destinations/${active.slug}`}
                        className="hidden md:inline-flex shrink-0 items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm hover:bg-accent transition-colors"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: controls + right thumbs */}
          <div className="lg:col-span-3 space-y-12">
            <Reveal>
              <div className="flex lg:justify-start justify-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="grid place-items-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors cursor-pointer"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="grid place-items-center w-12 h-12 rounded-full bg-background border border-border text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors cursor-pointer"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </Reveal>
            <Reveal>
              <div className="hidden lg:grid grid-cols-2 gap-3">
                {thumbsRight.map((t, idx) => {
                  const realIdx = (i + idx + 1) % items.length;
                  return (
                    <button
                      key={t.slug + idx}
                      onClick={() => jumpTo(realIdx)}
                      className="group text-left cursor-pointer"
                    >
                      <div className="img-zoom rounded-2xl overflow-hidden aspect-4/5">
                        <img
                          src={t.cover.src}
                          alt={t.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        0{realIdx + 1}{" "}
                        <span className="ml-2 text-primary group-hover:text-accent transition-colors">
                          {t.region}
                        </span>
                      </p>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
