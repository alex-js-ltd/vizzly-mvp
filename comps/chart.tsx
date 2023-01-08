import Chart from 'react-apexcharts';

type Props = { data?: number[]; categories?: string[] };

const BarChart = ({ data, categories }: Props) => {
  if (!data || !categories) return null;
  const options = {
    chart: {
      id: 'apexchart-example',
    },
    xaxis: {
      categories: categories,
    },
  };

  const series = [
    {
      name: 'series-1',
      data: data,
    },
  ];

  return <Chart options={options} series={series} type='bar' width='100%' />;
};

export default BarChart;
