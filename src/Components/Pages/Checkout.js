import ShoppingCartContext from "../../state/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
/*
4.2. This page should contain the following blocks:
4.2.1. A Form to capture the customer information for their order considering the following:
4.2.1.1. A text input to capture the name of the customer
4.2.1.2. A text input to capture the email of the customer
4.2.1.3. A text input to capture the post/zip code of the customer
4.2.1.4. A textarea to capture the order notes
4.2.2. An order summary table to display the items added to the cart and you should build it considering the following:
4.2.2.1. There should be a row in this table per item/product in the cart.
4.2.2.2. Each row should only show the name of the product, number of items added to cart and the subtotal (unit price x quantity).
4.2.2.3. At the bottom of the table there should be a label to display the cart total (sum of the subtotal’s column) and two buttons, one for “Place order” and the other for “Go back to cart”
*/
const Checkout = () => {
  const { items } = useContext(ShoppingCartContext);

  return (
    <div>
      <form>
        <label>Name:</label>
        <input />
        <label>Email:</label>
        <input />
        <label>Zip code:</label>
        <input />
        <label>Order notes:</label>
        <input />
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
        <Link to="/cart">Go back to cart</Link>
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
