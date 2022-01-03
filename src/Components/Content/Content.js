import "./Content.css";
import HomePage from "../Pages/HomePage/HomePage";
import ProductList from "../Pages/ProductList/ProductList";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import SearchResults from "../Pages/SearchResults/SearchResults";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import Checkout from "../Pages/Checkout/Checkout";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Invalid page!</h1>} />
      </Routes>
    </section>
  );
};

export default Content;
