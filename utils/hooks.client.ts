import { req } from './request.client';
import { useQuery } from '@tanstack/react-query';
import { graphql } from 'generated/gql';
import { ChartType, Dimension, Measure } from 'comps/layout';

export { useOrders };

const useOrders = (
  dimension: Dimension,
  measure: Measure,
  aggregate: string,
  chartType: ChartType
) => {
  const result = useQuery<
    { orders: { data: number[]; dimensions: string[] } },
    Error
  >({
    queryKey: ['orders', dimension, measure, aggregate, chartType],
    queryFn: () =>
      req(ordersQueryDocument, { dimension, measure, aggregate, chartType }),
  });

  return {
    ...result,
    data: result?.data?.orders?.data,
    dimensions: result?.data?.orders?.dimensions,
  };
};

const ordersQueryDocument = graphql(/* GraphQL */ `
  query orders(
    $dimension: String
    $measure: String
    $aggregate: String!
    $chartType: String
  ) {
    orders(
      dimension: $dimension
      measure: $measure
      aggregate: $aggregate
      chartType: $chartType
    ) {
      data
      dimensions
    }
  }
`);
