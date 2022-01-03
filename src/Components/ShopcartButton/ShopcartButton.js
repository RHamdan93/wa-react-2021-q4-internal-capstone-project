import styled from "styled-components";
import ShoppingCartContext from "../../state/ShoppingCartContext";
import { useContext } from "react";
import replaceInArray from "../../utils/replaceInArray";

const AddToShopcartButton = styled.button`
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

  &:disabled {
    background-color: rgba(175, 175, 175);
  }
`;

const addItemToShopcart = (product, addedQuantity, shopCartItems) => {
  let shopcartRecordIdx = shopCartItems.findIndex(
    (item) => item.product.id === product.id
  );

  if (shopcartRecordIdx < 0) {
    let newShopcartRecord = {
      quantity: Math.min(product.data.stock, addedQuantity),
      product: product,
    };
    return [...shopCartItems, newShopcartRecord];
  } else {
    let updatedItem = {
      ...shopCartItems[shopcartRecordIdx],
      quantity: Math.min(
        product.data.stock,
        shopCartItems[shopcartRecordIdx].quantity + addedQuantity
      ),
    };

    return replaceInArray(updatedItem, shopcartRecordIdx, shopCartItems);
  }
};

const ShopcartButton = ({ product, quantity: addedQuantity }) => {
  const { items, setItems } = useContext(ShoppingCartContext);

  return (
    <AddToShopcartButton
      aria-label="add to cart"
      className="fas fa-cart-plus"
      disabled={product.data.stock === 0}
      onClick={() => setItems(addItemToShopcart(product, addedQuantity, items))}
    ></AddToShopcartButton>
  );
};

export default ShopcartButton;
