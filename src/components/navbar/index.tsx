import React from "react";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";

export default function Navbar() {
  return (
    <nav className="h-[60px] z-30 fixed top-0 w-screen flex items-center bg-background border-b">
      <div className="container flex justify-between">
        <Link href="/" className="text-3xl font-bold">
          WebDrei
        </Link>
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </nav>
  );
}
