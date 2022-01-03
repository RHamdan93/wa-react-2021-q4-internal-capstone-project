import { calculateShopcartTotal } from "../../../utils/utils";

const CheckoutSummaryTable = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ product, quantity }) => (
          <tr key={product.id}>
            <td>{product.data.name}</td>
            <td>{quantity}</td>
            <td>${product.data.price * quantity}</td>
          </tr>
        ))}
        <tr>
          <td>Total: ${calculateShopcartTotal(items)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CheckoutSummaryTable;
