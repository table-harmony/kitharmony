import db from "@/db";
import { Kit } from "@prisma/client";

import { ActionError } from "@/lib/safe-action";
import { isValidObjectId } from "@/lib/utils";

export type KitDto = {
  id: string;
  name: string;
  link: string;
  description: string;
  picture: string;
};

export function toDtoMapper(kit: Kit): KitDto {
  return {
    id: kit.id,
    name: kit.name,
    link: kit.link,
    description: kit.description,
    picture: kit.picture,
  };
}

export async function getKitByName(data: { name: string }) {
  const kit = await db.kit.findUnique({ where: { name: data.name } });

  if (!kit) return undefined;

  return toDtoMapper(kit);
}

export async function getKit(data: { id: string }) {
  if (!isValidObjectId(data.id)) throw new ActionError("Invalid Kit ID!");

  const kit = await db.kit.findUnique({ where: { id: data.id } });

  if (!kit) return undefined;

  return toDtoMapper(kit);
}

export async function getKits() {
  const kits = await db.kit.findMany();

  return kits.map(toDtoMapper);
}
