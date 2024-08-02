import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { dataProducts } from "./data/products";

async function main() {
  const categories = ['Active', 'Fusion', 'Fruit', 'Chocolate'];

  const categoryId = await Promise.all(
    categories.map(async (name) => {
      const category = await prisma.category.upsert({
        where: { name },
        update: {},
        create: { name, slug: name.toLowerCase() },
      });
      return { name, id: category.id };
    })
  );

  const categoryMap = new Map(categoryId.map(({ name, id }) => [name, id]));

  for (const product of dataProducts) {
    const newProductResult = await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        ...product,
        category: {
          connect: { id: categoryMap.get(product.category) },
        },
      },
      create: {
        ...product,
        category: {
          connect: { id: categoryMap.get(product.category) },
        },
      },
    });

    console.info(`Product: ${newProductResult.name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
