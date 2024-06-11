import db from "@/db";
import { Repo } from "@prisma/client";

import { ActionError } from "@/lib/safe-action";
import { isValidObjectId } from "@/lib/utils";

export type RepoDto = {
  id: string;
  name: string;
  link: string;
  description: string;
  picture: string;
};

export function toDtoMapper(repo: Repo): RepoDto {
  return {
    id: repo.id,
    name: repo.name,
    link: repo.link,
    description: repo.description,
    picture: repo.picture,
  };
}

export async function getRepoByName(data: { name: string }) {
  const repo = await db.repo.findUnique({ where: { name: data.name } });

  if (!repo) return undefined;

  return toDtoMapper(repo);
}

export async function getRepo(data: { id: string }) {
  if (!isValidObjectId(data.id)) throw new ActionError("Invalid Repo ID!");

  const repo = await db.repo.findUnique({ where: { id: data.id } });

  if (!repo) return undefined;

  return toDtoMapper(repo);
}

export async function getRepos() {
  const repos = await db.repo.findMany();

  return repos.map(toDtoMapper);
}
