import { updateUser } from "../data-access";
import { getUserUseCase } from "./get.use-case";
import { UpdateUserDto } from "../types";

import { ActionError } from "@/lib/safe-action";

export async function updateUserUseCase(data: UpdateUserDto) {
  const existingUser = await getUserUseCase({ id: data.id });

  if (!existingUser) throw new ActionError("User not found!");

  const user = await updateUser(data);
  return user;
}
