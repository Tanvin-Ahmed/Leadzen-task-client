import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

const LIMIT = 3;

const Pagination: React.FC<PaginationProps> = ({
  hasNext,
  hasPrevious,
  totalPages,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const offset = queryParams.get("offset");
  const search = queryParams.get("search") || "";

  const handleNext = () => {
    navigate(
      `/?limit=${LIMIT}&offset=${Number(offset) + LIMIT}&search=${search}`
    );
  };

  const handlePrev = () => {
    navigate(
      `/?limit=${LIMIT}&offset=${Number(offset) - LIMIT}&search=${search}`
    );
  };

  const handlePageNumberClick = (page: number) => {
    navigate(`/?limit=${LIMIT}&offset=${(page - 1) * LIMIT}&search=${search}`);
  };

  return (
    <div>
      <ul className="pagination">
        <li className={`page-item ${hasPrevious ? "" : "disabled"}`}>
          <button className="page-link" onClick={handlePrev}>
            &laquo;
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (n: number) => (
            <li key={n} className="page-item active">
              <button
                className="page-link"
                onClick={() => handlePageNumberClick(n)}
              >
                {n}
              </button>
            </li>
          )
        )}
        <li className={`page-item ${hasNext ? "" : "disabled"}`}>
          <button className="page-link" onClick={handleNext}>
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
