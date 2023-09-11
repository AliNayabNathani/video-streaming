// components/Footer.js
import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      p="4"
      bg="teal.500"
      color="white"
      textAlign="center"
      bottom={0}
      position={"fixed"}
      w={"full"}
    >
      <Text>&copy; {new Date().getFullYear()} Your Website Name</Text>
    </Box>
  );
}

export default Footer;
