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
    <div>
      <GridContainer>
        {gridItems.results.map((gridItem) => {
          const { name, category, price, mainimage } = gridItem.data;

          return (
            <GridItemDiv key={gridItem.id}>
              <p>{name}</p>
              <p>{`Category: ${category.name}`}</p>
              <p>{`$${price}`}</p>
              <img
                style={{ maxWidth: "100%" }}
                src={mainimage.url}
                alt={mainimage.alt}
              ></img>
            </GridItemDiv>
          );
        })}
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
