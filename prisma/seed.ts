import { PrismaClient } from "@prisma/client";

const users = [
  {
    id: 6,
    email: "adirian18@gmail.com",
    nickname: "adi737",
    password: "1234",
  },
  {
    id: 7,
    email: "prisma@asd.asd",
    nickname: "prisma737",
    password: "1234",
  },
];

const products = [
  {
    id: 1,
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adidas.com%2Fus%2Fsuperstar-shoes%2FFV3284.html&psig=AOvVaw3nCf7bLCLnMhzLSyCKUsMu&ust=1642868118804000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPC_vOeew_UCFQAAAAAdAAAAABAJ",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    id: 2,
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image:
      "data:image/jpeg;base64,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",
    countInStock: 35,
    creatorId: users[0].id,
  },
];

const reviews = [
  {
    title: "cool",
    comment: "very cool shoes",
    rating: "five" as const,
    productId: 1,
    authorId: users[0].id,
  },
];

const prisma = new PrismaClient();

export const main = async () => {
  await prisma.product.createMany({
    data: products,
  });

  await prisma.review.createMany({
    data: reviews,
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
