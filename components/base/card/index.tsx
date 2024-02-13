import {
  Card as CardComponent,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import FormRoot from "../form";

function CardRoot({ className, ...props }: any, ref: any) {
  return (
    <CardComponent
      ref={ref}
      className={cn("w-[350px] h-fit", className)}
      {...props}
    />
  );
}

CardRoot.Header = CardHeader;
CardRoot.Avatar = Avatar;
CardRoot.AvatarImage = AvatarImage;
CardRoot.AvatarFallback = AvatarFallback;
CardRoot.Icons = Icons;
CardRoot.Input = Input;
CardRoot.Label = Label;

CardRoot.Button = Button;

CardRoot.Title = CardTitle;
CardRoot.Description = CardDescription;
CardRoot.Content = CardContent;
CardRoot.Footer = CardFooter;
CardRoot.Form = FormRoot;

export default CardRoot;
