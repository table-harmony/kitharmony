import { createUser } from "../data-access";
import { getUserByGithubUseCase } from "./get.use-case";

import { CreateUserDto } from "../types";

import { ActionError } from "@/lib/safe-action";

export async function createUserUseCase(data: CreateUserDto) {
  const existingUser = await getUserByGithubUseCase({
    github_id: data.github_id,
  });

  if (existingUser) throw new ActionError("User already exists!");

  const user = await createUser(data);
  return user;
}
