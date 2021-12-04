import styled from "styled-components";
import GridItem from "./GridItem";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
  min-width: 0;
`;

const Grid = ({ gridItems }) => {
  return (
    <div>
      <GridContainer>
        {gridItems.results !== undefined &&
          gridItems.results.map((gridItem) => (
            <GridItem key={gridItem.id} {...gridItem} />
          ))}
      </GridContainer>
      <div>
        <button>&lt;</button>
        <span>1</span>
        <button>&gt;</button>
      </div>
    </div>
  );
};

export default Grid;
