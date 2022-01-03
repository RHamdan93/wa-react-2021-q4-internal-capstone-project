import ShoppingCartContext from "../../../state/ShoppingCartContext";
import { useContext } from "react";
import replaceInArray from "../../../utils/replaceInArray";
import { calculateShopcartTotal } from "../../../utils/utils";
import {
  CartEmptyMessage,
  ProductTable,
  ProceedToCheckoutButton,
} from "./ShoppingCart.styles";
import ShoppingCartRow from "./ShoppingCartRow";

const ShoppingCart = () => {
  const UpdatedQuantityHandler = (productData, idx, newQuantity) => {
    if (newQuantity > productData.stock) return;

    let updatedItem = {
      ...items[idx],
      quantity: newQuantity,
    };

    setItems(replaceInArray(updatedItem, idx, items));
  };

  const { items, setItems } = useContext(ShoppingCartContext);

  return (
    <>
      {items.length === 0 ? (
        <CartEmptyMessage>Cart is currently empty</CartEmptyMessage>
      ) : (
        <div>
          <ProductTable>
            <thead>
              <tr>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ product, quantity }, idx) => (
                <ShoppingCartRow
                  key={product.id}
                  {...{
                    idx,
                    product,
                    quantity,
                    updateQuantityHandler: UpdatedQuantityHandler,
                    removeItemClickHandler: () =>
                      setItems(
                        items.filter((item) => item.product.id !== product.id)
                      ),
                  }}
                />
              ))}
            </tbody>
          </ProductTable>
          <div>
            <span>Total: ${calculateShopcartTotal(items)}</span>
            <div>
              <ProceedToCheckoutButton to="/checkout">
                Proceed to checkout
              </ProceedToCheckoutButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
