<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A basic REST API using <a href="http://nestjs.com" target="_blank">NestJS </a> framework and  <a href="https://www.prisma.io/" target="_blank">Prisma </a>.</p>
    <p align="center">

# NestJS - Backend REST API

This repository contains a NestJS backend and Prisma.

## Prerequisites:

- Docker or a locally running MySQL installation
- NodeJS 16+ (build with v18.12.1)
- Code Editor (VSCode is recommended)

## Tools and Technologies

- [Node.js](https://nodejs.org/en/download/): Our runtime environment
- [Docker](https://www.docker.com/get-started/): For containerizing our database
- [Visual Studio Code](https://code.visualstudio.com/Download): Our code editor
- [PostgreSQL](https://www.postgresql.org/download/): Our database
- [NestJS](https://docs.nestjs.com/): Our Node.js framework
- [JestJS](https://jestjs.io/): Our testing framework
- [Prisma](https://www.prisma.io/): Our database toolkit
- [PostgreSQL](https://www.postgresql.org/): object-relational database system.
- [Swagger](https://swagger.io/): Our RESTful APIs documentation.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript

## Getting started:

1.  Clone the repository `git clone https://github.com/bloggrammer/bookstore.git`
2.  Navigate to the cloned directory `cd booksrore`
3.  Install the dependencies `npm install`.
4.  Create a `.env` file

```bash
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

    POSTGRES_USER=johndoe
    POSTGRES_PASSWORD=randompassword
```

5. Adjust the `DATABASE_URL` with your PostgreSQL credentials (they already match the ones from the docker command above).
6. If you don't have a local PostgreSQL database installation, start one with docker: `docker-compose up -d`
7. Apply database migrations: `npx prisma migrate dev`
8. Start the project:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

9. After the backend successfully starts, in a new terminal `npx prisma db seed` to seed the database with some initial data.
10. You can now access the Swagger UI at http://localhost:3000 and test the API endpoints

![API](app.png)

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

![test](test.png)

## Stay in touch

- Author - [John Ansa](https://www.linkedin.com/in/johnansa/)
- Website - [https://bloggrammer.com](https://bloggrammer.com/)
- Twitter - [@bloggrammer](https://twitter.com/bloggrammer)
