import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "./components/Layout";
import Router from "./router/Router";

import { configureStore } from "./store/configureStore";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainLayout>
        <Router />
      </MainLayout>
    </Provider>
  </BrowserRouter>
);
