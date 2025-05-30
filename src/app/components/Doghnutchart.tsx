'use client'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  const data = {
    labels: ['Excellent', 'Good', 'Okay', 'Poor'],
    datasets: [
      {
        data: [47, 40, 10, 3],
        backgroundColor: ['#1E90FF', '#00CED1', '#C71585', '#FF6347'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%', // Creates the donut effect
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg w-full  md:w-115 mt-[2rem]">
        <h1 className='mb-7 font-[500]'>Hospital Performance</h1>
      <div className="relative w-48 h-48 ">
        <Doughnut data={data} options={options} />
        <div className="absolute -mt-[8.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-2xl font-bold text-blue-600">47%</p>
          <p className="text-sm text-gray-600">Excellent</p>
        </div>
      </div>
    </div>
  );
}