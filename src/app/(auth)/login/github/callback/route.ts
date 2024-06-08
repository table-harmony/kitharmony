import { createUser, getUserByGithub, updateUser } from "@/infrastructure/user";

import { cookies } from "next/headers";
import { github, lucia } from "@/lib/auth";
import { OAuth2RequestError } from "arctic";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;

  if (!code || !state || !storedState || state !== storedState)
    return new Response(null, { status: 400 });

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const githubUser: GitHubUser = await response.json();

    const existingUser = await getUserByGithub({ github_id: githubUser.id });

    if (existingUser) {
      await updateUser(existingUser.id, {
        username: githubUser.login,
        picture: githubUser.avatar_url,
        email: githubUser.email,
        github_id: githubUser.id,
      });

      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }

    const user = await createUser({
      github_id: githubUser.id,
      username: githubUser.login,
      picture: githubUser.avatar_url,
      email: githubUser.email,
    });

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    console.log(e);
    if (e instanceof OAuth2RequestError)
      return new Response(null, { status: 400 });
    return new Response(null, { status: 500 });
  }
}

interface GitHubUser {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  email: string | null;
}
