import styled from "styled-components";

const GridItemDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border: 2px solid black;
  margin: 5px;
`;

const GridItemSection = styled.div`
  margin: 0 0 10px 0;

  & > img {
    max-width: 40%;
    border-width: 4px;
    border-style: solid;
  }
`;

const GridItemTittle = styled(GridItemSection)`
  font-size: 25px;
  font-weight: bold;
`;

const GridItem = ({ name, category, price, mainimage }) => {
  return (
    <GridItemDiv>
      <GridItemTittle>{name}</GridItemTittle>
      <GridItemSection>{`Category: ${category.name}`}</GridItemSection>
      <GridItemSection>{`$${price}`}</GridItemSection>
      <GridItemSection>
        <img src={mainimage.url} alt={mainimage.alt}></img>
      </GridItemSection>
    </GridItemDiv>
  );
};

export default GridItem;
