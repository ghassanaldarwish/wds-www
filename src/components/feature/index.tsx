import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Server, Layers, Figma, ChevronRight } from "lucide-react";

import Link from "next/link";
import StructureImage from "./structure-image";

export default function Feature() {
  return (
    <section className="min-h-screen w-screen my-6 ">
      <div className="container h-screen flex gap-24 py-8">
        <div className="hidden  md:flex items-center basis-1/2">
          {/* <Image
            className="w-full"
            src={"/feature.webp"}
            alt="Feature"
            width={500}
            height={500}
          /> */}

          <StructureImage />
        </div>
        <div className="w-full md:basis-1/2">
          <h2 className="mb-6 text-xl md:text-3xl  font-bold">
            Solutions for Complex Architecture
          </h2>
          <p className="">
            In the dynamic realm of web development, the complexity of
            architecture demands not just solutions, but visionary
            transformations. Our approach to complex architecture integrates
            state-of-the-art methodologies and technologies designed to scale,
            adapt, and excel.
          </p>

          <Separator className="my-8" />

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="h-8 flex items-center">
                {" "}
                <Server />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-lg md:text-2xl font-bold">
                  Infrastructure and Configuration
                </h3>
                <p>
                  Utilize the power of Terraform and Ansible for robust and
                  scalable infrastructure management. Automate your
                  configurations to ensure consistency across environments,
                  enabling faster deployment and higher reliability.
                </p>
                <div className="flex gap-2 hover:underline">
                  <Link href="/infrastructure-and-configuration">
                    Learn More
                  </Link>
                  <ChevronRight />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-8 flex items-center">
                {" "}
                <Layers />
              </div>

              <div className="flex flex-col gap-4 ">
                <h3 className="text-lg md:text-2xl font-bold align-top">
                  Microservices
                </h3>
                <p>
                  Embrace the microservices architecture with Kubernetes and
                  Docker, ensuring your applications are flexible and resilient.
                  Streamline deployment processes and enhance scalability and
                  isolation, facilitating easier updates and better performance.
                </p>
                <div className="flex gap-2 hover:underline">
                  <Link href="/infrastructure-and-configuration">
                    Learn More
                  </Link>
                  <ChevronRight />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-8 flex items-center">
                {" "}
                <Figma />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-lg md:text-2xl font-bold">UI/UX Design</h3>
                <p>
                  Experience design at its finest with our suite of beautiful,
                  fast, and modern reusable components. Tailored for elegance
                  and functionality, our designs ensure engaging user
                  experiences that are both intuitive and visually appealing.
                </p>
                <div className="flex gap-2 hover:underline">
                  <Link href="/infrastructure-and-configuration">
                    Learn More
                  </Link>
                  <ChevronRight />
                </div>
              </div>
            </div>
            <Separator className="my-8" />
            <p>
              Redefining the possibilities of web architecture. Our solutions
              are not just about meeting needs, they are about exceeding
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
