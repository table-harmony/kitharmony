import { ActionError } from "@/lib/safe-action";
import { getUser, getUserByGithub } from "../data-access";
import { isValidObjectId } from "@/lib/utils";

export async function getUserByGithubUseCase(data: { github_id: number }) {
  const user = await getUserByGithub(data);
  return user;
}

export async function getUserUseCase(data: { id: string }) {
  if (!isValidObjectId(data.id)) throw new ActionError("Invalid User Id!");

  const user = await getUser(data);
  return user;
}
