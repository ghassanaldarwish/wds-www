import { AppsRoot } from "@/components/index";
import React from "react";

export default async function Apps() {
  return (
    <AppsRoot>
      <AppsRoot.Header>
        <AppsRoot.LibraryLink />
        <AppsRoot.StudioLink />
        <AppsRoot.MessagesLink />
        <AppsRoot.VscodeLink />
        <AppsRoot.MeetingLink />
      </AppsRoot.Header>
      <AppsRoot.Footer>
        <AppsRoot.NotificationsSheet />
        <AppsRoot.WorkspaceSettingsSheet />
        <AppsRoot.InfoSheet />
      </AppsRoot.Footer>
    </AppsRoot>
  );
}
