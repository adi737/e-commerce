import { prisma } from "../../utils/prisma";

export const productResolvers = {
  Query: {
    products: async () =>
      await prisma.product.findMany({
        include: {
          reviews: {
            select: {
              rating: true,
            },
          },
        },
      }),
  },
};
