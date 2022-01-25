import prisma from "../../utils/prisma";

export const productResolvers = {
  Query: {
    async products() {
      try {
        return await prisma.product.findMany({
          include: {
            reviews: {
              select: {
                rating: true,
              },
            },
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
