"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const SectionLoader = () => (
  <div className="min-h-50 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-60"></div>
  </div>
);

const Destinations = dynamic(
  () =>
    import("../src/components/sections/Destinations").then(
      (mod) => mod.Destinations,
    ),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const PopularTours = dynamic(
  () =>
    import("../src/components/sections/PopularTours").then(
      (mod) => mod.PopularTours,
    ),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const WhyUs = dynamic(
  () => import("../src/components/sections/WhyUs").then((mod) => mod.WhyUs),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const Testimonials = dynamic(
  () =>
    import("../src/components/sections/Testimonials").then(
      (mod) => mod.Testimonials,
    ),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const FAQs = dynamic(
  () => import("../src/components/sections/FAQs").then((mod) => mod.FAQs),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const CTA = dynamic(
  () => import("../src/components/sections/CTA").then((mod) => mod.CTA),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const Footer = dynamic(
  () => import("../src/components/sections/Footer").then((mod) => mod.Footer),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const ClientSections = () => {
  return (
    <Suspense fallback={<SectionLoader />}>
      <PopularTours />
      <WhyUs />
      <Destinations />
      <Testimonials />
      <CTA />
      <FAQs />
      <Footer />
    </Suspense>
  );
};

export default ClientSections;
