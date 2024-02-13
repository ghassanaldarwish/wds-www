import commandsApi from "@/lib/commands";

export async function createWorkspaceCommand(body: any) {
  const url = "/create/workspace";
  const response = await commandsApi.post(url, body);
  const result = await response.data;

  return result;
}
