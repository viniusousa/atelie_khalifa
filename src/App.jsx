import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import MainRoutes from "./routes";

export default function App() {
  return (
      <Router>
          <Menu/>
          <MainRoutes/>
      </Router>
  );
}

