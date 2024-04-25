import React from "react";
import Image from "next/image";
import Technologies from "./technologies";

export default function Hero() {
  return (
    <section className="container h-screen  py-16">
      <div className="flex items-center h-[90%] justify-between">
        <div className="basis-1/2">
          <h1 className="text-3xl md:text-7xl font-bold text-center">
            WebDrei Solutions
          </h1>
          <p className="font-extralight text-base md:text-4xl  py-12">
            Focus on problem-solving strategies before technology selection
          </p>
          <div className="flex justify-center">
            <button className="px-4 py-2 w-40 backdrop-blur-sm border bg-primary/10 border-primary/20  mx-auto text-center rounded-full relative mt-4">
              <span>Contact Us</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
            </button>
          </div>
        </div>
        <div className="flex justify-end h-full basis-1/2  items-end relative">
          <div className="bg-gradient-to-r from-primary/50 w-9/12 h-[66%] to-primary   rounded-3xl -skew-x-12"></div>
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
    </section>
  );
}
