import React from "react";
import { Separator } from "@/components/ui/separator";
import { Server, Layers, Figma, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import StructureImage from "./structure-image";

export default function Feature() {
  const t = useTranslations("Index");
  return (
    <section className="min-h-screen w-screen my-6 ">
      <div className="container flex gap-24 py-24">
        <div className="hidden  lg:flex items-center basis-1/2">
          <StructureImage />
        </div>
        <div className="w-full xl:basis-1/2  z-20 bg-background">
          <h2 className="mb-6 text-xl md:text-3xl  font-bold">
            {t("feature.title")}
          </h2>
          <p className="">{t("feature.description")}</p>

          <Separator className="my-8" />

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="h-8 flex items-center">
                {" "}
                <Server />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-lg md:text-2xl font-bold">
                  {t("feature.items.item-1.title")}
                </h3>
                <p>{t("feature.items.item-1.description")}</p>
                <div className="flex gap-2 hover:underline">
                  <Link href="/infrastructure-and-configuration">
                    {t("feature.items.item-1.link-title")}
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
                  {t("feature.items.item-2.title")}
                </h3>
                <p>{t("feature.items.item-2.description")}</p>
                <div className="flex gap-2 hover:underline">
                  <Link href="/infrastructure-and-configuration">
                    {t("feature.items.item-2.link-title")}{" "}
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
                <h3 className="text-lg md:text-2xl font-bold">
                  {t("feature.items.item-3.link-title")}
                </h3>
                <p>{t("feature.items.item-3.description")}</p>
                <div className="flex gap-2 hover:underline">
                  <Link href="/infrastructure-and-configuration">
                    {t("feature.items.item-3.link-title")}
                  </Link>
                  <ChevronRight />
                </div>
              </div>
            </div>
            <Separator className="my-8" />
            <p>{t("feature.summary")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
