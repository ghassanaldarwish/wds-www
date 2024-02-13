import React from "react";
import { NavbarRoot } from "@/components/index";

export default async function Navbar() {
  return (
    <NavbarRoot>
      <NavbarRoot.Header>
        <NavbarRoot.Back className="static" />
        <NavbarRoot.Logo>Create Workspace</NavbarRoot.Logo>
      </NavbarRoot.Header>
      <NavbarRoot.Footer>
        <NavbarRoot.ThemeSwitcher />
        <NavbarRoot.AccountSettingsSheet />
      </NavbarRoot.Footer>
    </NavbarRoot>
  );
}
