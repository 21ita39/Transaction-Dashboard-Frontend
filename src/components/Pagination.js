
import React from 'react';
import './Pagination.css';

const Pagination = ({ page, totalPages, onPrevPage, onNextPage }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevPage} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={onNextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

