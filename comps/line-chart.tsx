import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

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
      height: 350,
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
    title: {
      text: measure,
      align: 'left',
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
        rotateAlways: true,
        style: {
          fontSize: '6px',
        },
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
  };
  return (
    <Chart
      options={options}
      series={series}
      type='line'
      width='100%'
      height='100%'
    />
  );
};

export default LineChart;
