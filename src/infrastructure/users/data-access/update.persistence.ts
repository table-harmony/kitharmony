import "server-only";

import db from "@/db";

import { toDtoMapper } from "./get.persistence";
import { UpdateUserDto } from "../types";

export async function updateUser(data: UpdateUserDto) {
  const user = await db.user.update({ where: { id: data.id }, data });
  return toDtoMapper(user);
}
