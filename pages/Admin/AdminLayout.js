import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import customTheme from "../../themes/customTheme.js";
import Layout from "../../components/Admin/Navigation/Layout.js";
import { SearchContextProvider } from "../../components/Admin/Context api/Context.jsx";

const theme = extendTheme({
  ...chakraTheme,
  ...customTheme,
});

function AdminLayout({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <CSSReset />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SearchContextProvider>
  );
}

export default AdminLayout;
