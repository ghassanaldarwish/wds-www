"use client";

import { useEffect, useState } from "react";

export default function useInvitationLink() {
  const [invitationLink, setInvitationLink] = useState<string>("");

  useEffect(() => {
    if (!window) return;

    const passcode: string = "7bbKYQvsVkNmVb8Nodel";
    const invitationLink: string = `${window?.location?.origin}/member?${passcode}`;
    setInvitationLink(invitationLink);
  }, []);

  return invitationLink as string;
}
