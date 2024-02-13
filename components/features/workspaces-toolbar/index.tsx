import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import CreateNewWorkspaceLink from "../buttons/create-new-workspace-link";

export default function WorkspacesToolbar({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 container", className)}>
      <div className="">
        <Input placeholder="Find a workspace..." />
      </div>
      <div className="flex flex-row-reverse">
        <CreateNewWorkspaceLink className={cn(buttonVariants())}>
          New Workspace
        </CreateNewWorkspaceLink>
      </div>
    </div>
  );
}
