import { req } from './request.client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { graphql } from 'generated/gql';

export { useOrders };

const useOrders = (xaxis: string, yaxis: string) => {
  const result = useQuery<
    { orders: { data: number[]; categories: string[] } },
    Error
  >({
    queryKey: ['orders', xaxis, yaxis],
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
