import "./Content.css";
import HomePage from "./HomePage";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <section className="content">
      <Routes>
        {["/", "/home"].map((path, index) => (
          <Route key={index} path={path} element={<HomePage />} />
        ))}

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h1>Invalid page!</h1>} />
      </Routes>
    </section>
  );
};

export default Content;
