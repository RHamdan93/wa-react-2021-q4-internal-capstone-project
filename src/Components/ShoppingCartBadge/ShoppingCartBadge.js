import ShoppingCartContext from "../../state/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ShopcartIcon,
  ShopcartItemCountBadge,
} from "./ShoppingCartBadge.styles";

const ShoppingCartBadge = () => {
  const { items } = useContext(ShoppingCartContext);

  return (
    <div>
      <Link to="/cart" aria-label="shopping cart badge">
        <ShopcartIcon className="fas fa-shopping-cart">
          {items.length > 0 && (
            <ShopcartItemCountBadge aria-label="shopping cart item count">
              {items
                .map((item) => item.quantity)
                .reduce((acumulator, current) => acumulator + current)}
            </ShopcartItemCountBadge>
          )}
        </ShopcartIcon>
      </Link>
    </div>
  );
};

export default ShoppingCartBadge;
