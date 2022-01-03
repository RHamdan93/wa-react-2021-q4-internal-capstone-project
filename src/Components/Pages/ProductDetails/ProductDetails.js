import { useParams } from "react-router-dom";
import { useProductById } from "../../../utils/hooks/API/useProductById";
import Slideshow from "../../Slider/Slideshow";
import { useState } from "react";
import ShopcartButton from "../../ShopcartButton/ShopcartButton";
import { usePopulateProducsWithCategories } from "../../../utils/usePopulateProducsWithCategories";
import ProductDetailsSpecs from "./ProductDetailsSpecs";
import ProductInfo from "./ProductInfo";
import QuantityInput from "../../QuantityInput";

const ProductDetails = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);

  const {
    productsData: { results },
    isLoadingProducts,
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
          <ProductInfo {...{ product: productData, tags: results[0].tags }} />
          <QuantityInput
            {...{
              showLabel: true,
              max: productData.stock,
              onInput: (event) => setQuantity(parseInt(event.target.value)),
            }}
          />
          <ShopcartButton {...{ product, quantity }} />
          <ProductDetailsSpecs {...{ specs: productData.specs }} />
        </>
      )}
    </>
  );
};

export default ProductDetails;
