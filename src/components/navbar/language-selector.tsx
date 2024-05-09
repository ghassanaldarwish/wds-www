"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import useTextDirection from "@/hooks/useTextDirection";
import { cn } from "@/lib/utils";

interface Language {
  name: string;
  icon: string;
}

interface Languages {
  [key: string]: Language;
}

const languages: Languages = {
  en: {
    name: "English",
    icon: "/united-kingdom-icon.png",
  },
  de: {
    name: "Deutsch",
    icon: "/germany-icon.png",
  },
  ar: {
    name: "العربية",
    icon: "/united-arab-emirates-icon.png",
  },
};

export default function LanguageSelector() {
  const direction = useTextDirection();

  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Ensure locale is a valid key of languages or default to 'en'
  const safeLocale =
    typeof locale === "string" && languages.hasOwnProperty(locale)
      ? locale
      : "en";
  const languageInfo: Language = languages[safeLocale]; // Now accessing with a guaranteed string key

  const selectorHandler = (lang: string) => {
    if (lang === safeLocale) return;

    const url = `${pathname}?${searchParams}`.replace(
      /^\/[a-z]{2}/,
      `/${lang}`
    );
    startTransition(() => {
      router.replace(url, { scroll: false });
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn("flex gap-2", {
            "flex-row-reverse": direction === "rtl",
          })}
        >
          {languageInfo.name}

          <ChevronDown className="w-4 h-4" />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => selectorHandler("en")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => selectorHandler("de")}
        >
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => selectorHandler("ar")}
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
