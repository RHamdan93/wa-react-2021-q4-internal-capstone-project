import styled from "styled-components";
import { Link } from "react-router-dom";
import ShopcartButton from "../ShopcartButton/ShopcartButton";

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
  position: relative;

  & img {
    max-width: 40%;
    border-width: 4px;
    border-style: solid;
  }

  & i {
    //  position: absolute;
    right: 5px;
    bottom: 5px;
    text-align: right;
  }
`;

const GridItemTittle = styled(GridItemSection)`
  font-size: 25px;
  font-weight: bold;
`;

const GridItem = (product) => {
  let {
    id,
    data: { name, category, price, mainimage },
  } = product;

  return (
    <GridItemDiv>
      <GridItemTittle>{name}</GridItemTittle>
      <GridItemSection>{`Category: ${category.name}`}</GridItemSection>
      <GridItemSection>{`$${price}`}</GridItemSection>
      <GridItemSection>
        <Link to={`/products/${id}`}>
          <img src={mainimage.url} alt={mainimage.alt} />
        </Link>
        <ShopcartButton {...{ product, quantity: 1 }}></ShopcartButton>
      </GridItemSection>
    </GridItemDiv>
  );
};

export default GridItem;
