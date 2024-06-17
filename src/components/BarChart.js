
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  if (!data || !data.labels) return <div>Loading...</div>;

  return (
    <div className="charts">
      <h2>Bar Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;

