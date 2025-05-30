'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ],
  datasets: [
    {
      type: 'bar' as const,
      label: 'Out Patients',
      data: [1200, 1900, 3000, 2500, 3200, 4500, 2300, 2800, 1700, 2200, 2900, 3100],
      backgroundColor: '#06b6d4', // cyan-500
    },
    {
      type: 'bar' as const,
      label: 'Admitted Patients',
      data: [1000, 1500, 2800, 2400, 3100, 4100, 2000, 2700, 1600, 2100, 2700, 3000],
      backgroundColor: '#3b82f6', // blue-500
    },
    {
      type: 'line' as const,
      label: 'Cost',
      data: [500, 1000, 1500, 1200, 1600, 2500, 1100, 1700, 900, 1500, 2200, 2600],
      borderColor: '#fb923c', // orange-400
      borderWidth: 2,
      fill: false,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ComboChart = () => {
  return <Chart type='bar' data={data} options={options} />;
};

export default ComboChart;
