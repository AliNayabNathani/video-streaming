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
      baseStyle: {
        bg: '#414141',
      },
      variants: {
        outline: {
          bg: "rgba(255, 255, 255, 0.24)",
          borderColor: 'transparent',
        },
      },
    },
    Text: {
      baseStyle: {
        color: '#9c9c9c'
      }
    },
    OrderedList: {
      baseStyle: {
        color: '#9c9c9c',
      },
    },
    Radio: {
      baseStyle: {
        _checked: {
          backgroundColor: "#55DF01", // Set the background color when checked
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
        button: {
          color: '#9c9c9c',
        },
        list: {
          color: '#9c9c9c',
          bg: "#414141",
          borderColor: 'transparent', // Border color of the menu
        },
        item: {
          bg: "#414141",
          color: 'black',
          _hover: {
            bg: "#232323",
            color: "#9c9c9c",
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
    lighterGray: '#9c9c9c',
    // ...other color schemes...
  },
});

export default customTheme;
