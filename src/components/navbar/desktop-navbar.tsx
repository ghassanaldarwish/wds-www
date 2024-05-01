import { Link } from "@/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import navbarData from "./data";
import { useTranslations } from "next-intl";

const DesktopNavbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className=" items-center gap-8 hidden lg:flex">
      {navbarData.map((item: any) =>
        item?.type === "button" ? (
          <Link
            key={item.name}
            className={cn(buttonVariants({ variant: item.variant }))}
            href={item.href}
          >
            {t(`${item.name}`)}
          </Link>
        ) : (
          <Link key={item.name} className="hover:underline" href={item.href}>
            {t(`${item.name}`)}
          </Link>
        )
      )}
    </div>
  );
};

export default DesktopNavbar;
