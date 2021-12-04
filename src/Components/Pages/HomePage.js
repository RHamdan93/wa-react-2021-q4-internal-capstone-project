import Slideshow from "../Slider/Slideshow";
import Grid from "../Grid/Grid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

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
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useProductCategories();
  const { data: featuredProductsData, isLoading: isLoadingFeaturedProducts } =
    useFeaturedProducts();

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

    let categoryDictionary = Object.fromEntries(
      categoriesData.results.map((category) => [
        category.id,
        category.data.name,
      ])
    );

    if (isLoadingFeaturedProducts === false) {
      featuredProductsData.results.forEach((product) => {
        product.data.category.name =
          categoryDictionary[product.data.category.id];
      });
    }
  }

  return (
    <>
      <Slideshow slides={featuredBannersSlides} />
      <Slideshow slides={productCategoriesSlides} />
      {!isLoadingFeaturedProducts && <Grid gridItems={featuredProductsData} />}
      <AllProductsLink to="/products">View All Products</AllProductsLink>
    </>
  );
};

export default HomePage;
