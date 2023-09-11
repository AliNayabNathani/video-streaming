import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
        minH: "100vh",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      variants: {
        outline: {
          bg: "transparent",
          borderColor: "#55DF01",
          color: "#55DF01",
          _hover: {
            bg: "#55DF01",
            color: "white",
          },
          _active: {
            bg: "#55DF01",
            color: "white",
          },
        },
      },
    },
    Drawer: {
      baseStyle: {
        dialog: {
          bg: "black",
        },
      },
    },
  },
});

export default customTheme;
