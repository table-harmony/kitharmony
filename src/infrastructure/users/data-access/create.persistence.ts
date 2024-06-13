import "server-only";

import db from "@/db";

import { CreateUserDto } from "../types";
import { toDtoMapper } from "./get.persistence";

export async function createUser(data: CreateUserDto) {
  const user = await db.user.create({ data });
  return toDtoMapper(user);
}
