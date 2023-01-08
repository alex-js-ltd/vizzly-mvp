import { QueryResolvers } from './types.generated.server';
import type { Order } from '@prisma/client';

const Query: QueryResolvers = {
  orders: async (_parent, args, ctx) => {
    const { dimension, measure, aggregate } = args;

    const orders = await ctx.prisma.order.findMany();

    return getOrders(orders, dimension, measure, aggregate);
  },
};

export default Query;

type Dimensions = { category: string; payment_method: string; month: string };

export type DimensionKey = keyof Dimensions;

type Measure = { value: number };

export type MeasureKey = keyof Measure;

const getOrders = (
  orders: Order[],
  dimension: DimensionKey,
  measure: MeasureKey,
  aggregate: string
) => {
  const dim = orders?.map((order) => order[dimension]);

  const dimensions = dim?.filter((item, index) => dim?.indexOf(item) === index);

  const data = dimensions.map((d) => {
    const filter = orders.filter((order) => order[dimension] === d);

    return aggregate === 'mean' ? mean(filter, measure) : sum(filter, measure);
  });

  return {
    data,
    dimensions,
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
