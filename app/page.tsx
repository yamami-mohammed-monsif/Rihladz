import { Header } from "@/src/components/sections/Header";
import { Hero } from "@/src/components/sections/Hero";
import ClientSections from "./ClientSections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ClientSections />
    </>
  );
}
