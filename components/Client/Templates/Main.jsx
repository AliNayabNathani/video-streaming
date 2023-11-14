import { Box } from "@chakra-ui/react";
import { useDetailContext } from "../Context/context";

import Sidebar from "../Bars/MainSidebar";
import Footer from "../Bars/Footer";
import Nav from "../Bars/MainNavbar";

export default function MainTemplate({ children }) {
  const { title } = useDetailContext();
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Nav />
      <Box maxH={"100%"} display={["block", "flex"]} flex={1}>
        <Sidebar />
        <Box width={["100%", "75%"]} p={4}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
