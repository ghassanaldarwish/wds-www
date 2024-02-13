import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

function AppsHeader({ className, children }: any) {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
}

export default AppsHeader;
