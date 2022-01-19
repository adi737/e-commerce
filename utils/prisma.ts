import { PrismaClient } from "@prisma/client";

interface CustomGlobal {
  prisma: PrismaClient;
}

declare const global: CustomGlobal;

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
