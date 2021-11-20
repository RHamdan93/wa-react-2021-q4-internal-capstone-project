import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
  min-width: 0;
`;

const GridItemDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  border: 2px solid black;
`;

const Grid = ({ gridItems }) => {
  return (
    <GridContainer>
      {gridItems.results.map((gridItem) => (
        <GridItemDiv key={gridItem.id}>
          <p>{gridItem.data.name}</p>
          <p>{`Category: ${gridItem.data.category.name}`}</p>
          <p>{`$${gridItem.data.price}`}</p>
          <img
            style={{ maxWidth: "100%" }}
            src={gridItem.data.mainimage.url}
            alt={gridItem.data.mainimage.alt}
          ></img>
        </GridItemDiv>
      ))}
    </GridContainer>
  );
};

export default Grid;
