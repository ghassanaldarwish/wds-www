"use client";
import { Link } from "@/navigation";
import navbarData from "./data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-4">
            {navbarData.map((item: any) => (
              <Link
                onClick={() => setIsOpen(false)}
                className="hover:underline"
                key={item.name}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
