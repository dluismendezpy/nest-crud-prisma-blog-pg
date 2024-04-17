# NestJS Crud PG

Articles crud using NestJs, Prisma and PostgreSQL

## Installation

```bash
$ npm install
```

## Running the app (docker-compose way)
First, setup your env variables in your .env file
```text
DATABASE_URL=
POSTGRESQL_PORT=
POSTGRESQL_PORT_DEFAULT=
POSTGRESQL_USER=
POSTGRESQL_PASSWORD=
```

Then, run
```bash
$ docker-compose up

# development
$ npm run start

# watch mode
$ npm run start:dev
```

## License

Nest is [Apache 2.0](LICENSE).
