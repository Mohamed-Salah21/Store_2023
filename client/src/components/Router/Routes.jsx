import React from "react";
import { Route, Routes } from "react-router";
// import CartPage from "../../pages/cart/CartPage";
import HomePage from "../../pages/home/HomePage";
import SingleProduct from "../../pages/singleProduct/SingleProduct";
// import LoginPage from "../../pages/login/LoginPage";
import SignUpPage from "../../pages/signUp/SignUpPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:productId" element={<SingleProduct />} />
      {/* <Route path="/cart" element={<CartPage />} /> */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes;
