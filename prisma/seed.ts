import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.upsert({
    where: { title: 'Introduction to NestJS' },
    update: {},
    create: {
      title: 'Introduction to NestJS',
      description: 'A beginner friendly course on NestJS',
      price: 30.56,
    },
  });

  await prisma.book.upsert({
    where: { title: 'The Pragmatic Programmer' },
    update: {},
    create: {
      title: 'The Pragmatic Programmer',
      description:
        'A blend of practical experience and timeless software development principles',
      price: 50.74,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
