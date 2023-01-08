import { req } from './request.client';
import { useQuery } from '@tanstack/react-query';
import { graphql } from 'generated/gql';
import { ChartType, Category, Yaxis } from 'comps/layout';

export { useOrders };

const useOrders = (xaxis: Category, yaxis: Yaxis, chartType: ChartType) => {
  const result = useQuery<
    { orders: { data: number[]; categories: string[] } },
    Error
  >({
    queryKey: ['orders', xaxis, yaxis, chartType],
    queryFn: () => req(ordersQueryDocument, { xaxis, yaxis }),
  });

  return {
    ...result,
    data: result?.data?.orders?.data,
    categories: result?.data?.orders?.categories,
  };
};

const ordersQueryDocument = graphql(/* GraphQL */ `
  query orders($xaxis: String, $yaxis: String) {
    orders(xaxis: $xaxis, yaxis: $yaxis) {
      data
      categories
    }
  }
`);
