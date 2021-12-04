import "./Content.css";
import HomePage from "../Pages/HomePage";
import ProductList from "../Pages/ProductList";
import ProductDetails from "../Pages/ProductDetails";
import SearchResults from "../Pages/SearchResults";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/search?q={searchTerm}" element={<SearchResults />} />
        <Route path="*" element={<h1>Invalid page!</h1>} />
      </Routes>
    </section>
  );
};

export default Content;
