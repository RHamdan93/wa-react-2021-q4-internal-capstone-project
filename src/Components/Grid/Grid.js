import styled from "styled-components";
import GridItem from "./GridItem";
import GridPagination from "./GridPagination";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
  min-width: 0;
`;

const Grid = ({ gridItems, page, setPage }) => {
  return (
    <div role="grid">
      <GridContainer>
        {gridItems.results &&
          gridItems.results.map((gridItem) => (
            <GridItem key={gridItem.id} {...gridItem} />
          ))}
      </GridContainer>
      {page && (
        <GridPagination
          {...{ page, setPage, totalPages: gridItems.total_pages }}
        />
      )}
    </div>
  );
};

export default Grid;
