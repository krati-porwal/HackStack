
const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange = () => {} }) => {
  const pages = [];

  // Create page numbers array
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-auto">
          <nav>
            <ul className="pagination mb-0">
              {/* Previous Button */}
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                  &lt;
                </button>
              </li>

              {/* Page Numbers */}
              {pages.map((page) => (
                <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => onPageChange(page)}>
                    {page}
                  </button>
                </li>
              ))}

              {/* Next Button */}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                  &gt;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;