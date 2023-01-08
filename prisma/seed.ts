import { PrismaClient } from '@prisma/client';
import { orderData } from './order-data';

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    orderData?.map(async (item) => {
      return prisma.order.create({
        data: {
          ...item,
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
