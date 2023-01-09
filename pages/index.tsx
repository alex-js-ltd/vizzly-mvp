import dynamic from 'next/dynamic';
import { useOrders } from 'utils/hooks.client';
import type { ReactElement } from 'react';
import Layout from 'comps/layout';
import { useInput } from 'comps/layout';
import { Spinner } from 'comps/lib';
import * as colors from 'styles/colors';
const BarChart = dynamic(() => import('../comps/bar-chart'), {
  ssr: false,
});

const LineChart = dynamic(() => import('../comps/line-chart'), {
  ssr: false,
});

export default function Home() {
  const { dimension, measure, aggregate, chartType } = useInput();
  const { data, dimensions, isError, error, isLoading } = useOrders(
    dimension,
    measure,
    aggregate,
    chartType
  );

  return (
    <>
      {chartType === 'bar' ? (
        <BarChart data={data} dimensions={dimensions} />
      ) : null}

      {chartType === 'line' ? (
        <LineChart data={data} dimensions={dimensions} measure={measure} />
      ) : null}

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
