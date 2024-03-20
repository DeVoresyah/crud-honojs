# CRUD HonoJS

This project is a simple yet powerful demonstration of a CRUD REST API built with HonoJS, tailored for those who wish to learn or kickstart a project with a modern tech stack. It leverages Bun, HonoJS, DrizzleORM, PostgreSQL, and Swagger to provide a seamless development experience.

![HonoJS Logo](https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-title.png)

## 🚀 Features

- **Fast and lightweight:** Built on top of Bun and HonoJS for optimal performance.
- **Database Integration:** Uses PostgreSQL with DrizzleORM for robust data management.
- **Automatic API Documentation:** Integrated Swagger for easy API documentation and testing.

## 🛠 Tech Stack

- [Bun](https://bun.sh) - A fast, modern runtime for JavaScript and TypeScript.
- [HonoJS](https://hono.dev/) - A very fast and simple web framework.
- [DrizzleORM](https://orm.drizzle.team/) - An ORM for TypeScript.
- [PostgreSQL](https://www.postgresql.org) - The world's most advanced open-source relational database.
- [Swagger](https://swagger.io) - Simplify API development for users, teams, and enterprises.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- [Bun](https://bun.sh) installed on your machine.
- [PostgreSQL](https://www.postgresql.org) setup for your database needs.

## 🏁 Getting Started

Follow these steps to get your development environment set up:

1. **Clone the repository:**

```bash
git clone https://github.com/DeVoresyah/crud-honojs.git
```

2. **Install the dependencies:**

```bash
bun install
```

3. **Setup the environment variables:**
   Copy the `.env.example` file to `.env` and fill in the required environment variables.

## 🗃 Database Setup

1. **Generate migration:**

```bash
bun migration:generate
```

2. **Run the migration:**

```bash
bun migration:run
```

## 🚀 Running the Application

Start the server with the following command:

```bash
bun dev
```

Your server will be running at `http://localhost:3000`.

## 📚 API Documentation

Navigate to `http://localhost:3000/swagger` to view the Swagger UI for API documentation and interactive testing.
