import { screen, render, within } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import SearchResults from "./SearchResults";
import { Route, Routes } from "react-router-dom";

describe("when search results page is mounted", () => {
  const route = "/search?q=gray";
  const noResultsRoute = "/search?q=noresults";

  it("must display results according to search term", async () => {
    render(
      <Router initialEntries={[route]}>
        <Routes>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    );

    const productGrid = await screen.findByRole("grid");
    const productGridCells = within(productGrid).getAllByRole("gridcell");

    expect(productGrid).toBeInTheDocument();
    expect(productGridCells).toHaveLength(4);
    productGridCells.forEach((cell) => expect(cell).toBeInTheDocument());
  });

  it("must display message when no results match search", async () => {
    render(
      <Router initialEntries={[noResultsRoute]}>
        <Routes>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    );

    expect(await screen.findByText(/no results/i)).toBeInTheDocument();
  });
});
