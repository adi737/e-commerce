import { prisma } from "../../utils/prisma";

export const userResolvers = {
  Query: {
    users: async () => await prisma.user.findMany(),
  },
};
