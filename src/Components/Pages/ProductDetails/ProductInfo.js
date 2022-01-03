import styled from "styled-components";

const ProductLabel = styled.span`
  display: block;
`;

const ProductInfo = ({ product, tags }) => {
  return (
    <>
      <ProductLabel>{product.name}</ProductLabel>
      <ProductLabel>${product.price}</ProductLabel>
      <ProductLabel>SKU: {product.sku}</ProductLabel>
      <ProductLabel>Stock: {product.stock}</ProductLabel>
      {product.category.name && (
        <ProductLabel>Category: {product.category.name}</ProductLabel>
      )}
      <ProductLabel>Labels: {tags.join(", ")}</ProductLabel>
      <p>{product.description[0].text}</p>
    </>
  );
};

export default ProductInfo;
