import { req } from './request.client';
import { useQuery } from '@tanstack/react-query';
import { graphql } from 'generated/gql';
import { Dimension, Measure, Aggregate } from 'comps/layout';

export { useOrders };

const useOrders = (
  dimension: Dimension,
  measure: Measure,
  aggregate: Aggregate
) => {
  const result = useQuery<
    { orders: { data: number[]; dimensions: string[] } },
    Error
  >({
    queryKey: ['orders', dimension, measure, aggregate],
    queryFn: () => req(ordersQueryDocument, { dimension, measure, aggregate }),
  });

  return {
    ...result,
    data: result?.data?.orders?.data,
    dimensions: result?.data?.orders?.dimensions,
  };
};

const ordersQueryDocument = graphql(/* GraphQL */ `
  query orders($dimension: String, $measure: String, $aggregate: String!) {
    orders(dimension: $dimension, measure: $measure, aggregate: $aggregate) {
      data
      dimensions
    }
  }
`);
