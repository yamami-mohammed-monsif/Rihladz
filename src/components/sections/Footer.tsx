import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-accent font-display text-xl">
                R
              </span>
              <span className="font-display text-2xl">Rihla DZ</span>
            </div>
            <p className="mt-6 max-w-md text-primary-foreground/70 leading-relaxed">
              An Algerian-owned travel house designing slow, locally-rooted
              journeys across the Sahara, the Atlas, and the Mediterranean
              coast.
            </p>
            <div className="mt-8 flex gap-3">
              {[FaInstagram, FaFacebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-11 h-11 rounded-full border border-primary-foreground/15 hover:bg-accent hover:border-accent transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-accent transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Trips
            </h4>
            <ul className="space-y-2.5">
              <li>Sahara</li>
              <li>Coastline</li>
              <li>Heritage</li>
              <li>Custom</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Reach us
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-accent" /> 14 Rue
                Didouche Mourad, Algiers 16000
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-accent" /> +213 21 64 22
                18
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-accent" />{" "}
                hello@rihla-dz.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row gap-4 justify-between text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Rihla DZ. Crafted in Algiers.</p>
          <p>Privacy · Terms · Press</p>
        </div>
      </div>
    </footer>
  );
}
