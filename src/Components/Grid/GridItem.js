import { Link } from "react-router-dom";
import ShopcartButton from "../ShopcartButton/ShopcartButton";
import { GridItemDiv, GridItemSection, GridItemTitle } from "./GridItem.styles";

const GridItem = (product) => {
  let {
    id,
    data: { name, category, price, mainimage },
  } = product;

  return (
    <GridItemDiv>
      <GridItemTitle>{name}</GridItemTitle>
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
