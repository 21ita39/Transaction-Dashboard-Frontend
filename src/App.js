import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import {
  fetchTransactions,
  fetchStatistics,
  fetchBarChartData,
  fetchPieChartData
} from './utils/api';
import Controls from './components/Controls';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear()); // Default to current year
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Default to current month
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(5); // Show 5 items per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [year, month, search, page]); // Dependency array

  const fetchData = async () => {
    setLoading(true);
    try {
      const [transactionsData, statisticsData, barChartData, pieChartData] = await Promise.all([
        fetchTransactions(year, month, search, page, perPage),
        fetchStatistics(year, month),
        fetchBarChartData(year, month),
        fetchPieChartData(year, month),
      ]);

      console.log('Transactions Data:', transactionsData); // Log transactions data
      console.log('Statistics Data:', statisticsData); // Log statistics data
      console.log('Bar Chart Data:', barChartData); // Log bar chart data
      console.log('Pie Chart Data:', pieChartData); // Log pie chart data

      setTransactions(transactionsData);
      setStatistics(statisticsData);
      setBarChartData(barChartData);
      setPieChartData(pieChartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
    setPage(1);
  };

  const handleMonthChange = (event) => {
    setMonth(parseInt(event.target.value));
    setPage(1);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="container">
        <h1>Transactions Dashboard</h1>
        <Controls
          year={year}
          month={month}
          onYearChange={handleYearChange}
          onMonthChange={handleMonthChange}
          search={search}
          onSearchChange={handleSearchChange}
        />
        <Routes>
          <Route path="/" element={<TransactionsTable transactions={transactions} />} />
          <Route path="/api/statistics" element={<Statistics data={statistics} />} />
          <Route path="/api/bar-chart" element={<BarChart data={barChartData} />} />
          <Route path="/api/pie-chart" element={<PieChart data={pieChartData} />} />
        </Routes>

        <Pagination page={page} onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
      </div>
    </Router>
  );
};

export default App;

