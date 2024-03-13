# API Boilerplate using NestJs

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Database 

Change the name of the database in the `.env` file. Currently the database name is set to `boilerplate`. The project uses MongoDb out of the box. But it can support whatever `prisma` supports as providers

If using Prisma + MongoDb, you will need a replica set. For this you can either run a local replca set using docker or use MongoDb Atlas

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
