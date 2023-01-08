import { req } from './request.client';
import { useQuery } from '@tanstack/react-query';
import { graphql } from 'generated/gql';
import { ChartType, Category, Yaxis } from 'comps/layout';

export { useOrders };

const useOrders = (
  xaxis: Category,
  yaxis: Yaxis,
  aggregate: string,
  chartType: ChartType
) => {
  const result = useQuery<
    { orders: { data: number[]; categories: string[] } },
    Error
  >({
    queryKey: ['orders', xaxis, yaxis, aggregate, chartType],
    queryFn: () =>
      req(ordersQueryDocument, { xaxis, yaxis, aggregate, chartType }),
  });

  return {
    ...result,
    data: result?.data?.orders?.data,
    categories: result?.data?.orders?.categories,
  };
};

const ordersQueryDocument = graphql(/* GraphQL */ `
  query orders(
    $xaxis: String
    $yaxis: String
    $aggregate: String!
    $chartType: String
  ) {
    orders(
      xaxis: $xaxis
      yaxis: $yaxis
      aggregate: $aggregate
      chartType: $chartType
    ) {
      data
      categories
    }
  }
`);
