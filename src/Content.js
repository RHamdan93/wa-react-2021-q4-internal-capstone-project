import "./Content.css";
import featuredBannersData from "./mocks/en-us/featured-banners.json";
import productCategoriesData from "./mocks/en-us/product-categories.json";
import featuredProductsData from "./mocks/en-us/featured-products.json";
import productsData from "./mocks/en-us/products.json";
import HomePage from "./HomePage";
import ProductList from "./ProductList";
import * as Constants from "./Constants";

const Content = ({ currentPage, setCurrentPage }) => {
  //#region Prepare mock data
  //******featured banners******
  let featuredBannersSlides = featuredBannersData.results.map((banner) => ({
    text: banner.data.title,
    url: banner.data.main_image.url,
    alt: banner.data.main_image.alt,
  }));

  //******categories******
  let productCategoriesSlides = productCategoriesData.results.map((banner) => ({
    text: banner.data.name,
    url: banner.data.main_image.url,
    alt: banner.data.main_image.alt,
  }));

  //generate category dictionary
  let categoryDictionary = Object.fromEntries(
    productCategoriesData.results.map((category) => [
      category.id,
      category.data.name,
    ])
  );

  //******all products******
  productsData.results.forEach((product) => {
    product.data.category.name = categoryDictionary[product.data.category.id];
  });

  //******featured products******
  featuredProductsData.results.forEach((product) => {
    product.data.category.name = categoryDictionary[product.data.category.id];
  });
  //#endregion

  let page = undefined;

  switch (currentPage) {
    case Constants.sitePages.HOME:
      page = (
        <HomePage
          {...{
            featuredProductsData,
            productCategoriesSlides,
            featuredBannersSlides,
            setCurrentPage,
          }}
        />
      );
      break;
    case Constants.sitePages.ALLPRODUCTS:
      page = (
        <ProductList
          products={productsData}
          filterTypes={productCategoriesData.results}
        />
      );
      break;
    default:
      page = <h1>Invalid page!</h1>;
      break;
  }

  return <section className="content">{page}</section>;
};

export default Content;
