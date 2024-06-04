import db from "@/db";

export async function getRepoByName(data: { name: string }) {
  const repo = await db.repo.findUnique({ where: { name: data.name } });
  return repo;
}

export async function getRepos() {
  const repos = await db.repo.findMany();
  return repos;
}
