import { cn } from "@/lib/utils";

const LayoutRoot = ({ className, children }: any) => {
  return (
    <div
      className={cn(
        "flex w-screen fixed left-0 h-[calc(100vh-50px)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LayoutRoot;
