// components/Layout.js

import React from "react";
import Navbar from "./Navbar";
import { DetailContextProvider } from "../Context/context";
import { ToastContainer } from "react-toastify";

function Layout({ children }) {

  return (
    <DetailContextProvider>
      <div>
        <main>
          {children}
        </main>
      </div>
    </DetailContextProvider>
  );
}

export default Layout;
