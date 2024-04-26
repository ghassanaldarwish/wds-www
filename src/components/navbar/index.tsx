import React from "react";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";
import ModeToggle from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="h-[60px] z-30 backdrop-blur-sm fixed top-0 w-screen flex items-center bg-background/50 border-b">
      <div className="container flex justify-between">
        <Link href="/" className="text-3xl font-bold">
          WebDrei
        </Link>
        <div className=" flex gap-8">
          <DesktopNavbar />
          <MobileNavbar />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
