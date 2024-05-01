import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Github from "@/components/technologies/github";
import Gitlab from "@/components/technologies/gitlab";
import Jenkins from "@/components/technologies/jenkins";
import Raspberry from "@/components/technologies/raspberry";
import { useTranslations } from "next-intl";

export default function CiCd() {
  const t = useTranslations("Index");

  return (
    <section className="container">
      <div className="flex flex-col overflow-hidden relative">
        <div className="w-full h-32 md:absolute top-12 justify-center gap-12 flex items-center">
          <Github />
          <Raspberry />
          <Gitlab />
          <Jenkins />
        </div>
        <div className="w-full  md:absolute bottom-12 flex flex-col gap-6 text-center">
          <h4 className="text-lg md:text-2xl font-bold">{t("cicd.title")}</h4>
          <p>{t("cicd.description")}</p>
        </div>
        <div className="hidden md:block">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  {t("cicd.sub.title")}
                  <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    {t("cicd.sub.highlight")}
                  </span>
                </h1>
              </>
            }
          >
            <Image
              quality={80}
              src={`/automation.webp`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-center"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
