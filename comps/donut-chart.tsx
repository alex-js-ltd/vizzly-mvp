import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

type Props = { data?: number[]; dimensions?: string[]; measure: string };

const DonutChart = ({ data, dimensions, measure }: Props) => {
  if (!data || !dimensions || !measure) return null;

  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: dimensions,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
      },
    },
    title: {
      text: measure,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <Chart
      options={options}
      series={data}
      type='donut'
      width='100%'
      height='100%'
    />
  );
};

export default DonutChart;