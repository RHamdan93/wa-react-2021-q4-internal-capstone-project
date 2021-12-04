import { createContext } from "react";

const ShoppingCartContext = createContext({
  items: [],
  setItems: () => {},
});

export default ShoppingCartContext;
