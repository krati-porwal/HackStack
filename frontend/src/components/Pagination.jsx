import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  totalItems = 100,
  itemsPerPage = 10,
  onPageChange,
  onItemsPerPageChange,
  showItemsPerPage = true,
  showPageInfo = true,
  variant = "default" // default, compact, simple
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value);
    onItemsPerPageChange(newItemsPerPage);
  };

  if (variant === "simple") {
    return (
      <div className="d-flex justify-content-center align-items-center gap-2">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        
        <span className="text-muted">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="d-flex justify-content-between align-items-center">
        {showPageInfo && (
          <div className="text-muted small">
            Showing {startItem}-{endItem} of {totalItems} items
          </div>
        )}
        
        <div className="d-flex align-items-center gap-2">
          {showItemsPerPage && (
            <div className="d-flex align-items-center gap-2">
              <label className="text-muted small mb-0">Show:</label>
              <select
                className="form-select form-select-sm"
                style={{ width: 'auto' }}
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
          )}
          
          <nav aria-label="Page navigation">
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
              </li>
              
              {getPageNumbers().map((page, index) => (
                <li key={index} className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                    disabled={page === '...'}
                  >
                    {page}
                  </button>
                </li>
              ))}
              
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-between align-items-center py-3">
      {/* Page Info */}
      {showPageInfo && (
        <div className="text-muted">
          Showing <strong>{startItem}</strong> to <strong>{endItem}</strong> of <strong>{totalItems}</strong> results
        </div>
      )}

      {/* Pagination Controls */}
      <div className="d-flex align-items-center gap-3">
        {/* Items Per Page Selector */}
        {showItemsPerPage && (
          <div className="d-flex align-items-center gap-2">
            <label className="text-muted mb-0">Items per page:</label>
            <select
              className="form-select form-select-sm"
              style={{ width: 'auto' }}
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        )}

        {/* Page Navigation */}
        <nav aria-label="Page navigation">
          <ul className="pagination mb-0">
            {/* First Page */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                title="First page"
              >
                <i className="bi bi-chevron-double-left"></i>
              </button>
            </li>

            {/* Previous Page */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                title="Previous page"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
            </li>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              <li key={index} className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => typeof page === 'number' && handlePageChange(page)}
                  disabled={page === '...'}
                >
                  {page}
                </button>
              </li>
            ))}

            {/* Next Page */}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                title="Next page"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </li>

            {/* Last Page */}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                title="Last page"
              >
                <i className="bi bi-chevron-double-right"></i>
              </button>
            </li>
          </ul>
        </nav>

        {/* Page Jump */}
        <div className="d-flex align-items-center gap-2">
          <label className="text-muted small mb-0">Go to:</label>
          <input
            type="number"
            className="form-control form-control-sm"
            style={{ width: '60px' }}
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                handlePageChange(page);
              }
            }}
          />
          <span className="text-muted small">of {totalPages}</span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
