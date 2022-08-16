import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./components/Layout";
import Router from "./router/Router";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MainLayout>
      <Router />
    </MainLayout>
  </BrowserRouter>
);
