import { cn } from "@/lib/utils";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function FormRoot({ className, ...props }: any, ref: any) {
  return (
    <form
      ref={ref}
      className={cn("grid w-full items-center gap-4", className)}
      {...props}
    />
  );
}

FormRoot.Input = Input;
FormRoot.Label = Label;
FormRoot.Button = Button;
FormRoot.Select = Select;
FormRoot.SelectTrigger = SelectTrigger;
FormRoot.SelectContent = SelectContent;
FormRoot.SelectItem = SelectItem;
FormRoot.SelectValue = SelectValue;
FormRoot.FormItem = FormItem;
FormRoot.FormLabel = FormLabel;
FormRoot.FormControl = FormControl;
FormRoot.FormDescription = FormDescription;
FormRoot.FormMessage = FormMessage;
FormRoot.FormField = FormField;

export default FormRoot;
