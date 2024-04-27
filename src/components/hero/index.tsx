import React from "react";
import Image from "next/image";
import Technologies from "@/components/technologies";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import ContactUs from "./contact-us";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Index");
  return (
    <HeroHighlight className="container min-h-screen h-screen py-16">
      <div className="flex flex-col lg:flex-row items-center h-[90%] justify-between py-6">
        <div className="basis-1/2 flex flex-col gap-6 lg:gap-10">
          <div>{t("title")}</div>
          <h1 className="text-3xl md:text-7xl font-bold text-center lg:text-left">
            WebDrei Solutions
          </h1>
          <p className="font-extralight text-base md:text-4xl text-center lg:text-left relative">
            Focus on problem-solving strategies before
            <Highlight>technology selection</Highlight>
          </p>
          <div className="flex justify-center lg:justify-start">
            {" "}
            <ContactUs />
          </div>
        </div>
        <div className="flex justify-end h-full basis-1/2  items-end relative">
          <div className="bg-gradient-to-r hidden lg:block from-primary/70 w-9/12 h-[66%] to-purple-300 rounded-3xl -skew-x-12"></div>
          <Image
            priority
            className="static lg:absolute bottom-0"
            quality={100}
            src={"/hero.png"}
            alt="hero"
            width={570}
            height={801}
          />
        </div>
      </div>
      <div className="">
        <Technologies />
      </div>
    </HeroHighlight>
  );
}
