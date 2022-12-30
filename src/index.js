import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageStore from "./pages/ManageStore";
import CreateAccount from "./pages/CreateAccount";
import ManageAccount from "./pages/ManageAccount";
import { FactoryManagementPage, GuaranteeManagementPage } from "./pages";
import ManageErrorProduct from "./pages/ManageErrorProduct";
import Login from "./pages/Login";
import { Stores } from "./stores";
import ProductManagement from "./pages/ProductManagement";
import { DarkModeSwitch } from "./components/NavbarDarkmode";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Stores>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/manage-account" element={<ManageAccount />} />
            <Route path="/manage-products" element={<ProductManagement />} />
            <Route path="/facility/manage-store" element={<ManageStore />} />
            <Route
              path="/facility/manage-error-product"
              element={<ManageErrorProduct />}
            />
            <Route path="/manage-factory" element={<FactoryManagementPage />} />
            <Route path="/guarantee" element={<GuaranteeManagementPage />} />
          </Routes>
        </BrowserRouter>
      </Stores>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
