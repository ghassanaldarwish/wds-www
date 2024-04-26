import React from "react";
import Link from "next/link";

import { Waypoints, ChevronRight } from "lucide-react";
import Patterns from "./patterns";
import Typescript from "@/components/hero/technologies/typescript";

export default function Benefits() {
  return (
    <section className=" py-16 text-center relative   my-6 w-screen ">
      <div className="container flex gap-8  flex-col justify-center">
        <h2 className="text-xl md:text-3xl  font-bold ">
          The most trusted cryptocurrency platform
        </h2>
        <p className="">
          Here are a few reasons why you should choose Flowbite
        </p>
        <div className="flex justify-between gap-16 mt-8">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <Waypoints className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">Event-Driven</h3>
            <p>
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <div className="flex gap-2 hover:underline justify-center">
              <Link href="/infrastructure-and-configuration">Learn More</Link>
              <ChevronRight />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <Typescript className="w-16 h-16 fill-primary" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">Typescript</h3>
            <p>
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <div className="flex gap-2 hover:underline justify-center">
              <Link href="/infrastructure-and-configuration">Learn More</Link>
              <ChevronRight />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <Patterns />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">Software Design</h3>
            <p>
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <div className="flex gap-2 hover:underline justify-center">
              <Link href="/infrastructure-and-configuration">Learn More</Link>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
