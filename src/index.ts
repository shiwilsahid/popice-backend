import { Hono } from "hono";
import { cors } from "hono/cors";
import { prisma } from "./libs/prisma";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.json({
    message: "Pop Ice Backend API",
    products: "/api/products",
  });
});

// PRODUCTS
// Get Products
app.get("/api/products", async (c) => {
  const products = await prisma.product.findMany();

  return c.json(products);
});

// | `/api/products/:slug` | `GET`    | Get Product by Slug    |
app.get("/api/products/:slug", async (c) => {
  const slug = c.req.param("slug");

  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) {
    c.status(404);
    return c.json({ message: "Product is not found" });
  }

  return c.json(product);
});

export default app;
