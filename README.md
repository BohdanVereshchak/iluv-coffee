# I Love Coffee API

A NestJS and TypeORM API for managing coffees and their flavors. Data is stored in
PostgreSQL, and TypeORM is configured to create or update the database schema
automatically.

## Requirements

- Node.js and npm
- Docker and Docker Compose

## Setup

Install dependencies and start the PostgreSQL container:

```bash
npm install
docker compose up -d db
```

The application expects PostgreSQL at `localhost:5433` with these credentials:

| Setting | Value |
| --- | --- |
| Database | `postgres` |
| Username | `postgres` |
| Password | `pass123` |
| Port | `5433` |

Start the API on `http://localhost:3000`:

```bash
npm run start:dev
```

The root endpoint returns `Hello Nest!`.

## API

### Create a coffee

`POST /coffees`

```json
{
  "name": "Espresso",
  "brand": "Illy",
  "flavors": ["Chocolate", "Caramel"]
}
```

### List coffees

`GET /coffees`

Returns all coffees with their flavors.

### Get one coffee

`GET /coffees/:id`

Returns a coffee with its flavors, or `404` when the coffee does not exist.

### Update a coffee

`PATCH /coffees/:id`

The current controller expects the update object under a `body` property:

```json
{
  "body": {
    "brand": "Lavazza",
    "flavors": ["Hazelnut"]
  }
}
```

`name`, `brand`, and `flavors` are optional for updates. `flavors` is an array of
strings when provided.

### Delete a coffee

`DELETE /coffees/:id`

Deletes and returns the requested coffee, or returns `404` when the coffee does not exist.

All incoming requests use NestJS validation. Unknown properties are rejected, and
the create fields must be strings (`flavors` must contain only strings).

## Commands

```bash
npm run start       # start normally
npm run start:dev   # start with watch mode
npm run build       # compile to dist/
npm run start:prod  # run the compiled application
npm run lint        # lint source and tests
npm test            # run unit tests
npm run test:e2e    # run end-to-end tests
npm run test:cov    # run tests with coverage
```

Stop the database container with:

```bash
docker compose down
```
