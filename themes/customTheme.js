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
    Input: {
      variants: {
        outline: {
          bg: "rgba(255, 255, 255, 0.24)",
          borderColor: 'transparent',
        },
      },
    },
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
            color: "black",
          },
          _active: {
            bg: "#55DF01",
            color: "white",
          },
          _focus: {
            bg: "#55DF01",
            color: "black",
          }
        },
        solid: {
          bg: "#55DF01",
          borderColor: "#55DF01",
          color: "#232323",
          _hover: {
            bg: "transparent",
            border: "1px solid #55DF01",
            color: "#55DF01",
          },
          _active: {
            bg: "black",
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
    Menu: {
      baseStyle: {
        list: {
          bg: "#414141",
          borderColor: 'transparent', // Border color of the menu
        },
        item: {
          bg: "#414141",
          color: 'black',
          _hover: {
            bg: "#232323",
            color: "white", // Text color of menu items on hover
          },
        },
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    customGreen: {
      500: "#55DF01",
    },
    customGray: {
      600: 'rgba(255, 255, 255, 0.48)',
    },

    // ...other color schemes...
  },
});

export default customTheme;
