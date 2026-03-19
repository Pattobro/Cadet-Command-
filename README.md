Cadet Command

Cadet Command is a JROTC cadet management system built for instructors and unit leadership. It helps manage cadets, companies, platoons, instructors, events, practices, and disciplinary actions in one web app.

## Tech Stack

- React 19 + TypeScript
- Vite
- Hono
- Cloudflare Workers
- Cloudflare D1
- Cloudflare R2
- Tailwind CSS

## Project Structure

```text
src/
  react-app/        Frontend React application
  worker/           Cloudflare Worker backend
  shared/           Shared TypeScript types
migrations/         Database migrations
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Deployment Notes

This project includes Cloudflare configuration in `wrangler.json`.
Before deploying, replace placeholder values with your own Cloudflare resources:

- Worker name
- D1 database ID and name
- R2 bucket name
- GitHub repository URL in `package.json`

## Recommended GitHub Repo Name

`cadet-command`

## Suggested First Commit Message

`Initial commit: add Cadet Command JROTC management system`
