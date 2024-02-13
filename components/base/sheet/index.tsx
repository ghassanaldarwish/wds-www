import React from "react";

import {
  Sheet as SheetComponent,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function SheetRoot(props: any) {
  return <SheetComponent {...props} />;
}

function Trigger(props: any) {
  return (
    <SheetTrigger>
      <div {...props} />
    </SheetTrigger>
  );
}

SheetRoot.Trigger = Trigger;
SheetRoot.Content = SheetContent;
SheetRoot.Header = SheetHeader;
SheetRoot.Title = SheetTitle;
SheetRoot.Description = SheetDescription;
SheetRoot.Footer = SheetFooter;
SheetRoot.Close = SheetClose;

export default SheetRoot;
