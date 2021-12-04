import styled from "styled-components";
import { Link } from "react-router-dom";

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

const ShopcartButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 20px 5px 20px;
  background-color: rgba(0, 150, 255, 0.8);
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  border-radius: 15px;

  &:hover {
    background-color: rgba(0, 150, 255, 0.2);
  }
`;

const GridItem = ({ id, data: { name, category, price, mainimage } }) => {
  return (
    <GridItemDiv>
      <GridItemTittle>{name}</GridItemTittle>
      <GridItemSection>{`Category: ${category.name}`}</GridItemSection>
      <GridItemSection>{`$${price}`}</GridItemSection>
      <GridItemSection>
        <Link to={`/products/${id}`}>
          <img src={mainimage.url} alt={mainimage.alt} />
        </Link>
        <ShopcartButton className="fas fa-cart-plus"></ShopcartButton>
      </GridItemSection>
    </GridItemDiv>
  );
};

export default GridItem;
