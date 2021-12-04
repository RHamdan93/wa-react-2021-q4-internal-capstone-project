import styled from "styled-components";
import GridItem from "./GridItem";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
  min-width: 0;
`;

const PaginationArrow = styled.button`
  border-radius: 10px;
  font-weight: bold;
  background-color: #d3eafd;
`;

const PaginationLabel = styled.span`
  font-weight: bold;
  margin: 0 10px 0 10px;
`;

const Grid = ({ gridItems, page, setPage }) => {
  return (
    <div>
      <GridContainer>
        {gridItems.results !== undefined &&
          gridItems.results.map((gridItem) => (
            <GridItem key={gridItem.id} {...gridItem} />
          ))}
      </GridContainer>
      {page !== undefined && (
        <div>
          <PaginationArrow onClick={() => setPage(page - 1)}>
            &lt;
          </PaginationArrow>
          <PaginationLabel>{page}</PaginationLabel>
          <PaginationArrow onClick={() => setPage(page + 1)}>
            &gt;
          </PaginationArrow>
        </div>
      )}
    </div>
  );
};

export default Grid;
