import { QueryResolvers } from './types.generated.server';
import type { Order } from '@prisma/client';

const Query: QueryResolvers = {
  orders: async (_parent, args, ctx) => {
    const { dimension, measure, aggregate } = args;

    let orders;

    try {
      orders = await ctx.prisma.order.findMany();
    } catch (error) {
      return null;
    }

    return getOrders(orders, dimension, measure, aggregate);
  },
};

export default Query;

export enum DimensionKey {
  category = 'category',
  payment_method = 'payment_method',
  month = 'month',
  region = 'region',
}

export enum MeasureKey {
  value = 'value',
  total = 'total',
  qty_ordered = 'qty_ordered',
}

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

const sum = (array: Order[], measure: MeasureKey): number => {
  const sum = array
    ?.reduce((partialSum, a) => partialSum + Number(a[measure]), 0)
    .toFixed(2);

  return parseInt(sum);
};

const mean = (array: Order[], measure: MeasureKey) => {
  const s = sum(array, measure);

  const avg = s / array.length || 0;

  return Math.round(avg);
};
