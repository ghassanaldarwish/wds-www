"use client";

import Link from "next/link";

const CreateNewWorkspaceLink = ({ children, className }: any) => {
  return (
    <Link className={className} href={`/create/workspace`}>
      {children}
    </Link>
  );
};

export default CreateNewWorkspaceLink;
