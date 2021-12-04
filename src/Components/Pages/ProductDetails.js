import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductById } from "../../utils/hooks/useProductById";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import Slideshow from "../Slider/Slideshow";

const ShopcartButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 20px 5px 20px;
  background-color: rgba(0, 150, 255, 0.8);
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  border-radius: 15px;

  &:hover {
    background-color: rgba(0, 150, 255, 0.2);
  }
`;

const ProductLabel = styled.label`
  display: block;
`;

const ProductDetails = () => {
  const params = useParams();

  const { data: categoriesData, isLoading: isLoadingCategories } =
    useProductCategories();

  const {
    data: { results },
    isLoading: isLoadingProduct,
  } = useProductById(params.productId);

  let productSlides = [];
  let product = null;

  let category = "";

  if (isLoadingProduct === false) {
    let [{ data: productData }] = results;

    product = productData;

    productSlides = productData.images.map(({ image }) => ({
      text: "",
      url: image.url,
      alt: image.alt,
    }));

    if (isLoadingCategories === false) {
      let productCategory = categoriesData.results.find(
        (category) => category.id === productData.category.id
      );
      category = productCategory.data.name;
    }
  }

  return (
    <>
      {!isLoadingProduct && (
        <>
          <Slideshow slides={productSlides}></Slideshow>
          <ProductLabel>{product.name}</ProductLabel>
          <ProductLabel>{product.price}</ProductLabel>
          <ProductLabel>SKU: {product.sku}</ProductLabel>
          <ProductLabel>Category: {category}</ProductLabel>
          <ProductLabel>
            Labels:
            {results[0].tags.map((tag, idx) => (
              <label key={idx}>{tag},</label>
            ))}
          </ProductLabel>
          <p>{product.description[0].text}</p>
          <label>Quantity:</label>
          <input type="number" defaultValue="1" />
          <ShopcartButton className="fas fa-cart-plus" />
          <table>
            <thead>
              <tr>
                <th>Spec</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {product.specs.map((spec, idx) => (
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
