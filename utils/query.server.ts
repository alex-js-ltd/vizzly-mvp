import { QueryResolvers } from './types.generated.server';
import type { Order } from '@prisma/client';

const Query: QueryResolvers = {
  orders: async (_parent, args, ctx) => {
    const { xaxis } = args;

    const orders = await ctx.prisma.order.findMany();

    return getCategories(orders, xaxis);
  },
};

export default Query;

const sum = (array: Order[]) => {
  const sum = array
    ?.reduce((partialSum, a) => partialSum + Number(a.value), 0)
    .toFixed(2);

  return parseInt(sum);
};

type Categories = { category: string; payment_method: string; month: string };

type Key = keyof Categories;

const getCategories = (orders: Order[], category: Key) => {
  const cat = orders?.map((order) => order[category]);

  const categories = cat?.filter((item, index) => cat?.indexOf(item) === index);

  let data = [];

  for (const cat of categories) {
    const filter = orders.filter((order) => order[category] === cat);

    const totalValue = sum(filter);
    data.push(totalValue);
  }

  return {
    data,
    categories,
  };
};
