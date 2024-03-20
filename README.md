# CRUD Hono

Basic CRD REST API built with HonoJS

## TechStack

- Bun
- HonoJS
- DrizzleORM
- PostgreSQL
- Swagger

## Prerequisites

- Bun
- PostgreSQL

## Getting Started

1. Clone the repository with `git clone https://github.com/DeVoresyah/crud-honojs.git`
2. Install the dependencies with `bun install`
3. Copy the `.env.example` file to `.env` and fill in the required environment variables

## Database

1. Generate migration with `bun migration:generate`
2. Run the migration with `bun migration:run`

## Running the server

```bash
bun dev
```

## Swagger

The API documentation can be found at `http://localhost:3000/swagger`
