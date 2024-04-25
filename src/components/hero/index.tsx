import React, { use } from "react";
import Image from "next/image";
import Technologies from "./technologies";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <HeroHighlight className="container h-screen  py-16">
      <div className="flex items-center h-[90%] justify-between">
        <div className="basis-1/2">
          <h1 className="text-3xl md:text-7xl font-bold text-center">
            WebDrei Solutions
          </h1>
          <p className="font-extralight text-base md:text-4xl  py-12">
            Focus on problem-solving strategies before{" "}
            <Highlight>technology selection</Highlight>
          </p>

          <Button size="lg">Contact Us</Button>
        </div>
        <div className="flex justify-end h-full basis-1/2  items-end relative">
          <div className="bg-gradient-to-r from-purple-500 w-9/12 h-[66%] to-primary   rounded-3xl -skew-x-12"></div>
          <Image
            className="absolute bottom-0"
            quality={100}
            src={"/hero.png"}
            alt="hero"
            width={570}
            height={801}
          />
        </div>
      </div>
      <div className="mt-6">
        <Technologies />
      </div>
    </HeroHighlight>
  );
}
