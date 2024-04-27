import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Github from "@/components/technologies/github";
import Gitlab from "@/components/technologies/gitlab";
import Jenkins from "@/components/technologies/jenkins";
import Raspberry from "@/components/technologies/raspberry";

export default function CiCd() {
  return (
    <div className="flex flex-col overflow-hidden relative">
      <div className="w-full h-32 absolute top-12 justify-center gap-12 flex items-center">
        <Github />
        <Raspberry />
        <Gitlab />
        <Jenkins />
      </div>
      <div className="w-full  absolute bottom-12 flex flex-col gap-6 text-center">
        <h4 className="text-lg md:text-2xl font-bold">
          Streamlined Automation Solutions
        </h4>
        <p>
          Unlock the full potential of continuous integration and delivery with
          our tailored automation solutions. Harness the collaborative power of
          GitHub and GitLab to streamline your development workflows. Automate
          your builds, tests, and deployments with Jenkins, the
          industry-standard orchestration tool. Explore the possibilities of a
          lightweight yet powerful HomeLab setup on Raspberry Pi—perfect for
          small-scale experimentation or personal projects. Elevate your
          development process with our cutting-edge tools and optimize your
          delivery pipeline for peak efficiency.
        </p>
      </div>
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
