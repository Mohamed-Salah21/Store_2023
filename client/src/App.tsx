import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./components/Router/Routes";
export const publicStyle = {
  bg: "#4285F4",
  color1 : "#5256AD",
  color2 : "#999EDE",

};
function App(): React.ReactElement {
  return (
    <Router>
      <ToastContainer theme="colored" pauseOnFocusLoss={true}  />
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
