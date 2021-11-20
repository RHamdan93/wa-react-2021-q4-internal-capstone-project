import featuredBannersJSON from "./mocks/en-us/featured-banners.json";
import productCategoriesJSON from "./mocks/en-us/product-categories.json";
import featuredProductsJSON from "./mocks/en-us/featured-products.json";
import productsJSON from "./mocks/en-us/products.json";
import HomePage from "./HomePage";
import ProductList from "./ProductList";
import * as Constants from "./Constants";

const Content = ({ currentPage, setCurrentPage }) => {
  //#region Load mock data
  //******featured banners******
  let featuredBannersSlides = JSON.parse(
    JSON.stringify(featuredBannersJSON)
  ).results.map((banner) => ({
    text: banner.data.title,
    url: banner.data.main_image.url,
    alt: banner.data.main_image.alt,
  }));

  //******categories******
  let productCategoriesData = JSON.parse(JSON.stringify(productCategoriesJSON));

  let productCategoriesSlides = productCategoriesData.results.map((banner) => ({
    text: banner.data.name,
    url: banner.data.main_image.url,
    alt: banner.data.main_image.alt,
  }));

  //generate category dictionary
  let categoryDictionary = Object.fromEntries(
    productCategoriesData.results.map((cat) => [cat.id, cat.data.name])
  );

  //******all products******
  let productsData = JSON.parse(JSON.stringify(productsJSON));

  //populate product category name
  productsData.results.map((product) => {
    product.data.category.name = categoryDictionary[product.data.category.id];
    return product;
  });

  //******featured products******
  let featuredProductsData = JSON.parse(JSON.stringify(featuredProductsJSON));

  //populate featured product category name
  featuredProductsData.results.map((product) => {
    product.data.category.name = categoryDictionary[product.data.category.id];
    return product;
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
