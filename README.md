# KitHarmony

Production-ready saas starter kits built with the ultimate tech stacks.

![banner](/public/banner.png)

## Features

- Light/dark mode toggle
- Documentation
- Starter kits
- Purchases (for free) granting access to private repositories
- PWA

## Tech Stack

**Client:** React, Next, TailwindCSS, Shadcn

**Server:** Node, Mongo, Prisma

## Environment Variables

#### Mongo

Create a database and copy it's URL onto `DATABASE_URL`.

#### Github

Create a Github oauth application:

1. https://github.com/settings/developers
2. create a new OAuth app
3. for authorized javascript origins

- http://localhost:3000
- https://your-domain.com

4. Authorized redirect URIs

- http://localhost:3000/api/auth/callback/github
- https://your-domain.com/api/auth/callback/github

5. Generate a client secret
6. Set your github id and secret inside of .env

- **GITHUB_CLIENT_ID**
- **GITHUB_CLIENT_SECRET**

Create a GITHUB_TOKEN access for the repos you choose.

## Acknowledgements

- [Fuma docs](https://fumadocs.vercel.app/)

![Logo](/public/favicon.ico)
