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
          orderBy: { id: "desc" },
        });
      } catch (error) {
        console.error(error);
      }
    },

    async product(_: never, { id }: { id: number }) {
      try {
        return await prisma.product.findUnique({
          where: { id },
          include: {
            reviews: {
              include: {
                author: {
                  select: {
                    nickname: true,
                  },
                },
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
