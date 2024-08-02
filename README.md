# POP ICE BACKEND

## REST API Specification

- Production: `https://popice-backend.mnursahid.com`
- Local: `http://localhost:3000`

### Product API:

| HTPP                  | Endpoint | Description         |
| --------------------- | -------- | ------------------- |
| `/api/products`       | `GET`    | Get Products        |
| `/api/products/:slug` | `GET`    | Get Product by Slug |

### Category API:

| HTPP                    | Endpoint | Description                      |
| ----------------------- | -------- | -------------------------------- |
| `/api/categories`       | `GET`    | Get Categories                   |
| `/api/categories/:slug` | `GET`    | Get All Product by Slug Category |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

Open <http://localhost:3000>

## Prisma Setup

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:

1. Set the `DATABASE_URL` in the `.env` file to point to your existing database. If your database has no tables yet, read <https://pris.ly/d/getting-started>
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.




## REST API Specification (Planning)

- Production: `https://popice-backend.mnursahid.com`
- Local: `http://localhost:3000`

### User API:

| HTPP                 | Endpoint | Description      |
| -------------------- | -------- | ---------------- |
| `/api/users/current` | `GET`    | Get User Profile |
| `/api/users`         | `POST`   | Register User    |
| `/api/users/login`   | `POST`   | Login User       |
| `/api/users/current` | `PATCH`  | Update User      |
| `/api/users/current` | `DELETE` | Delete User      |

### Product API:

| HTPP                  | Endpoint | Description          |
| --------------------- | -------- | -------------------- |
| `/api/products`       | `GET`    | Get Products         |
| `/api/products/:slug` | `GET`    | Get Product by Slug  |
| `/api/products`       | `POST`   | Create Product       |
| `/api/products/:id`   | `PUT`    | Update Product by Id |
| `/api/products/:id`   | `DELETE` | Delete Product by Id |

### Category API:

| HTPP                                              | Endpoint | Description           |
| ------------------------------------------------- | -------- | --------------------- |
| `/api/products/:idProduct/Categories`             | `GET`    | Get Categories        |
| `/api/products/:idProduct/Categories/:idCategory` | `GET`    | Get Category by Id    |
| `/api/products/:idProduct/Categories`             | `POST`   | Create Category       |
| `/api/products/:idProduct/Categories/:idCategory` | `PUT`    | Update Category by Id |
| `/api/products/:idProduct/Categories/:idCategory` | `DELETE` | Delete Category by Id |
