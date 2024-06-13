import "server-only";

import db from "@/db";

import { User } from "@prisma/client";
import { UserDto } from "../types";

export function toDtoMapper(user: User): UserDto {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    picture: user.picture,
    github_id: user.github_id,
  };
}

export async function getUserByGithub(data: { github_id: number }) {
  const user = await db.user.findUnique({
    where: data,
  });

  if (!user) return undefined;

  return toDtoMapper(user);
}

export async function getUser(data: { id: string }) {
  const user = await db.user.findUnique({
    where: data,
  });

  if (!user) return undefined;

  return toDtoMapper(user);
}
