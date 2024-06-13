import { isValidObjectId } from "@/lib/utils";
import { getKit, getKitByName, getKits } from "../data-access";
import { ActionError } from "@/lib/safe-action";

export async function getKitByNameUseCase(data: { name: string }) {
  const kit = await getKitByName(data);

  return kit;
}

export async function getKitUseCase(data: { id: string }) {
  if (!isValidObjectId(data.id)) throw new ActionError("Invalid Kit Id!");

  const kit = await getKit(data);

  return kit;
}

export async function getKitsUseCase() {
  const kits = await getKits();
  return kits;
}
