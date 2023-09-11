import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import customTheme from "../themes/customTheme";
import Layout from "../components/Layout";

const theme = extendTheme({
  ...chakraTheme,
  ...customTheme,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <CSSReset />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
