import QuantityInput from "../../QuantityInput";
import { ProductThumbnail } from "./ShoppingCart.styles";

const ShoppingCartRow = ({
  idx,
  quantity,
  product: { data },
  updateQuantityHandler,
  removeItemClickHandler,
}) => {
  return (
    <tr>
      <td>
        <ProductThumbnail src={data.mainimage.url} alt={data.mainimage.alt} />
      </td>
      <td aria-label="name">{data.name}</td>
      <td aria-label="price">${data.price}</td>
      <td>
        <QuantityInput
          {...{
            max: data.stock,
            onInput: (event) =>
              updateQuantityHandler(data, idx, parseInt(event.target.value)),
          }}
        />
      </td>
      <td aria-label="subtotal">${data.price * quantity}</td>
      <td>
        <button aria-label="remove from cart" onClick={removeItemClickHandler}>
          X
        </button>
      </td>
    </tr>
  );
};

export default ShoppingCartRow;
