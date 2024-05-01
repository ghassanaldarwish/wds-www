import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Waypoints, ChevronRight } from "lucide-react";
import Patterns from "./patterns";
import Typescript from "@/components/technologies/typescript";
import { cn } from "@/lib/utils";
import useTextDirection from "@/hooks/useTextDirection";

export default function Benefits() {
  const t = useTranslations("Index");
  const direction = useTextDirection();

  return (
    <section className=" py-16 text-center relative   my-6 w-screen ">
      <div className="container flex gap-8  flex-col justify-center">
        <h2 className="text-xl md:text-3xl  font-bold ">
          {t("benefits.title")}
        </h2>
        <p className="">{t("benefits.description")}</p>
        <div className="flex justify-between flex-col md:flex-row gap-16 mt-8">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <Waypoints className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">
              {t("benefits.items.item-1.title")}
            </h3>
            <p>{t("benefits.items.item-1.description")}</p>
            <div className="flex gap-2 hover:underline justify-center">
              <Link href="/infrastructure-and-configuration">
                {" "}
                {t("benefits.items.item-1.link-title")}
              </Link>
              <ChevronRight
                className={cn({
                  "transform rotate-180": direction === "rtl",
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <Typescript className="w-16 h-16 fill-primary" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">
              {t("benefits.items.item-2.title")}
            </h3>
            <p>{t("benefits.items.item-2.description")}</p>
            <div className="flex gap-2 hover:underline justify-center">
              <Link href="/infrastructure-and-configuration">
                {" "}
                {t("benefits.items.item-2.link-title")}
              </Link>
              <ChevronRight
                className={cn({
                  "transform rotate-180": direction === "rtl",
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <Patterns />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">
              {t("benefits.items.item-3.title")}
            </h3>
            <p>{t("benefits.items.item-3.description")}</p>
            <div className="flex gap-2 hover:underline justify-center">
              <Link href="/infrastructure-and-configuration">
                {" "}
                {t("benefits.items.item-3.link-title")}
              </Link>
              <ChevronRight
                className={cn({
                  "transform rotate-180": direction === "rtl",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
