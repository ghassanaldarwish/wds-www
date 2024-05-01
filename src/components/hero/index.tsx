import React from "react";
import Image from "next/image";
import Technologies from "@/components/technologies";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import useTextDirection from "@/hooks/useTextDirection";

export default function Hero() {
  const t = useTranslations("Index");
  const direction = useTextDirection();

  return (
    <HeroHighlight className="container h-screen">
      <div className="flex flex-col lg:flex-row items-center h-[75%] justify-between py-6">
        <div className="basis-1/2 flex flex-col gap-6 lg:gap-10">
          <h1 className="text-3xl md:text-7xl font-bold text-center lg:text-left">
            WebDrei {t("hero.title")}
          </h1>
          <p className="font-extralight text-base md:text-4xl text-center lg:text-left relative">
            {t("hero.description")}
            <Highlight>{t("hero.description-highlight")}</Highlight>
          </p>
          <div
            className={cn("flex justify-center lg:justify-start", {
              "lg:justify-center": direction === "rtl",
            })}
          >
            <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                })
              )}
              href="/contact"
            >
              {t("hero.contact.button")}
            </Link>
          </div>
        </div>
        <div className="flex justify-end h-full basis-1/2  items-end relative">
          <div className="bg-gradient-to-r hidden lg:block from-primary/70 w-9/12 h-[66%] to-purple-300 rounded-3xl -skew-x-12"></div>
          <Image
            priority
            className="static lg:absolute bottom-0 h-full w-full object-contain"
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
