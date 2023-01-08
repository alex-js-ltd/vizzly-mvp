import { req } from './request.client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { graphql } from 'generated/gql';

export { useOrders };

const useOrders = (xaxis: string) => {
  const result = useQuery<
    { orders: { data: number[]; categories: string[] } },
    Error
  >({
    queryKey: ['orders', xaxis],
    queryFn: () => req(ordersQueryDocument, { xaxis }),
  });

  return {
    ...result,
    data: result?.data?.orders?.data,
    categories: result?.data?.orders?.categories,
  };
};

const ordersQueryDocument = graphql(/* GraphQL */ `
  query orders($xaxis: String) {
    orders(xaxis: $xaxis) {
      data
      categories
    }
  }
`);
