import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function CiCd() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              The power of automation and
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Pipelines
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
  );
}
