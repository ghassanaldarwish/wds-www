import React from "react";
import { NavbarRoot } from "@/components/index";

export default async function Navbar() {
  return (
    <NavbarRoot>
      <NavbarRoot.Header>
        <NavbarRoot.Logo>Workspaces</NavbarRoot.Logo>
      </NavbarRoot.Header>
      <NavbarRoot.Footer>
        <NavbarRoot.ThemeSwitcher />
        <NavbarRoot.AccountSettingsSheet />
      </NavbarRoot.Footer>
    </NavbarRoot>
  );
}
