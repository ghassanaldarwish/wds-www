"use client";

import React, {
  ReactElement,
  ReactNode,
  isValidElement,
  cloneElement,
  useState,
  FC,
} from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";

// this component for test

interface ChildProps {
  defaultValue?: string;
  onDoubleClick?: () => void;
  readOnly?: boolean;
  onBlur?: (e: React.FocusEvent) => Promise<void>;
}

interface Props {
  children: ReactNode;
}

// You may need to extend the ChildProps if the children expect specific props
type ChildWithProps = ReactElement<ChildProps>;

const Controller: FC<Props> = ({ children }: Props): ReactElement => {
  const [searchParams]: any = useSearchParams() as ReadonlyURLSearchParams;
  const pinId = searchParams.get("pinId");

  const { data } = { data: { payload: { title: "test" } } };
  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);

  const onSave = async (e: React.FocusEvent): Promise<void> => {
    // Implementation of save logic here
  };

  return (
    <AnimatePresence>
      {React.Children.map(children, (child: ReactNode) => {
        if (isValidElement(child)) {
          // Cast the child to have the correct props
          const childWithProps = child as ChildWithProps;
          return cloneElement(childWithProps, {
            defaultValue: data?.payload?.title,
            onDoubleClick: () => setIsReadOnly(false),
            readOnly: isReadOnly, // use isReadOnly state
            onBlur: onSave,
          });
        }
        return child;
      })}
    </AnimatePresence>
  );
};

export default Controller;
