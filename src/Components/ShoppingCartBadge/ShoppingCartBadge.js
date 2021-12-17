import styled from "styled-components";
import ShoppingCartContext from "../../state/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ShopcartItemCountBadge = styled.div`
  background-color: red;
  color: white;
  border-radius: 20px;
  position: absolute;
  top: -10px;
  left: -15px;
  font-size: 0.5em;
  padding: 5px;
  width: 1em;
  text-shadow: none;
`;

const ShopcartIcon = styled.i`
  padding: 0 5px 0 10px;
  margin: auto;
  font-size: 200%;
  position: relative;
  color: white;
  text-shadow: 2px 2px 2px rgb(0, 0, 0);
  cursor: pointer;
`;

const ShoppingCartBadge = () => {
  const { items } = useContext(ShoppingCartContext);

  return (
    <div>
      <Link to="/cart">
        <ShopcartIcon className="fas fa-shopping-cart">
          {items.length > 0 && (
            <ShopcartItemCountBadge>
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
