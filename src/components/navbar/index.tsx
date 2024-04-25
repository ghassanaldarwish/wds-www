import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="h-[60px] z-30 fixed top-0 w-screen flex items-center bg-background border-b">
      <div className="container flex justify-between">
        <div className="text-3xl font-bold">WebDrei</div>
        <div className="flex items-center gap-12">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/">
            Services
          </Link>
          <Link className="hover:underline" href="/">
            About
          </Link>
          <Link className="hover:underline" href="/">
            Contact
          </Link>

          <Link className={cn(buttonVariants({ variant: "outline" }))} href="/">
            Login
          </Link>
          <Link className={cn(buttonVariants())} href="/">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
