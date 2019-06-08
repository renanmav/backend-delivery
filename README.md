# Pizza Don Juan Delivery API

This is the REST API for the delivery app and website of Don Juan pizzeria.

## Setup

Use the `docker-compose` command to start containers.

```bash
docker-compose up -d --build
```

## Entity Relationship Diagram

![ERD](https://i.imgur.com/s5Ue9Vv.jpg)

- **Size** is a strong entity since it labels the price
- Only admin users can perform PUT and DELETE requests
- Objects owners are mapped by `user_id` column

## Some observations

- `.env` pre-configurated, feel free to change it.
- Route for upload (POST on `/files`) accepts either `id` or `name` query params.
