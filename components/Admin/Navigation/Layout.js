// components/Layout.js

import React from "react";
import Navbar from "./Navbar";

import { Box } from "@chakra-ui/react";
import { SearchContextProvider } from "../Context api/Context";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        <Box ml={{ base: 0, md: '22rem' }} mr={'2rem'} p="4">
          {children}
        </Box>
      </main>
    </div>
  );
}

export default Layout;
