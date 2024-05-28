import { validateRequest } from "@/lib/auth";
import { addCollaborator } from "@/lib/github";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const repo = url.searchParams.get("repo");

  if (!repo) return new Response("Missing repo!", { status: 400 });

  const { user } = await validateRequest();

  if (!user) return new Response("Unauthorized!", { status: 400 });

  try {
    await addCollaborator(user.username, repo);
  } catch (e) {
    return new Response(null, { status: 400 });
  }

  return new Response("Success!", { status: 200 });
}
