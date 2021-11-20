import Slideshow from "./Slider/Slideshow";
import Grid from "./Grid";
import featuredBannersJSON from "./mocks/en-us/featured-banners.json";
import productCategoriesJSON from "./mocks/en-us/product-categories.json";
import featuredProductsJSON from "./mocks/en-us/featured-products.json";

const Content = () => {
  var featuredBannersSlides = JSON.parse(
    JSON.stringify(featuredBannersJSON)
  ).results.map((banner) => ({
    text: banner.data.title,
    url: banner.data.main_image.url,
    alt: banner.data.main_image.alt,
  }));

  var productCategoriesData = JSON.parse(JSON.stringify(productCategoriesJSON));

  var productCategoriesSlides = productCategoriesData.results.map((banner) => ({
    text: banner.data.name,
    url: banner.data.main_image.url,
    alt: banner.data.main_image.alt,
  }));

  var featuredProductsData = JSON.parse(JSON.stringify(featuredProductsJSON));

  var categoryDictionary = Object.fromEntries(
    productCategoriesData.results.map((cat) => [cat.id, cat.data.name])
  );

  featuredProductsData.results.map((product) => {
    product.data.category.name = categoryDictionary[product.data.category.id];
    return product;
  });

  return (
    <section className="content">
      <Slideshow slides={featuredBannersSlides} />
      <Slideshow slides={productCategoriesSlides} />
      <Grid gridItems={featuredProductsData} />
    </section>
  );
};

export default Content;
