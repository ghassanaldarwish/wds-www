import Benefits from "@/components/benefits";
import { Separator } from "@/components/ui/separator";

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
      <Separator className="my-6  sm:mx-auto  lg:my-8 container" />
      <Benefits />
      <Separator className="my-6  sm:mx-auto  lg:my-8 container" />
      <CiCd />
      <Separator className="my-6  sm:mx-auto  lg:my-8 container" />
    </main>
  );
}
