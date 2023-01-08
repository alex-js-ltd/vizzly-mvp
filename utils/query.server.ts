import { QueryResolvers } from './types.generated.server';
import type { Order } from '@prisma/client';

const Query: QueryResolvers = {
  orders: async (_parent, args, ctx) => {
    const { xaxis, yaxis, aggregate } = args;

    const orders = await ctx.prisma.order.findMany();

    console.log(aggregate);

    return getOrders(orders, xaxis, yaxis, aggregate);
  },
};

export default Query;

type Categories = { category: string; payment_method: string; month: string };

export type CatKey = keyof Categories;

type Measure = { value: number };

export type MeasureKey = keyof Measure;

const getOrders = (
  orders: Order[],
  category: CatKey,
  yaxis: MeasureKey,
  aggregate: string
) => {
  const cat = orders?.map((order) => order[category]);

  const categories = cat?.filter((item, index) => cat?.indexOf(item) === index);

  let data = [];

  for (const cat of categories) {
    const filter = orders.filter((order) => order[category] === cat);

    let measure;

    if (aggregate === 'mean') {
      measure = mean(filter, yaxis);
    } else {
      measure = sum(filter, yaxis);
    }

    data.push(measure);
  }

  return {
    data,
    categories,
  };
};

const sum = (array: Order[], yaxis: MeasureKey): number => {
  const sum = array
    ?.reduce((partialSum, a) => partialSum + Number(a[yaxis]), 0)
    .toFixed(2);

  return parseInt(sum);
};

const mean = (array: Order[], yaxis: MeasureKey) => {
  const s = sum(array, yaxis);

  const avg = s / array.length || 0;

  return Math.round(avg);
};
