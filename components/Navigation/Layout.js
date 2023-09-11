// components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        <Box ml={{ base: 0, md: '22rem' }} mr={'2rem'} p="4">
          {children}
        </Box>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
