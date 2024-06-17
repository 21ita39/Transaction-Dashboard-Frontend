import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const fetchTransactions = async (year, month, search, page, perPage) => {
  const response = await axios.get(`${API_BASE_URL}/api/transactions`, {
    params: { year, month, search, page, perPage }
  });
  return response.data.transactions;
};

export const fetchStatistics = async (year, month) => {
  try{
  const response = await axios.get(`${API_BASE_URL}/api/statistics`, { params: { year, month } });
  return response.data;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error;
  }
};

export const fetchBarChartData = async (year, month) => {
  const response = await axios.get(`${API_BASE_URL}/api/bar-chart`, { params: { year, month } });
  const labels = Object.keys(response.data);
  const data = Object.values(response.data);
  return {
    labels,
    datasets: [{ label: 'Price Range', data, backgroundColor: 'rgba(75,192,192,0.6)' }]
  };
};

export const fetchPieChartData = async (year, month) => {
  const response = await axios.get(`${API_BASE_URL}/api/pie-chart`, { params: { year, month } });
  const labels = Object.keys(response.data);
  const data = Object.values(response.data);
  return {
    labels,
    datasets: [{ label: 'Categories', data, backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'] }]
  };
};
