import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import * as colors from 'styles/colors';

type Props = { data?: number[]; dimensions?: string[]; measure: string };

const BarChart = ({ data, dimensions, measure }: Props) => {
  if (!data || !dimensions) return null;

  const options: ApexOptions = {
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
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: dimensions,
      labels: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: false,
        style: {
          colors: [colors.text],
        },
      },
    },

    legend: {
      show: false,
    },

    responsive: [
      {
        breakpoint: 991,
        options: {
          yaxis: {
            labels: {
              show: true,
              style: {
                colors: [colors.text],
              },
            },
          },

          title: {
            text: measure,
          },
        },
      },
    ],
  };

  const series = [
    {
      data,
    },
  ];

  return <Chart options={options} series={series} type='bar' width='100%' />;
};

export default BarChart;
