import axios from "axios";
import cookie from "js-cookie";

import { workspaceURL } from "@/infrastructure/api";
import { workspaceUserTokens } from "@/lib/utils";
import { workspaceFetcher } from "@/lib/fetcher";

/**********  ********************************** */

/**********   GET Workspace User   **************** */

/****************************************  **************** */

//*** Remove later */
export async function get({ url, options }: any) {
  const response = await axios.get(url, options);
  return response.data || null;
}
//*** Remove later */
export async function put(options: any) {
  const response = await axios(options);
  return response.data || null;
}

export async function findOne(body: any) {
  const token: any = cookie.get("droplet_refresh_token");

  console.log("token", token);
  const response = await axios({
    method: "get",
    url: workspaceURL + `/${body.workspace}/pins/find/one?_id=${body.pinId}`,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${cookie.get("droplet_refresh_token")}`,
    },
  });
  const result = await response.data;
  return result;
}

export async function findMany(body: any) {
  const token: any = cookie.get("droplet_refresh_token");

  console.log("token", token);
  const response = await axios({
    method: "get",
    url: workspaceURL + `/${body.workspace}/pins/find/many`,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${cookie.get("droplet_refresh_token")}`,
    },
  });
  const result = await response.data;
  return result;
}

export async function update(body: any) {
  const token: any = cookie.get("droplet_refresh_token");
  //       url: `${url}/pins/update/one?${toQueryString(query)}`,

  console.log("token", token);
  const response = await axios({
    method: "put",
    url:
      workspaceURL +
      `/${body.workspace}/pins/update/one?_id=${body.pinId}&action=update-title`,
    data: body,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${cookie.get("droplet_refresh_token")}`,
    },
  });
  const result = await response.data;
  return result;
}

export async function updateVscode(body: any) {
  const token: any = cookie.get("droplet_refresh_token");

  console.log("token", token);
  const response = await axios({
    method: "put",
    url:
      workspaceURL +
      `/${body.workspace}/pins/update/one?_id=${body.pinId}&action=update-vscode`,
    data: body,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${cookie.get("droplet_refresh_token")}`,
    },
  });
  const result = await response.data;
  return result;
}
