

import React from 'react';
import './Controls.css';

const Controls = ({ year, month, onYearChange, onMonthChange, search, onSearchChange }) => {
  return (
    <div className="controls">
      <div className="selects">
        <label htmlFor="year">Select Year:</label>
        <select id="year" value={year} onChange={onYearChange}>
          {[...Array(10).keys()].map((i) => {
            const y = new Date().getFullYear() - i;
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>

        <label htmlFor="month">Select Month:</label>
        <select id="month" value={month} onChange={onMonthChange}>
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
      </div>

      <div className="search-container">
        <label htmlFor="search">Search transactions:</label>
        <input type="text" value={search} onChange={onSearchChange} placeholder="Search transactions..." />
      </div>
    </div>
  );
};

export default Controls;
