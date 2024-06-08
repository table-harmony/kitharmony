import db from "@/db";
import { User } from "@prisma/client";

export type UserDto = {
  id: string;
  username: string;
  picture: string;
  email: string | null;
  github_id: number;
};

export type CreateUserDto = {
  username: string;
  picture: string;
  email: string | null;
  github_id: number;
};

export type UpdateUserDto = {
  username?: string;
  picture?: string;
  email?: string | null;
  github_id?: number;
};

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
    where: { github_id: data.github_id },
  });

  if (!user) return undefined;

  return toDtoMapper(user);
}

export async function createUser(data: CreateUserDto) {
  const user = await db.user.create({ data });
  return toDtoMapper(user);
}

export async function updateUser(id: string, data: UpdateUserDto) {
  const user = await db.user.update({ where: { id }, data });
  return toDtoMapper(user);
}
