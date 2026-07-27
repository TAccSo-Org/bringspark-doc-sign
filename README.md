<p align="center">
  <img src="./packages/assets/logo.png" alt="BringSpark Logo" width="360">
</p>

# BringSpark Document Signing

BringSpark Document Signing is BringSpark's maintained document signing application.

This repository is a BringSpark-owned fork that is intended to be coded on, branded, deployed, and extended as part of the BringSpark product ecosystem. It provides electronic document preparation, recipient workflows, signing, audit logs, completion certificates, email delivery, organisation/team settings, and API surfaces for document signing.

## Project Scope

- Build and operate a BringSpark-branded signing experience.
- Keep app UI, emails, metadata, logos, and default theming aligned with BringSpark.
- Preserve the existing monorepo architecture while evolving product behavior for BringSpark needs.
- Avoid upstream marketing, support, and community references in user-facing surfaces.

Some internal workspace package names are inherited from the fork source where renaming would create unnecessary build churn. User-facing product copy should use BringSpark.

## Tech Stack

- TypeScript
- React Router v7
- Hono
- Prisma
- PostgreSQL
- Tailwind CSS
- shadcn/ui and Radix UI
- React Email
- Lingui
- tRPC
- Playwright
- Biome

## Repository Layout

- `apps/remix` - Main web application and server.
- `packages/email` - Email templates, preview app, and mail transport utilities.
- `packages/lib` - Shared business logic, constants, server-only helpers, and translations.
- `packages/ui` - Shared UI components, primitives, styles, and Tailwind theme.
- `packages/assets` - BringSpark logos, favicons, app icons, and social preview assets.
- `packages/prisma` - Database schema, migrations, generated client, and seed data.

## Local Development

### Requirements

- Node.js 22 or newer
- npm 11.11 or newer
- Docker and Docker Compose for the quickstart services
- PostgreSQL if running services manually

### Quickstart

```sh
cp .env.example .env
npm run dx
npm run dev
```

`npm run dx` installs dependencies, starts the local Docker services, runs migrations, and seeds local data.

For a one-command setup and dev-server start:

```sh
npm run d
```

### Local URLs

- App: http://localhost:3000
- Incoming mail UI: http://localhost:9000
- S3-compatible storage UI: http://localhost:9001
- Local Postgres port: `54320`

## Common Commands

```sh
npm run dev
npm run lint
npm run lint:fix
npm run format
npm run translate
npm run test:e2e
```

Use `npx tsc --noEmit` for targeted type checking when possible. Avoid running `npm run build` for routine validation unless a build is explicitly needed.

## Environment

Environment variables are loaded from `.env` and `.env.local` when commands are wrapped with:

```sh
npm run with:env -- <command>
```

Example:

```sh
npm run with:env -- npx prisma generate --schema packages/prisma/schema.prisma
```

Key BringSpark defaults:

- `NEXT_PRIVATE_SMTP_FROM_NAME=BringSpark`
- `NEXT_PRIVATE_SMTP_FROM_ADDRESS=noreply@bringspark.com`
- `NEXT_PUBLIC_SUPPORT_EMAIL=hello@bringspark.com`
- `NEXT_PRIVATE_BRINGSPARK_LICENSE_KEY`
- `BRINGSPARK_DISABLE_TELEMETRY=true`

## Branding

Primary branding files live in:

- `packages/assets/logo.png`
- `packages/assets/logo_dark.png`
- `packages/assets/logo_icon.png`
- `packages/assets/static/logo.png`
- `packages/email/static/logo.png`
- `apps/remix/public/static/logo.png`
- `apps/remix/public/favicon-*`
- `apps/remix/public/android-chrome-*`
- `apps/remix/public/apple-touch-icon.png`

Default app and email colors are defined in:

- `packages/ui/styles/theme.css`
- `packages/lib/constants/theme.ts`
- `packages/tailwind-config/index.cjs`

Before shipping branding changes, scan for old product traces:

```sh
rg -i "old-product-name|old-product-domain"
```

Inherited workspace package names are expected until package renaming is deliberately planned.

## Email Development

Email templates live in `packages/email/templates` and reusable email components live in `packages/email/template-components`.

Preview defaults live in:

```sh
packages/email/preview/app/lib/templates.tsx
```

After changing translatable copy, run:

```sh
npm run translate
```

## Database

Prisma commands should be run through the root scripts so environment variables are loaded consistently:

```sh
npm run prisma:generate
npm run prisma:migrate-dev
npm run prisma:seed
npm run prisma:studio
```

## Security

Report security concerns through BringSpark's internal security process or by contacting:

```text
hello@bringspark.com
```

Do not include sensitive documents, credentials, signing certificates, private keys, or production tokens in issues, commits, logs, screenshots, or test fixtures.

## License

This repository retains the license obligations inherited from the fork source. Review `LICENSE` before redistributing, deploying modified public versions, or changing licensing terms.
