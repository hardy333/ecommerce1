import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productName" element={<Products />} />
        <Route path="/products/:productName/:productId" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
