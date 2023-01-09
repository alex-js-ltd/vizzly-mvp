import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

type Props = { data?: number[]; dimensions?: string[] };

const BarChart = ({ data, dimensions }: Props) => {
  if (!data || !dimensions) return null;

  let options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
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
  };

  let series = [
    {
      data,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type='bar'
      width='100%'
      height='100%'
    />
  );
};

export default BarChart;
