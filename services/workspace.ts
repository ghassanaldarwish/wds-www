import usersApi from "@/lib/users";
import { workspaceUserTokens } from "@/lib/utils";
import workspaceApi, { workspaceURL, axios } from "@/lib/workspace";

export const workspaceUserQueryKeys = ["workspace", "user"];
export const getWorkspaceUser: any = async (workspace: string) => {
  const { authorization } = workspaceUserTokens();
  const url = `${workspaceURL(workspace)}/users/find/one`;
  return workspaceApi({
    url,
    authorization,
  });
};
/*************************/

/**********   Login Workspace User   **************** */
export async function loginWorkspaceUser({ workspace, ...body }: any) {
  const wsURL = `${workspaceURL(workspace)}/login`;
  const usersURL = "/update/one?prop=workspace.refreshToken";

  const response = await axios.post(wsURL, body);

  console.log(response.data);
  const updateWS = await usersApi.put(usersURL, {
    workspace,
    refreshToken: response?.data?.token?.refreshToken?.value,
  });
  return updateWS.data;
}
/*************************/

/**********   Join Workspace User   **************** */
export async function joinWorkspaceUser(body: any) {
  console.log(body);
  const url = `${workspaceURL(body.value)}/join`;

  const response = await axios.post(url, body);
  return response.data;
}
/*************************/

/**********   Join Workspace User   **************** */

export const pinsQueryKeys = ["workspace", "pins"];
export const getWorkspacePins: any = async (workspace: string) => {
  const { authorization } = workspaceUserTokens();
  const url = `${workspaceURL(workspace)}/pins/find/many`;
  return workspaceApi({
    url,
    authorization,
  });
};

/*************************/

/**********   Create Workspace Pin   **************** */

export const createWorkspacePin: any = async (body: any) => {
  const { authorization } = workspaceUserTokens();
  const url = `${workspaceURL(body.workspace)}/pins/create/one`;
  console.log("createWorkspacePin =>  ", url);

  const response = await axios({
    method: "POST",
    url,
    headers: {
      Authorization: authorization,
    },
    data: body,
    withCredentials: true,
  });
  return response.data;
};

/*************************/
