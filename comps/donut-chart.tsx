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
      show: false,
    },
  };

  return (
    <div css={{ gridArea: 'donut', width: '50%' }}>
      <Chart options={options} series={data} type='donut' width='100%' />
    </div>
  );
};

export default DonutChart;
