import { QueryResolvers } from './types.generated.server';
import type { Order } from '@prisma/client';
import type {
  DimensionKey,
  Measure,
  Aggregate,
} from './types.generated.server';

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

const getOrders = (
  orders: Order[],
  dimension: DimensionKey,
  measure: Measure,
  aggregate: Aggregate
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

const sum = (array: Order[], measure: Measure): number => {
  const sum = array
    ?.reduce((partialSum, a) => partialSum + Number(a[measure]), 0)
    .toFixed(2);

  return parseInt(sum);
};

const mean = (array: Order[], measure: Measure) => {
  const s = sum(array, measure);

  const avg = s / array.length || 0;

  return Math.round(avg);
};
