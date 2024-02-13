import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
const AvatarContainer = ({
  className,
  src,
  fallback = "",
}: {
  className?: string;
  src: string;
  fallback: string;
}) => {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage className="w-full h-full" src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarContainer;
