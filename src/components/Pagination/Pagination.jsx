import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ totalPages = 3, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (onPageChange) onPageChange(page, itemsPerPage);
    }
  };

  return (
    <div className="pagination-container">
  
      <div className="items-per-page">
        Show{" "}
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      
      <div className="pagination-buttons">
        <button
          className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
