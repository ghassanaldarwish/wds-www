import { SidebarRoot } from "@/components/index";
import React from "react";

export default async function Sidebar() {
  const av =
    "https://prod.cloud.rockstargames.com/crews/sc/3733/7929410/publish/emblem/emblem_256.png";
  return (
    <SidebarRoot>
      <SidebarRoot.Header>
        <SidebarRoot.AvatarComponent src={av} fallback="AV" />
        <SidebarRoot.WorkspacesCombobox />
      </SidebarRoot.Header>
      <SidebarRoot.Title>
        <SidebarRoot.Icons.messagesSquare />
        Library
      </SidebarRoot.Title>

      <SidebarRoot.Content>
        <SidebarRoot.Action>
          <SidebarRoot.Icons.folder />
          Javascript
        </SidebarRoot.Action>

        <SidebarRoot.Action>
          <SidebarRoot.Icons.folder />
          React
        </SidebarRoot.Action>
      </SidebarRoot.Content>
    </SidebarRoot>
  );
}
