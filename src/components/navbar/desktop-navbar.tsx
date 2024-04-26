import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import navbarData from "./data";

const DesktopNavbar = () => {
  return (
    <div className=" items-center gap-8 hidden lg:flex">
      {navbarData.map((item: any) =>
        item?.type === "button" ? (
          <Link
            key={item.name}
            className={cn(buttonVariants({ variant: item.variant }))}
            href={item.href}
          >
            {item.name}
          </Link>
        ) : (
          <Link key={item.name} className="hover:underline" href={item.href}>
            {item.name}
          </Link>
        )
      )}
    </div>
  );
};

export default DesktopNavbar;
