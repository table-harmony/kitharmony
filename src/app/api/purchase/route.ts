import db from "@/db";

import { validateRequest } from "@/lib/auth";
import { addCollaborator } from "@/lib/github";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const repoName = url.searchParams.get("repo");

  if (!repoName) return new Response("Missing repo!", { status: 400 });

  const { user } = await validateRequest();

  if (!user) return new Response("Unauthorized!", { status: 401 });

  try {
    const repo = await db.repo.findUnique({ where: { name: repoName } });

    if (!repo) return new Response("Repo not found!", { status: 404 });

    const existingPurchase = await db.purchase.findUnique({
      where: {
        userId_repoId: {
          userId: user.id,
          repoId: repo.id,
        },
      },
    });

    if (existingPurchase) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/purchases",
        },
      });
    }

    await db.purchase.create({
      data: {
        userId: user.id,
        repoId: repo.id,
      },
    });

    await addCollaborator(user.username, repo.name);

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/purchases/success",
      },
    });
  } catch (e) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
