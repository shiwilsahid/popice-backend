import { Hono } from "hono";
import { cors } from "hono/cors";
import { prisma } from "./libs/prisma";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.json({
    message: "Pop Ice API",
    products: "/api/products",
    categories: "/api/categories",
  });
});

// PRODUCTS
// Get Products
app.get("/api/products", async (c) => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  return c.json(products);
});

// Get Product by slug
app.get("/api/products/:slug", async (c) => {
  const slug = c.req.param("slug");

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      category: true,
    },
  });

  if (!product) {
    c.status(404);
    return c.json({ message: "Product is not found" });
  }

  return c.json(product);
});

// CATEGORY
// Get Categories
app.get("/api/categories", async (c) => {
  const categories = await prisma.category.findMany();
  return c.json(categories);
});

// Get Category by slug
app.get("/api/categories/:slug", async (c) => {
  const slug = c.req.param("slug");

  const category = await prisma.category.findUnique({
    where: { slug },
  });

  if (!category) {
    c.status(404);
    return c.json({ message: "Category not found" });
  }

  return c.json(category);
});

export default app;
