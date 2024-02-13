import { isServer } from "@/lib/utils";

export const vscodeURL = "";

/**   wds_ui_site_url     */

export const wds_ui_site_url =
  process.env.NODE_ENV === "production"
    ? "https://wds.ui.webdrei.com"
    : "http://wds.ui.localhost";

/*****   workspace URL     ***********************/

export const workspaceURL = (workspace: string) => {
  let url = `http://${workspace}-api:4444`;

  if (!isServer()) {
    if (process.env.NODE_ENV === "production")
      url = `https://${workspace}-api.webdrei.com`;
    else url = `http://${workspace}-api.localhost:8088`;
  }

  return url;
};

/****   users URL   ************************/
export const usersURL = () => {
  let url = `http://users-api:3014`;

  if (!isServer()) {
    if (process.env.NODE_ENV === "production")
      url = `https://api.users.webdrei.com`;
    else url = `http://api.users.localhost`;
  }
  return url;
};

/****   authURL URL   ************************/
export const authURL = () => {
  let url = `http://auth-api:3013`;

  if (!isServer()) {
    if (process.env.NODE_ENV === "production")
      url = `https://api.auth.webdrei.com`;
    else url = `http://api.auth.localhost`;
  }

  return url;
};

/****   workspacesURL URL   ************************/
export const workspacesURL = () => {
  let url = `http://workspaces-api:3017`;

  if (!isServer()) {
    if (process.env.NODE_ENV === "production")
      url = `https://api.workspaces.webdrei.com`;
    else url = `http://api.workspaces.localhost`;
  }

  return url;
};
/****   commandsURL URL   ************************/
export const commandsURL = () => {
  let url = `https://api.commands.webdrei.com`;

  if (process.env.NODE_ENV === "production") {
    url = `http://api.commands.localhost`;
  }

  return url;
};
