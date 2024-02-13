"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const CreateNewPinLink = ({ children, className }: any) => {
  const { workspace }: any = useParams();

  return (
    <Link className={className} href={`/workspace/${workspace}/create/pin`}>
      {children}
    </Link>
  );
};

export default CreateNewPinLink;
