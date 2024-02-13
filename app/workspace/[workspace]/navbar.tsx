import { NavbarRoot } from "@/components/index";
import React from "react";

export default async function Navbar() {
  return (
    <NavbarRoot>
      <NavbarRoot.Header>
        <NavbarRoot.SidebarMenuToggle />
        <NavbarRoot.Logo>Library</NavbarRoot.Logo>
      </NavbarRoot.Header>
      <NavbarRoot.Footer>
        <NavbarRoot.WorkspacesCombobox />
        <NavbarRoot.CreateCombobox />
        <NavbarRoot.LiveCombobox />
        <NavbarRoot.FullscreenViewToggle />
        <NavbarRoot.TeamButton />

        <NavbarRoot.ThemeSwitcher />
        <NavbarRoot.AccountSettingsSheet />
      </NavbarRoot.Footer>
    </NavbarRoot>
  );
}
