import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductById } from "../../../utils/hooks/API/useProductById";
import Slideshow from "../../Slider/Slideshow";
import { useState } from "react";
import ShopcartButton from "../../ShopcartButton/ShopcartButton";
import { usePopulateProducsWithCategories } from "../../../utils/usePopulateProducsWithCategories";
import ProductDetailsSpecs from "./ProductDetailsSpecs";

const ProductLabel = styled.label`
  display: block;
`;

const ProductDetails = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);

  const {
    productsData: { results },
    isLoadingProducts,
    isLoadingCategories,
  } = usePopulateProducsWithCategories(useProductById, params.productId);

  let productSlides = [];
  let product = null;
  let productData = null;

  if (isLoadingProducts === false) {
    [product] = results;
    ({ data: productData } = product);

    productSlides = productData.images.map(({ image }) => ({
      text: "",
      url: image.url,
      alt: image.alt,
    }));
  }

  return (
    <>
      {!isLoadingProducts && (
        <>
          <Slideshow slides={productSlides}></Slideshow>
          <ProductLabel>{productData.name}</ProductLabel>
          <ProductLabel>${productData.price}</ProductLabel>
          <ProductLabel>SKU: {productData.sku}</ProductLabel>
          <ProductLabel>Stock: {productData.stock}</ProductLabel>
          {!isLoadingCategories && (
            <ProductLabel>Category: {productData.category.name}</ProductLabel>
          )}
          <ProductLabel>
            Labels:
            {results[0].tags.join(", ")}
          </ProductLabel>
          <p>{productData.description[0].text}</p>
          <label>Quantity:</label>
          <input
            type="number"
            defaultValue="1"
            min="1"
            onInput={(event) => setQuantity(parseInt(event.target.value))}
          />
          <ShopcartButton {...{ product, quantity }} />
          <ProductDetailsSpecs {...{ specs: productData.specs }} />
        </>
      )}
    </>
  );
};

export default ProductDetails;
