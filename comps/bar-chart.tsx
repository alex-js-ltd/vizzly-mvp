import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { ChartWrapper } from './lib';

type Props = { data?: number[]; dimensions?: string[] };

const BarChart = ({ data, dimensions }: Props) => {
  if (!data || !dimensions) return null;

  let options: ApexOptions = {
    chart: {
      type: 'bar',

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: dimensions,
    },

    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  let series = [
    {
      data,
    },
  ];

  return (
    <div css={{ gridArea: 'bar' }}>
      <Chart options={options} series={series} type='bar' width='100%' />
    </div>
  );
};

export default BarChart;
