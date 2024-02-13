import workspacesApi from "@/lib/workspaces";
import { createWorkspaceCommand } from "./commands";

interface CreateWorkspaceProps {
  body?: any;
  params?: string[];
  query?: any;
  options?: any;
}

export async function createWorkspace(body: any) {
  const url = "/create/one";
  const response = await workspacesApi.post(url, body);

  await createWorkspaceCommand(response.data);

  return response.data;
}
