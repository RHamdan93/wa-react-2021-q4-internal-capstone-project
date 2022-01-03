import React from "react";
import { screen, render, within } from "@testing-library/react";
import HomePage from "./HomePage";
import { MemoryRouter as Router } from "react-router-dom";

describe("when home page is mounted", () => {
  it("must display featured products slideshow", async () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    const slideshow = await screen.findByRole("list", {
      name: /featured banners/i,
    });
    const slides = within(slideshow).getAllByRole("img");

    expect(slideshow).toBeInTheDocument();
    slides.forEach((slide) => expect(slide).toBeInTheDocument());
  });

  it("must display categories slideshow", async () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    const slideshow = await screen.findByRole("list", {
      name: /product categories/i,
    });
    const slides = within(slideshow).getAllByRole("img");

    expect(slideshow).toBeInTheDocument();
    slides.forEach((slide) => expect(slide).toBeInTheDocument());
  });

  it("must display featured products grid", async () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    const productGrid = await screen.findByRole("grid");
    const productGridCells = within(productGrid).getAllByRole("gridcell");

    expect(productGrid).toBeInTheDocument();
    productGridCells.forEach((cell) => expect(cell).toBeInTheDocument());
  });
});
