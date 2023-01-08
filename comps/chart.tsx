import Chart from 'react-apexcharts';
import type { ChartType } from './layout';

type Props = { data?: number[]; dimensions?: string[]; chartType: ChartType };

const BarChart = ({ data, dimensions, chartType }: Props) => {
  if (!data || !dimensions) return null;
  const options = {
    chart: {
      id: 'apexchart-example',
    },
    xaxis: {
      categories: dimensions,
    },
  };

  const series = [
    {
      name: 'series-1',
      data: data,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type={chartType}
      width='100%'
      height='100%'
    />
  );
};

export default BarChart;
