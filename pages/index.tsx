import dynamic from 'next/dynamic';
import { useOrders } from 'utils/hooks.client';
import type { ReactElement } from 'react';
import Layout from 'comps/layout';
import { useCategory } from 'comps/layout';
import { Spinner } from 'comps/lib';
import * as colors from 'styles/colors';
const BarChart = dynamic(() => import('../comps/chart'), {
  ssr: false,
});

export default function Home() {
  const { category } = useCategory();
  const { data, categories, isError, error, isLoading } = useOrders(category);
  return (
    <>
      <BarChart data={data} categories={categories} />

      {isError ? (
        <div css={{ color: colors.danger }}>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      {isLoading ? <Spinner /> : null}
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
