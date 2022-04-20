import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import MainRoutes from "./routes";

//no app eu usei o router-dom para exibir os componentes dinamicamente iremos tentar repetir isso dentro dos services

export default function App() {
  return (
      <Router>
          <Menu/>
          <MainRoutes/>
      </Router>
  );
}

