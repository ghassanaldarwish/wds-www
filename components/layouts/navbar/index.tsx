import { cn } from "@/lib/utils";
import NavbarHeader from "./header";
import NavbarFooter from "./footer";
import NavbarLogo from "./logo";

const NavbarRoot: any = ({ className, children }: any) => {
  return (
    <nav
      className={cn(
        "rounded-none bg-secondary border-b  fixed w-screen top-0 left-0 z-10 h-[50px]",
        className
      )}
    >
      <div
        className={cn(
          " flex items-center justify-between h-full w-full px-2",
          className
        )}
      >
        {children}
      </div>
    </nav>
  );
};

NavbarRoot.Header = NavbarHeader;
NavbarRoot.Footer = NavbarFooter;
NavbarRoot.Logo = NavbarLogo;
export default NavbarRoot;
