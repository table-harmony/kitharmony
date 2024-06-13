import "server-only";

import db from "@/db";

import { toDtoMapper } from "./get.persistence";
import { UpdateUserDto } from "../types";

export async function updateUser(data: UpdateUserDto) {
  const { id, ...update } = data;

  const user = await db.user.update({ where: { id }, data: update });
  return toDtoMapper(user);
}
