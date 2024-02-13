import { cn } from "@/lib/utils";

const NavbarSection = ({ className, ...props }: any) => {
  return (
    <div
      className={cn("flex gap-6 last:gap-2 items-center", className)}
      {...props}
    />
  );
};

export default NavbarSection;
