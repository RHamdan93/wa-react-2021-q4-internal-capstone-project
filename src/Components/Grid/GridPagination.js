import styled from "styled-components";

const PaginationArrow = styled.button`
  border-radius: 10px;
  font-weight: bold;
  background-color: #d3eafd;
`;

const PaginationLabel = styled.span`
  font-weight: bold;
  margin: 0 10px 0 10px;
`;

const GridPagination = ({ page, setPage, totalPages }) => {
  return (
    <div role="region" aria-label="Pagination">
      <PaginationArrow
        disabled={page <= 1}
        aria-label="Previous"
        onClick={() => setPage(page - 1)}
      >
        &lt;
      </PaginationArrow>
      <PaginationLabel>{page}</PaginationLabel>
      <PaginationArrow
        disabled={page >= totalPages}
        aria-label="Next"
        onClick={() => setPage(page + 1)}
      >
        &gt;
      </PaginationArrow>
    </div>
  );
};

export default GridPagination;
