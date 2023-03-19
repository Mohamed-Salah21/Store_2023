import React from "react";
import { Route, Routes } from "react-router";
import CartPage from "../../pages/cart/CartPage";
import HomePage from "../../pages/home/HomePage";
import LoginPage from "../../pages/login/LoginPage";
import SingleProduct from "../../pages/singleProduct/SingleProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products/:productId" element={<SingleProduct />} />
      <Route path="/login" element={<LoginPage />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
