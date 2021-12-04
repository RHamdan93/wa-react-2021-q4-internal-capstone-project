import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductById } from "../../utils/hooks/API/useProductById";
import { useProductCategories } from "../../utils/hooks/API/useProductCategories";
import Slideshow from "../Slider/Slideshow";
import ShoppingCartContext from "../../state/ShoppingCartContext";
import { useState, useContext } from "react";
import ShopcartButton from "../ShopcartButton/ShopcartButton";
import { usePopulateProducsWithCategories } from "../../utils/usePopulateProducsWithCategories";

const ProductLabel = styled.label`
  display: block;
`;

const ProductDetails = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const { setItems } = useContext(ShoppingCartContext);

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
            {product.tags.map((tag, idx) => (
              <label key={idx}>{` ${tag},`}</label>
            ))}
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
          <table>
            <thead>
              <tr>
                <th>Spec</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {productData.specs.map((spec, idx) => (
                <tr key={idx}>
                  <td>{spec.spec_name}</td>
                  <td>{spec.spec_value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default ProductDetails;
