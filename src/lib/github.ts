import { env } from "@/env";

import { Octokit } from "@octokit/rest";

const octoKit = new Octokit({
  auth: env.GITHUB_TOKEN,
});

export async function addCollaborator(github: string, repo: string) {
  await octoKit.rest.repos.addCollaborator({
    owner: "table-harmony",
    repo: repo,
    username: github,
  });
}
