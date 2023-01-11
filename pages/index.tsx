import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { useOrders } from 'utils/hooks.client';
import type { ReactElement } from 'react';
import Layout from 'comps/layout';
import { useInput } from 'comps/layout';
import { Spinner, Grid } from 'comps/lib';
import * as colors from 'styles/colors';

const BarChart = dynamic(() => import('../comps/bar-chart'), {
  ssr: false,
});

const LineChart = dynamic(() => import('../comps/line-chart'), {
  ssr: false,
});

const DonutChart = dynamic(() => import('../comps/donut-chart'), {
  ssr: false,
});

export default function Home() {
  const { dimension, measure, aggregate } = useInput();
  const { data, dimensions, isError, error, isLoading } = useOrders(
    dimension,
    measure,
    aggregate
  );

  return (
    <Fragment>
      <Grid>
        <BarChart data={data} dimensions={dimensions} />

        <DonutChart data={data} dimensions={dimensions} measure={measure} />

        <LineChart data={data} dimensions={dimensions} measure={measure} />
      </Grid>

      {isError ? (
        <div css={{ color: colors.danger }}>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      {isLoading ? <Spinner /> : null}
    </Fragment>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
