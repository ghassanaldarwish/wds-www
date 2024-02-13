import CreateNewPinLink from "@/components/features/buttons/create-new-pin-link";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function PinsToolbar() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="">
        <Input placeholder="Find a pin..." />
      </div>
      <div className="flex flex-row-reverse">
        <CreateNewPinLink className={cn(buttonVariants())}>
          New Pin
        </CreateNewPinLink>
      </div>
    </div>
  );
}
