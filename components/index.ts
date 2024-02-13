import dynamic from "next/dynamic";
import Link from "next/link";
import LayoutRoot from "./layouts/layout";
import AppsRoot from "./features/apps";
import NavbarRoot from "./layouts/navbar";
import SidebarRoot from "./layouts/sidebar";
import ViewRoot from "./layouts/view";
import PinsToolbar from "./features/pins-toolbar";
import RegisterLink from "./features/buttons/register-link";
import LoginLink from "./features/buttons/login-link";
import CreateCombobox from "./features/combobox/create-combobox";
import AvatarComponent from "@/components/base/avatar";
import { Icons } from "@/components/ui/icons";
import AccountSettingsSheet from "./features/sheets/account-settings-sheet";
import LiveCombobox from "./features/combobox/live-combobox";
import WorkspaceSettingsSheet from "./features/sheets/workspace-settings-sheet";
import NotificationsSheet from "./features/sheets/notifications-sheet";
import InfoSheet from "./features/sheets/info-sheet";
import StudioLink from "./features/buttons/studio-link";
import VscodeLink from "./features/buttons/vscode-link";
import MessagesLink from "./features/buttons/messages-link";
import MeetingLink from "./features/buttons/meeting-link";
import FullscreenViewToggle from "./features/buttons/fullscreen-view-toggle";
import Slides from "./features/slides";
import Messages from "./features/messages";
import { EndCurrentMeeting } from "./features/buttons/end-current-meeting";
import TeamButton from "./features/buttons/team-button";
import MemberRegisterForm from "./features/forms/member-register-form";
import CreateWorkspaceForm from "./features/forms/create-workspace-form";
import WorkspacesToolbar from "./features/workspaces-toolbar";
import CreatePinForm from "./features/forms/create-pin-form";
import WorkspacesCombobox from "./features/combobox/workspaces-combobox";

const UserRegisterForm = dynamic(
  () => import("./features/forms/user-register-form")
);
const UserLoginForm = dynamic(() => import("./features/forms/user-login-form"));

const Workspaces = dynamic(() => import("./features/workspaces"));

const Pins = dynamic(() => import("./layouts/pins"));

const ThemeSwitcher = dynamic(
  () => import("./features/buttons/theme-switcher")
);

const SidebarMenuToggle = dynamic(
  () => import("./features/buttons/sidebar-menu-toggle")
);
const Vscode = dynamic(() => import("./features/vscode"));

const BackLink = dynamic(() => import("./features/buttons/back-link"));

const LibraryLink = dynamic(() => import("./features/buttons/library-link"));

/** Navbar Root Composer ******************************************************************** */
NavbarRoot.Link = Link;
NavbarRoot.LibraryLink = LibraryLink;
NavbarRoot.Back = BackLink;
NavbarRoot.LiveCombobox = LiveCombobox;
NavbarRoot.RegisterLink = RegisterLink;
NavbarRoot.LoginLink = LoginLink;
NavbarRoot.AccountSettingsSheet = AccountSettingsSheet;
NavbarRoot.WorkspacesCombobox = WorkspacesCombobox;
NavbarRoot.CreateCombobox = CreateCombobox;
NavbarRoot.ThemeSwitcher = ThemeSwitcher;
NavbarRoot.SidebarMenuToggle = SidebarMenuToggle;
NavbarRoot.BackLink = BackLink;
NavbarRoot.FullscreenViewToggle = FullscreenViewToggle;
NavbarRoot.TeamButton = TeamButton;

NavbarRoot.EndCurrentMeeting = EndCurrentMeeting;

/** Apps Root Composer ******************************************************************** */

AppsRoot.WorkspaceSettingsSheet = WorkspaceSettingsSheet;
AppsRoot.NotificationsSheet = NotificationsSheet;
AppsRoot.InfoSheet = InfoSheet;

AppsRoot.LibraryLink = LibraryLink;
AppsRoot.StudioLink = StudioLink;
AppsRoot.VscodeLink = VscodeLink;
AppsRoot.MessagesLink = MessagesLink;
AppsRoot.MeetingLink = MeetingLink;

/** Sidebar Root Composer ******************************************************************** */

SidebarRoot.Icons = Icons;
SidebarRoot.AvatarComponent = AvatarComponent;
SidebarRoot.WorkspacesCombobox = WorkspacesCombobox;

/** View Root Composer ******************************************************************** */

ViewRoot.Pins = Pins;
ViewRoot.UserRegisterForm = UserRegisterForm;
ViewRoot.UserLoginForm = UserLoginForm;
ViewRoot.Vscode = Vscode;
ViewRoot.Workspaces = Workspaces;
ViewRoot.PinsToolbar = PinsToolbar;
ViewRoot.WorkspacesToolbar = WorkspacesToolbar;

ViewRoot.CreateWorkspaceForm = CreateWorkspaceForm;
ViewRoot.CreatePinForm = CreatePinForm;

ViewRoot.MemberRegisterForm = MemberRegisterForm;

ViewRoot.Slides = Slides;
ViewRoot.Messages = Messages;

export { LayoutRoot, AppsRoot, NavbarRoot, SidebarRoot, ViewRoot };
