import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import * as colors from 'styles/colors';

type Props = { data?: number[]; dimensions?: string[]; measure: string };

const LineChart = ({ data, dimensions, measure }: Props) => {
  if (!data || !dimensions || !measure) return null;

  const series = [
    {
      data: data,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
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
      },
    },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
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

          xaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  };
  return (
    <div css={{ width: '50%' }}>
      <Chart options={options} series={series} type='line' width='100%' />
    </div>
  );
};

export default LineChart;
