
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  if (!data || !data.labels) return <div>Loading...</div>;

  return (
    <div className="charts">
      <h2>Pie Chart</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

