import Slideshow from "./Slider/Slideshow";
import Grid from "./Grid";
import styled from "styled-components";
import * as Constants from "./Constants";

const AllProductsButton = styled.button``;

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
      <AllProductsButton
        onClick={() => setCurrentPage(Constants.sitePages.ALLPRODUCTS)}
      >
        View All Products
      </AllProductsButton>
      <Grid gridItems={featuredProductsData} />
    </>
  );
};

export default HomePage;
