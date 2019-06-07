# Pizza Don Juan Delivery API

This is the REST API for the delivery app and website of Don Juan pizzeria.

## Setup

Use the `docker-compose` command to start containers.

```bash
docker-compose up -d --build
```

## Entity Relationship Diagram

{{ put the image here }}

## Some observations

- `.env` pre-configurated, feel free to change it.
- Route for upload (POST on `/files`) accepts either `id` or `name` query params.
