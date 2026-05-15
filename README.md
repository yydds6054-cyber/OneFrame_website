# OneFrame — site-bright

Next.js 14 + Prisma site. Local dev uses SQLite; production (Vercel) uses PostgreSQL (Neon).

## Local development

```bash
npm install
npx prisma migrate dev    # uses prisma/schema.prisma (SQLite)
npm run dev               # http://localhost:3001
```

The `.env` file points `DATABASE_URL` at `file:./dev.db`.

## Production deployment (Vercel + Neon)

1. Create a Postgres database on [Neon](https://neon.tech) and copy the connection string.
2. Import this repo into Vercel.
3. In Vercel project settings, add an env var: `DATABASE_URL` = your Neon connection string (for Production, Preview, and Development environments).
4. Trigger a deploy. The build command (see `vercel.json`) runs:
   - `prisma generate --schema=prisma/schema.production.prisma` — generates the Postgres client
   - `prisma db push --schema=prisma/schema.production.prisma --skip-generate` — applies schema to Neon
   - `next build`

## Schema changes

Update **both** `prisma/schema.prisma` (SQLite) and `prisma/schema.production.prisma` (Postgres) together. Local migrations live in `prisma/migrations/`; production uses `db push` so no migration files are needed for prod.
