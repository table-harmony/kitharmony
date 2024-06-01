import db from "@/db";

export async function getRepoByName(data: { name: string }) {
  const repo = await db.repo.findUnique({ where: { name: data.name } });
  return repo;
}
