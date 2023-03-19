import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./components/Router/Routes";
function App(): React.ReactElement {

  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
