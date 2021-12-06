import ShoppingCartContext from "../../state/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  padding: 0 0 10% 0;
  margin: 0 10% 0 10%;
`;

const TransparentLink = styled(Link)`
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

const LinksContainter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Checkout = () => {
  const { items } = useContext(ShoppingCartContext);

  return (
    <CheckoutContainer>
      <form>
        <div>
          <label>Name:</label>
          <input />
        </div>
        <div>
          <label>Email:</label>
          <input />
        </div>
        <div>
          <label>Zip code:</label>
          <input />
        </div>
        <div>
          <label>Order notes:</label>
          <input />
        </div>
        <label>Order Summary:</label>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ product, quantity }, idx) => (
              <tr key={product.id}>
                <td>{product.data.name}</td>
                <td>{quantity}</td>
                <td>${product.data.price * quantity}</td>
              </tr>
            ))}
            <tr>
              <td>
                Total:
                {items
                  .map(({ product, quantity }) => product.data.price * quantity)
                  .reduce((sum, current) => (sum += current), 0)}
              </td>
            </tr>
          </tbody>
        </table>
        <LinksContainter>
          <TransparentLink to="/cart">Go back to cart</TransparentLink>
          <TransparentLink to="/checkout">Place Order</TransparentLink>
        </LinksContainter>
      </form>
    </CheckoutContainer>
  );
};

export default Checkout;
