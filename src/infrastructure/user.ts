import db from "@/db";
import { User } from "@prisma/client";

export async function getUserByGithub(data: { github_id: number }) {
  const user = await db.user.findUnique({
    where: { github_id: data.github_id },
  });
  return user;
}

export async function createUser(data: Omit<User, "id">) {
  const user = await db.user.create({ data });
  return user;
}

export async function updateUser(id: string, data: Omit<User, "id">) {
  const user = await db.user.update({ where: { id }, data });
  return user;
}
