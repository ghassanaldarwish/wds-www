import Benefits from "@/components/benefits";
import CiCd from "@/components/ci-cd";
import Feature from "@/components/feature";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Feature />
      <Benefits />
      <CiCd />
    </main>
  );
}
