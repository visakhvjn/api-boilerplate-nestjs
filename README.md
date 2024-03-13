# API Boilerplate using NestJs

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Database 

1. Add a `.env` file with the following details

```DATABASE_URL='mongodb+srv://<username>:<password>@cluster0.ly7tna3.mongodb.net/<database>?retryWrites=true&w=majority&appName=<cluster-name>'```

The project uses MongoDb out of the box. But it can support whatever `prisma` supports as providers

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
