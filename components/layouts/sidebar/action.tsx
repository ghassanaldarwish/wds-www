import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Action: any = ({ className, children }: any) => {
  return (
    <div
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-full justify-start flex gap-4 pl-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Action;
