import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SidebarContent: any = ({ className, children }: any) => {
  return (
    <div
      className={cn("w-full flex flex-col gap-4  px-4  pt-3 pb-2", className)}
    >
      {children}
    </div>
  );
};

const Group = ({ className, children, title }: any) => {
  return (
    <div className={cn("w-full font-bold ", className)}>
      <h4
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start flex gap-4 pl-0 font-bold",
          className
        )}
      >
        {title}
      </h4>
      {children}
    </div>
  );
};
SidebarContent.Group = Group;
export default SidebarContent;
