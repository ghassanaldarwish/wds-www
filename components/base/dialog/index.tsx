import { Button } from "@/components/ui/button";
import {
  Dialog as DialogComponent,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import FormComponent from "../form";

function DialogRoot({ className, ...props }: any, ref: any) {
  return <DialogComponent ref={ref} className={cn(className)} {...props} />;
}

DialogRoot.Content = DialogContent;
DialogRoot.Description = DialogDescription;
DialogRoot.Footer = DialogFooter;
DialogRoot.Header = DialogHeader;
DialogRoot.Title = DialogTitle;
DialogRoot.Trigger = DialogTrigger;
DialogRoot.Button = Button;
DialogRoot.Input = Input;
DialogRoot.Label = Label;

DialogRoot.Form = FormComponent;

export default DialogRoot;
