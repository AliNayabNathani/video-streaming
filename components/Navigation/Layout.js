// components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import { SearchContextProvider } from "../Admin/Context api/Context";

function Layout({ children }) {
  return (
    <SearchContextProvider>
      <div>
        <Navbar />
        <main>
          <Box ml={{ base: 0, md: '22rem' }} mr={'2rem'} p="4">
            {children}
          </Box>
        </main>
        {/* <Footer /> */}
      </div>
    </SearchContextProvider>
  );
}

export default Layout;
