import React from "react";
import { screen, render, within, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ProductList from "./ProductList";

describe("when product list is mounted", () => {
  it("must display category filters", async () => {
    render(
      <Router>
        <ProductList />
      </Router>
    );

    const filterSideBar = await screen.findByRole("list", { name: /filters/i });
    const filterCategories = within(filterSideBar).getAllByRole("listitem");

    expect(filterSideBar).toBeInTheDocument();
    filterCategories.forEach((filter) => expect(filter).toBeInTheDocument());
  });

  it("sidebar must filter by category", async () => {
    render(
      <Router>
        <ProductList />
      </Router>
    );

    const filterSideBar = await screen.findByRole("list", { name: /filters/i });
    const categoryFilterButton = within(filterSideBar).getByRole("button", {
      name: /lighting/i,
    });
    const productGrid = await screen.findByRole("grid");
    const allProductGridCells = within(productGrid).getAllByRole("gridcell");

    fireEvent.click(categoryFilterButton);

    const allProductGridCellsAfterClick =
      within(productGrid).getAllByRole("gridcell");
    const lightningTypeProductGridCells = within(productGrid).getAllByRole(
      "gridcell",
      { name: /lighting/i }
    );

    expect(allProductGridCells.length).toBeGreaterThan(
      allProductGridCellsAfterClick.length
    );
    expect(allProductGridCellsAfterClick).toHaveLength(
      lightningTypeProductGridCells.length
    );
    lightningTypeProductGridCells.forEach((cell) =>
      expect(cell).toBeInTheDocument()
    );
  });

  it("grid correctly generates pagination controls", async () => {
    render(
      <Router>
        <ProductList />
      </Router>
    );

    const productGrid = await screen.findByRole("grid");
    const allProductGridCells = within(productGrid).getAllByRole("gridcell");
    const paginationRegion = await within(productGrid).findByRole("region", {
      name: /pagination/i,
    });
    const previousPageButton = within(paginationRegion).getByRole("button", {
      name: /previous/i,
    });
    const nextPageButton = within(paginationRegion).getByRole("button", {
      name: /next/i,
    });
    const numberLabel = within(paginationRegion).getByText(/\d+/);

    expect(previousPageButton).toBeInTheDocument();
    expect(nextPageButton).toBeInTheDocument();
    expect(numberLabel).toBeInTheDocument();
    expect(allProductGridCells.length).toEqual(12);
  });

  it("grid disables previous page button when on first page", async () => {
    render(
      <Router>
        <ProductList />
      </Router>
    );

    const productGrid = await screen.findByRole("grid");
    const paginationRegion = await within(productGrid).findByRole("region", {
      name: /pagination/i,
    });
    const previousPageButton = within(paginationRegion).getByRole("button", {
      name: /previous/i,
    });

    expect(previousPageButton).toBeDisabled();
  });

  it("grid next page button works as expected", async () => {
    render(
      <Router>
        <ProductList />
      </Router>
    );

    let paginationRegion = null;

    for (let i = 0; i < 3; i++) {
      const productGrid = await screen.findByRole("grid");
      paginationRegion = await within(productGrid).findByRole("region", {
        name: /pagination/i,
      });
      const nextPageButton = within(paginationRegion).getByRole("button", {
        name: /next/i,
      });

      fireEvent.click(nextPageButton);
    }

    const numberLabel = await within(paginationRegion).findByText(/\d+/);

    expect(numberLabel).toHaveTextContent(4);
  });

  it("grid previous page button works as expected", async () => {
    render(
      <Router>
        <ProductList />
      </Router>
    );

    let paginationRegion = null;

    for (let i = 0; i < 3; i++) {
      const productGrid = await screen.findByRole("grid");
      paginationRegion = await within(productGrid).findByRole("region", {
        name: /pagination/i,
      });
      const nextPageButton = within(paginationRegion).getByRole("button", {
        name: /next/i,
      });

      fireEvent.click(nextPageButton);
    }

    for (let i = 0; i < 3; i++) {
      const productGrid = await screen.findByRole("grid");
      paginationRegion = await within(productGrid).findByRole("region", {
        name: /pagination/i,
      });
      let previousPageButton = within(paginationRegion).getByRole("button", {
        name: /previous/i,
      });

      fireEvent.click(previousPageButton);
    }

    const numberLabel = await within(paginationRegion).findByText(/\d+/);

    expect(numberLabel).toHaveTextContent(1);
  });

  it("grid disables next page button when on last page", async () => {
    render(
      <Router>
        <ProductList />
      </Router>
    );

    let nextPageButton = null;

    for (let i = 0; i < 7; i++) {
      const productGrid = await screen.findByRole("grid");
      const paginationRegion = await within(productGrid).findByRole("region", {
        name: /pagination/i,
      });
      nextPageButton = within(paginationRegion).getByRole("button", {
        name: /next/i,
      });

      fireEvent.click(nextPageButton);
    }

    expect(nextPageButton).toBeDisabled();
  });
});
