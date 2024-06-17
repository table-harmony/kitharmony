import { getKitByNameUseCase } from "@/infrastructure/kits";
import {
  createPurchaseUseCase,
  getPurchaseUseCase,
} from "@/infrastructure/purchases";
import { validateRequest } from "@/lib/auth";
import { addCollaborator } from "@/lib/github";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const kitName = url.searchParams.get("kit");

  const { user } = await validateRequest();

  if (!kitName || !user) return new Response(null, { status: 400 });

  const kit = await getKitByNameUseCase({ name: kitName });

  if (!kit) return new Response("Kit not found!", { status: 400 });

  const existingPurchase = await getPurchaseUseCase({
    userId: user.id,
    kitId: kit.id,
  });

  if (existingPurchase)
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/purchases",
      },
    });

  await createPurchaseUseCase({ userId: user.id, kitId: kit.id });

  await addCollaborator(user.username, kit.name);

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/purchases/success",
    },
  });
}
