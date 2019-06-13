# Don Juan Pizza Delivery API

This is the REST API for the delivery app and website of Don Juan pizzeria.

## Setup

Use the `docker-compose` command to start containers.

```bash
docker-compose up -d --build
```

## Entity Relationship Diagram

![ERD](https://i.imgur.com/UUiLPtB.jpg)

- **Size** is a strong entity since it labels the price
- Only admin users can perform PUT and DELETE requests
- Objects owners are mapped by `user_id` column

## Some observations

- `.env` pre-configurated, feel free to change it.
- Route for upload (POST on `/files`) accepts either `id` or `name` query params.
- Insomnia workspace is available [here](https://gist.githubusercontent.com/renanmav/d6612d258e9fa1a0d9a4568af5a92da3/raw/f9a947f3058b45b30abfcefcdb44db2b7a8b0b1e/insomnia-backend-pizza.json).

## Routes

| Route | Verb(s) | Middleware | Description |
| ------------- | ------------- | ------------- | ------------- |
| / | GET | - | Returns a JSON if the API is online |
| /users | POST | val:User | Create a User |
| /sessions | POST | - | Auth and returns a JWT token |
| /sessions | GET | auth | Check the current user logged in |
| /files | GET | - | Show a specific file |
| /files | POST | val:File, auth, is_admin | Upload a file if it's image or pdf |
| /types | GET | - | Index types of products |
| /types/:id | GET | - | Show a specific type |
| /types | POST | val:Type, auth, is_admin | Store a type in database |
| /types/:id | PUT, PATCH | auth, is_admin | Update a specific type |
| /types/:id | DELETE | auth, is_admin | Delete a specific type |
| /types/:type_id/products | GET | - | Index all products of a specific type |
| /products/:id | GET | - | Show a specific product |
| /types/:type_id/products | POST | val:Product, auth, is_admin | Store a product related to an specific type in database |
| /products/:id | PUT, PATCH | auth, is_admin | Update a specific product |
| /products/:id | DELETE | auth, is_admin | Delete a specific product |
| /products/:product_id/sizes | GET | - | Index all sizes of a specific product |
| /size/:id | GET | - | Show a specific size |
| /products/:product_id/sizes | POST | val:Size, auth, is_admin | Store a size related to an specific product in database |
| /sizes/:id | PUT, PATCH | auth, is_admin | Update a specific size |
| /sizes/:id | DELETE | auth, is_admin | Delete a specific size |
| /users/orders | GET | auth | Index all orders of current user logged in |
| /orders/:id | GET | auth | Show a specific order if belongs to current user logged in (if `is_admin=false`) |
| /orders | GET | auth, is_admin | Index all orders |
| /orders | POST | auth | Store a order related to an specific user in database |
| /orders/:id | PUT, PATCH | auth, is_admin | Update a specific order |
| /orders/:id | DELETE | auth, is_admin | Delete a specific order |


