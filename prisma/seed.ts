import { PrismaClient } from "@prisma/client";

const users = [
  {
    email: "adirian18@gmail.com",
    nickname: "adi737",
    password: "1234",
  },
  {
    email: "prisma@asd.asd",
    nickname: "prisma737",
    password: "1234",
  },
];

const prisma = new PrismaClient();

export const main = async () => {
  await prisma.user.createMany({
    data: users,
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
