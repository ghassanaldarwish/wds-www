import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const NavbarLogo = ({ className, children }: any) => {
  return (
    <div className={cn(" font-bold text-2xl flex gap-2", className)}>
      <Icons.logo className="w-[26px] h-[26px]" />
      {children}
    </div>
  );
};

export default NavbarLogo;
