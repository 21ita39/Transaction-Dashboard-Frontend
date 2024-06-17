
import React from 'react';
import './Statistics.css';
import { Link } from 'react-router-dom';

const Statistics = ({ data }) => {
  if (!data) return <div>No statistics available.</div>;

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total Sale Amount: {data.totalSaleAmount}</p>
      <p>Total Sold Items: {data.totalSoldItems}</p>
      <p>Total Not Sold Items: {data.totalNotSoldItems}</p>
      <div className="navigation">
        <button>
          <Link to="/bar-chart">View Bar Chart</Link>
        </button>
        <button>
          <Link to="/pie-chart">View Pie Chart</Link>
        </button>
      </div>
    </div>
  );
};

export default Statistics;

