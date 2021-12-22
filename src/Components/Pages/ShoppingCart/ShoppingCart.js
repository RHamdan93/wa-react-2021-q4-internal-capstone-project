import ShoppingCartContext from "../../../state/ShoppingCartContext";
import { useContext } from "react";
import styled from "styled-components";
import replaceInArray from "../../../utils/replaceInArray";
import { Link } from "react-router-dom";

const ProductThumbnail = styled.img`
  width: 20%;
`;

const ProceedToCheckoutButton = styled(Link)`
  display: inline-block;
  margin: 20px 0 20px 0;
  padding: 5px 20px 5px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  border-radius: 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const ShoppingCart = () => {
  const UpdatedQuantityHandler = (product, idx, newQuantity) => {
    if (newQuantity > product.data.stock) return;

    let updatedItem = {
      ...items[idx],
      quantity: newQuantity,
    };

    setItems(replaceInArray(updatedItem, idx, items));
  };

  const { items, setItems } = useContext(ShoppingCartContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ product, quantity }, idx) => (
            <tr key={product.id}>
              <td>
                <ProductThumbnail
                  src={product.data.mainimage.url}
                  alt={product.data.mainimage.alt}
                />
              </td>
              <td>{product.data.name}</td>
              <td>${product.data.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onInput={(event) =>
                    UpdatedQuantityHandler(
                      product,
                      idx,
                      parseInt(event.target.value)
                    )
                  }
                />
              </td>
              <td>${product.data.price * quantity}</td>
              <td>
                <button
                  onClick={() =>
                    setItems(
                      items.filter((item) => item.product.id !== product.id)
                    )
                  }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <span>
          Total:
          {items
            .map(({ product, quantity }) => product.data.price * quantity)
            .reduce((sum, current) => (sum += current), 0)}
        </span>
        <div>
          <ProceedToCheckoutButton to="/checkout">
            Proceed to checkout
          </ProceedToCheckoutButton>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
