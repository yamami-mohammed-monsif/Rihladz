"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname(); // ← Get current URL
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 260);
    } else {
      setOpen(true);
    }
  };

  const handleLinkClick = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 260);
  };

  const showMenu = open || closing;
  const menuAnimClass = closing ? "mobile-menu-exit" : "mobile-menu-enter";
  const headerUsesSolidSurface = scrolled || pathname !== "/";

  // Helper to check if link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        headerUsesSolidSurface
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className={`grid place-items-center w-9 h-9 rounded-full font-display text-lg ${headerUsesSolidSurface ? "bg-primary text-primary-foreground" : "bg-primary-foreground text-primary"}`}>
            R
          </span>
          <span className={`font-display text-xl ${headerUsesSolidSurface ? "text-primary" : "text-primary-foreground"}`}>
            Rihla <span className="text-accent">DZ</span>
          </span>
        </Link>

        <nav className={`hidden md:flex items-center gap-1 rounded-full p-1.5 backdrop-blur-md ${headerUsesSolidSurface ? "bg-primary/5 border border-border" : "bg-white/10 border border-white/30"}`}>
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active
                    ? headerUsesSolidSurface
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-foreground text-primary"
                    : headerUsesSolidSurface
                      ? "text-primary hover:bg-primary/10"
                      : "text-primary-foreground hover:bg-white/15"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#popular-tours"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-all hover:scale-[1.03]"
        >
          Explore journeys
          <span className="grid place-items-center w-7 h-7 rounded-full bg-primary-foreground/20">
            →
          </span>
        </Link>

        <button
          aria-label="Menu"
          className={`md:hidden grid place-items-center w-11 h-11 rounded-full transition-transform active:scale-95 ${headerUsesSolidSurface ? "bg-primary text-primary-foreground" : "bg-primary-foreground text-primary"}`}
          onClick={handleToggle}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {showMenu && (
        <div
          ref={menuRef}
          className={`md:hidden bg-background border-t border-border ${menuAnimClass}`}
        >
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l, i) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={handleLinkClick}
                  className={`px-4 py-3 rounded-xl font-medium ${
                    active
                      ? "bg-primary text-primary-foreground" // Active styles
                      : "text-primary hover:bg-primary/5" // Inactive styles
                  } mobile-link-${i + 1}`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/#popular-tours"
              onClick={handleLinkClick}
              className="mt-2 text-center bg-accent text-accent-foreground px-4 py-3 rounded-xl font-medium mobile-link-5"
            >
              Explore journeys
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
