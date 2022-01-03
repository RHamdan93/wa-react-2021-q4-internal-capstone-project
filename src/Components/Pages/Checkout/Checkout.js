import ShoppingCartContext from "../../../state/ShoppingCartContext";
import { useContext } from "react";
import {
  CheckoutContainer,
  LinksContainter,
  TransparentLink,
} from "./Checkout.styles";
import LabeledInput from "../../LabeledInput";
import CheckoutSummaryTable from "./CheckoutSummaryTable";

const Checkout = () => {
  const { items } = useContext(ShoppingCartContext);

  return (
    <CheckoutContainer>
      <form>
        <LabeledInput label="Name:" />
        <LabeledInput label="Email:" />
        <LabeledInput label="Zip code:" />
        <LabeledInput label="Order notes:" />
        <div>Order Summary:</div>
        <CheckoutSummaryTable {...{ items }} />
        <LinksContainter>
          <TransparentLink to="/cart">Go back to cart</TransparentLink>
          <TransparentLink to="/checkout">Place Order</TransparentLink>
        </LinksContainter>
      </form>
    </CheckoutContainer>
  );
};

export default Checkout;
