import React from "react";
import { Rocket } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/navigation";
import footerData from "./data";
import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-background ">
      <div className="container py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Rocket className="w-8 h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WebDrei
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
            {footerData.map((item: any, index: number) => (
              <li key={index}>
                <Link href={item.href} className="hover:underline me-4 md:me-6">
                  {t(`${item.name}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6  sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © 2024{" "}
          <a href="/" className="hover:underline">
            WebDrei
          </a>
        </span>
      </div>
    </footer>
  );
}
