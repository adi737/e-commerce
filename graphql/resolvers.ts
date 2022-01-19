import { prisma } from "../utils/prisma";

export const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany(),
  },
};
