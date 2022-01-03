import { useState } from "react";
import { screen, render, within, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartContext from "../../../state/ShoppingCartContext";
import Header from "../../Header/Header";
import products from "../../../mocks/en-us/products.json";

const TestComponentWithContext = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  return (
    <Router>
      <ShoppingCartContext.Provider value={{ items, setItems }}>
        <Header />
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    </Router>
  );
};

describe("when shopping cart page is mounted", () => {
  it("must display message when no items in cart", async () => {
    render(
      <Router>
        <ShoppingCart />
      </Router>
    );

    const emptyCartMessage = await screen.findByText(/Cart.*empty/i);

    expect(emptyCartMessage).toBeInTheDocument();
  });

  it("must display products", async () => {
    const initialItems = products.results.slice(0, 3).map((prod) => ({
      quantity: 1,
      product: prod,
    }));

    render(<TestComponentWithContext initialItems={initialItems} />);

    const productsTable = await screen.findByRole("table");
    const productRows = within(productsTable).getAllByRole("row");

    expect(productsTable).toBeInTheDocument();
    productRows.slice(1).forEach((row) => {
      expect(within(row).getByRole("img")).toBeInTheDocument();
      expect(
        within(row).getByRole("cell", { name: /name/i })
      ).toBeInTheDocument();
      expect(
        within(row).getByRole("cell", { name: /price/i })
      ).toBeInTheDocument();
      expect(
        within(row).getByRole("cell", { name: /subtotal/i })
      ).toBeInTheDocument();
      expect(
        within(row).getByRole("spinbutton", { name: /quantity/i })
      ).toBeInTheDocument();
      expect(
        within(row).getByRole("button", { name: /remove/i })
      ).toBeInTheDocument();
    });
  });

  it("must display cart total label with matching sum of subtotals", async () => {
    const initialItems = products.results.slice(0, 3).map((prod) => ({
      quantity: 2,
      product: prod,
    }));

    render(<TestComponentWithContext initialItems={initialItems} />);

    const totalLabel = await screen.findByText(/total/i);

    const expectedTotal = initialItems.reduce(
      (sum, { quantity, product }) => (sum += product.data.price * quantity),
      0
    );

    expect(totalLabel).toBeInTheDocument();
    expect(totalLabel).toHaveTextContent(expectedTotal);
  });

  it("must allow quantity of items to be updated without going over the product's stock limit", async () => {
    const initialItems = products.results.slice(0, 1).map((prod) => ({
      quantity: 2,
      product: prod,
    }));
    const stockLimit = initialItems[0].product.data.stock;

    render(<TestComponentWithContext initialItems={initialItems} />);

    const productsTable = await screen.findByRole("table");
    const quantityInput = within(productsTable).getByRole("spinbutton", {
      name: /quantity/i,
    });

    const header = screen.getByRole("banner");
    const shopCartBadge = within(header).getByRole("link", { name: /badge/i });
    const shopCartCounter = await within(shopCartBadge).findByText(/\d+/i);

    for (let i = 8; i <= stockLimit + 1; i++) {
      fireEvent.input(quantityInput, { target: { value: i } });

      console.log(`stock:${stockLimit}, i:${i}`);
      expect(shopCartCounter).toHaveTextContent(Math.min(stockLimit, i));
    }
  });

  it("must allow items to be removed from the shopping cart", async () => {
    const initialItems = products.results.slice(0, 2).map((prod) => ({
      quantity: 1,
      product: prod,
    }));

    render(<TestComponentWithContext initialItems={initialItems} />);

    const productsTable = await screen.findByRole("table");
    const [, productRow] = within(productsTable).getAllByRole("row");
    const removeItemButton = within(productRow).getByRole("button", {
      name: /remove/i,
    });

    fireEvent.click(removeItemButton);

    expect(productRow).not.toBeInTheDocument();
  });
});
