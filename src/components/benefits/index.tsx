import React from "react";
import Link from "next/link";

import { Waypoints, ChevronRight } from "lucide-react";
import Patterns from "./patterns";
import Typescript from "@/components/technologies/typescript";

export default function Benefits() {
  return (
    <section className=" py-16 text-center relative   my-6 w-screen ">
      <div className="container flex gap-8  flex-col justify-center">
        <h2 className="text-xl md:text-3xl  font-bold ">
          Elevate your software responsiveness and scalability
        </h2>
        <p className="">
          Forward-thinking in the realm of software architecture, appealing to
          those who value high-quality and up-to-date development methodologies.
        </p>
        <div className="flex justify-between gap-16 mt-8">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <Waypoints className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">Event-Driven</h3>
            <p>
              Implement Kafka and RabbitMQ for a resilient and scalable
              messaging system. Perfect for applications that require real-time
              data processing and seamless event handling, our solutions empower
              your infrastructure to handle complex workflows with ease.
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
              Enhance your application reliability with TypeScript. By adding
              strong typing to JavaScript, we offer solutions that result in
              cleaner code, easier bug tracking, and more robust applications.
              TypeScript is the keystone for development that prioritizes both
              efficiency and quality.
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
              Adhere to the design patterns and S.O.L.I.D principles for
              software design to create systems that are modular, manageable,
              and adaptable. Our approach ensures that your applications are
              built for longevity and can evolve with your business needs.
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
