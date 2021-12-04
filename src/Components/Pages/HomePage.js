import Slideshow from "../Slider/Slideshow";
import Grid from "../Grid/Grid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFeaturedBanners } from "../../utils/hooks/API/useFeaturedBanners";
import { useFeaturedProducts } from "../../utils/hooks/API/useFeaturedProducts";
import { usePopulateProducsWithCategories } from "../../utils/usePopulateProducsWithCategories";

const AllProductsLink = styled(Link)`
  display: inline-block;
  margin: 20px 0 20px 0;
  padding: 5px 20px 5px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  border-radius: 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const HomePage = () => {
  const { data: featuredBannersData, isLoading: isLoadingFeaturedBanners } =
    useFeaturedBanners();

  const {
    productsData,
    categoriesData,
    isLoadingProducts,
    isLoadingCategories,
  } = usePopulateProducsWithCategories(useFeaturedProducts);

  let featuredBannersSlides = [];
  let productCategoriesSlides = [];

  if (isLoadingFeaturedBanners === false) {
    featuredBannersSlides = featuredBannersData.results.map((banner) => ({
      text: banner.data.title,
      url: banner.data.main_image.url,
      alt: banner.data.main_image.alt,
    }));
  }

  if (isLoadingCategories === false) {
    productCategoriesSlides = categoriesData?.results?.map((banner) => ({
      text: banner.data.name,
      url: banner.data.main_image.url,
      alt: banner.data.main_image.alt,
      navigateTo: `/products?category=${banner.id}`,
    }));
  }

  return (
    <>
      <Slideshow slides={featuredBannersSlides} />
      <Slideshow slides={productCategoriesSlides} />
      {!isLoadingProducts && <Grid {...{ gridItems: productsData }} />}
      <AllProductsLink to="/products">View All Products</AllProductsLink>
    </>
  );
};

export default HomePage;
