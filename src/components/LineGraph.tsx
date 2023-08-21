import React from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import '../App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const fetchGraphData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

const LineGraph: React.FC = () => {

  const { data, isLoading, isError } = useQuery('graphData', fetchGraphData);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading data</div>;

  const dates = Object.keys(data.cases);
  const casesData = Object.values(data.cases);
  const deathsData = Object.values(data.deaths);
  const recoveredData=Object.values(data.recovered);

    const options = {
      responsive: true,
      interaction: {
        mode: 'index' as const,
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Covid Cases between 2020-2023',
        },
      },
      scales: {
        y: {
          type: 'linear' as const,
          display: true,
          position: 'left' as const,
        },
        y1: {
          type: 'linear' as const,  // Change type to 'logarithmic'
          display: true,
          position: 'right' as const,
          grid: {
            drawOnChartArea: false,
          },
        },
      }
    };

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Cases',
        data: casesData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: true,
        yAxisID: 'y',
      },
      {
        label: 'Deaths',
        data: deathsData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
        yAxisID: 'y',
      },
      {
        label: 'Recovered',
        data: recoveredData,
        borderColor: 'green',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: true,
        yAxisID: 'y',
      },
    ],
  };

  return (
    <div className="w-full h-[400px] border border-gray-300 shadow-md flex items-center justify-center p-4 bg-white">
    <Line 
        className='line-chart w-full h-full'
        data={chartData}
        options={options}
        key={Math.random()} 
    />
</div>
  );
}

export default LineGraph;
