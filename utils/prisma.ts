import { PrismaClient } from "@prisma/client";

interface CustomGlobal {
  prisma: PrismaClient;
}

declare const global: CustomGlobal;

let prisma;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}

export default prisma as PrismaClient;
