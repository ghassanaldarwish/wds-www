import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[70px] fixed top-0 w-screen flex items-center bg-background border-b">
      <div className="container flex justify-between">
        <div className="text-3xl font-bold">WebDrei</div>
        <div className="flex items-center gap-12">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/">
            About
          </Link>
          <Link className="hover:underline" href="/">
            Contact
          </Link>
          <Link className="hover:underline" href="/">
            Services
          </Link>
          <div className="flex gap-6">
            <Link className="" href="/">
              Login
            </Link>
            <Link className="" href="/">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
