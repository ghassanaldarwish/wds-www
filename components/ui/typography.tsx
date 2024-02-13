/* eslint-disable react/display-name */
import * as React from "react";

import { cn } from "../../lib/utils";

const H1 = React.forwardRef<HTMLHeadingElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

const H2 = React.forwardRef<HTMLHeadingElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

const H3 = React.forwardRef<HTMLHeadingElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

const H4 = React.forwardRef<HTMLHeadingElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

type Styles = {
  [key: string]: string;
  default: string;
  lead: string;
  large: string;
  small: string;
  muted: string;
};
const Paragraph = React.forwardRef<HTMLParagraphElement, any>(
  ({ className, variant = "default", ...props }, ref) => {
    const styles: Styles = {
      default: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    };

    return (
      <p className={cn(styles[variant], className)} ref={ref} {...props} />
    );
  }
);

const Blockquote = React.forwardRef<HTMLBodyElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <blockquote
        className={cn("mt-6 border-l-2 pl-6 italic", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

const Table: any = React.forwardRef<HTMLTableElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <table
        className={cn("my-6 w-full overflow-y-auto", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

const Thead = ({ className, ...props }: any) => {
  return <thead className={cn(className)} {...props} />;
};

const Tbody = ({ className, ...props }: any) => {
  return <tbody className={cn(className)} {...props} />;
};

const Tr = ({ className, ...props }: any) => {
  return (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  );
};

const Td = ({ className, ...props }: any) => {
  return (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  );
};

const Th = ({ className, ...props }: any) => {
  return (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  );
};

const Ul: any = React.forwardRef<HTMLElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

const InlineCode: any = React.forwardRef<HTMLElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <code
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

const Li: any = React.forwardRef<HTMLElement, any>(
  ({ className, ...props }: any) => {
    return <li className={cn(className)} {...props} />;
  }
);

Table.Thead = Thead;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
Table.Tbody = Tbody;
Ul.Li = Li;

export { H1, H2, H3, H4, Paragraph, Blockquote, Table, Ul, InlineCode };
