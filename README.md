# AutoOsa.fi

Modern Finnish auto spare parts ecommerce storefront built with Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, NextAuth and Stripe.

## Features
- Modern homepage with hero, categories, featured products, brands and newsletter
- Product pages and category/brand pages
- Prisma models for users, products, categories, brands, orders, order items, reviews and addresses
- PostgreSQL-ready setup and seed data
- Docker support via docker-compose

## Quick start
1. Copy .env.example to .env and update values.
2. Start PostgreSQL or use Docker Compose.
3. Run `npx prisma generate`
4. Run `npx prisma migrate dev --name init`
5. Run `npx prisma db seed`
6. Run `npm run dev`

## Scripts
- `npm run dev` - start development server
- `npm run build` - build app
- `npm run start` - start production server

## Docker
Use docker-compose if you want a local PostgreSQL container.
