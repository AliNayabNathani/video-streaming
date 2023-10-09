import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import customTheme from "../../themes/customTheme.js";
import Layout from "./Navigation/Layout.js";
import { SearchContextProvider } from "./Context api/Context.jsx";
const theme = extendTheme({
  ...chakraTheme,
  ...customTheme,
});

export default function AdminLayout({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <SearchContextProvider>
          <CSSReset />
          <Component {...pageProps} />
        </SearchContextProvider>
      </Layout>
    </ChakraProvider>
  );
}
