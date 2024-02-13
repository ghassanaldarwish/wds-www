"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimateButton from "@/components/base/animate/animate-button";

export default function ThemeSwitcher({ className }: any) {
  const { theme, setTheme } = useTheme();

  return (
    <AnimateButton
      className={cn(
        buttonVariants({ size: "icon", variant: "outline" }),
        "flex  gap-1 text-md font-bold justify-center items-center cursor-pointer",
        className
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <SunIcon className="w-[26px] h-[26px]" />
      ) : (
        <MoonIcon className="w-[20px] h-[20px] " />
      )}
    </AnimateButton>
  );
}
