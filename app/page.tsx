import { Header } from "@/src/components/sections/Header";
import { Hero } from "@/src/components/sections/Hero";
import { Destinations } from "@/src/components/sections/Destinations";
import { PopularTours } from "@/src/components/sections/PopularTours";
import { WhyUs } from "@/src/components/sections/WhyUs";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { FAQs } from "@/src/components/sections/FAQs";
import { CTA } from "@/src/components/sections/CTA";
import { Footer } from "@/src/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PopularTours />
      <WhyUs />
      <Destinations />
      <Testimonials />
      <CTA />
      <FAQs />
      <Footer />
    </>
  );
}
