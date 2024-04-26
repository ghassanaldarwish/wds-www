import Benefits from "@/components/benefits";

import Feature from "@/components/feature";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";
const CiCd = dynamic(() => import("@/components/ci-cd"), {
  ssr: false,
});
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
