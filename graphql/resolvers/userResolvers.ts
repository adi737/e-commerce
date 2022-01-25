import prisma from "../../utils/prisma";

export const userResolvers = {
  Query: {
    async users() {
      try {
        return await prisma.user.findMany();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
