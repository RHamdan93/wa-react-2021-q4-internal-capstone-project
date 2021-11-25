import Slideshow from "./Slider/Slideshow";
import Grid from "./Grid";
import styled from "styled-components";
import * as Constants from "./Constants";

const AllProductsButton = styled.button`
  margin: 10px 0 10px 0;
  padding: 5px 20px 5px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const HomePage = ({
  featuredProductsData,
  productCategoriesSlides,
  featuredBannersSlides,
  setCurrentPage,
}) => {
  return (
    <>
      <Slideshow slides={featuredBannersSlides} />
      <Slideshow slides={productCategoriesSlides} />
      <Grid gridItems={featuredProductsData} />
      <AllProductsButton
        onClick={() => setCurrentPage(Constants.sitePages.ALLPRODUCTS)}
      >
        View All Products
      </AllProductsButton>
    </>
  );
};

export default HomePage;
