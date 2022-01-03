import { useState } from "react";
import { screen, render, within, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Header from "../../Header/Header";
import { Route, Routes } from "react-router-dom";
import ShoppingCartContext from "../../../state/ShoppingCartContext";

const TestComponentWithContext = ({ route }) => {
  const [items, setItems] = useState([]);

  return (
    <Router initialEntries={[route]}>
      <ShoppingCartContext.Provider value={{ items, setItems }}>
        <Header />
        <Routes>
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </ShoppingCartContext.Provider>
    </Router>
  );
};

describe("when product detail page is mounted", () => {
  const route = "/products/YWL8XBIAAC0AzuPZ";
  const noStockProductRoute = "/products/YWI42hIAACwAy3ld";

  it("must display product data", async () => {
    render(
      <Router initialEntries={[route]}>
        <Routes>
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    );

    const productImages = await screen.findAllByRole("img");
    const productCategory = await screen.findByText(/category/i);

    const productName = screen.getByText(/Tallulah Sofa Gray/i);
    const productPrice = screen.getByText(/\$/i);
    const productSku = screen.getByText(/sku/i);
    const productLabels = screen.getByText(/labels/i);
    const productDescription = screen.getByText(/A low profile sets the/i);

    const specsTable = screen.getByRole("table");
    const specsRows = within(specsTable).getAllByRole("row");
    const specsColumnHeaders = within(specsTable).getAllByRole("columnheader");

    expect(productImages.length).toEqual(8);
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productSku).toBeInTheDocument();
    expect(productCategory).toBeInTheDocument();
    expect(productLabels).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(specsTable).toBeInTheDocument();
    expect(specsRows.length).toEqual(7);
    expect(specsColumnHeaders.length).toEqual(2);
  });

  it("must contain quantity selector and add to cart", async () => {
    render(
      <Router initialEntries={[route]}>
        <Routes>
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    );

    const quantityInput = await screen.findByLabelText(/quantity/i);
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });

    expect(quantityInput).toBeInTheDocument();
    expect(addToCartButton).toBeInTheDocument();
  });

  it("must add quantity to cart after pressing add to cart button", async () => {
    render(<TestComponentWithContext route={route} />);

    const quantityInput = await screen.findByLabelText(/quantity/i);

    fireEvent.input(quantityInput, { target: { value: 5 } });

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });

    fireEvent.click(addToCartButton);

    const header = screen.getByRole("banner");
    const shopCartBadge = within(header).getByRole("link", { name: /badge/i });
    const shopCartCounter = await within(shopCartBadge).findByText(/\d+/i);

    expect(shopCartCounter).toBeInTheDocument();
    expect(shopCartCounter).toHaveTextContent(5);
  });

  it("must disable add to cart button when product has no stock", async () => {
    render(
      <Router initialEntries={[noStockProductRoute]}>
        <Routes>
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    );

    const addToCartButton = await screen.findByRole("button", {
      name: /add to cart/i,
    });

    expect(addToCartButton).toBeDisabled();
  });
});
