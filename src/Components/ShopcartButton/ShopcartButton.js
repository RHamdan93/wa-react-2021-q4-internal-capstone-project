import styled from "styled-components";
import ShoppingCartContext from "../../state/ShoppingCartContext";
import { useContext } from "react";

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

const ShopcartButton = ({ product, quantity: addedQuantity }) => {
  const addItemToShopcart = () => {
    let shopcartRecordIdx = items.findIndex(
      (item) => item.product.id === product.id
    );

    if (shopcartRecordIdx < 0) {
      let newShopcartRecord = {
        quantity: Math.min(product.data.stock, addedQuantity),
        product: product,
      };
      setItems([...items, newShopcartRecord]);
    } else {
      setItems([
        ...items.slice(0, shopcartRecordIdx),
        {
          ...items[shopcartRecordIdx],
          quantity: Math.min(
            product.data.stock,
            items[shopcartRecordIdx].quantity + addedQuantity
          ),
        },
        ...items.slice(
          Math.min(items.length, shopcartRecordIdx + 1),
          items.length
        ),
      ]);
    }
  };
  const { items, setItems } = useContext(ShoppingCartContext);

  return (
    <AddToShopcartButton
      className="fas fa-cart-plus"
      disabled={product.data.stock === 0}
      onClick={() => addItemToShopcart()}
    ></AddToShopcartButton>
  );
};

export default ShopcartButton;
