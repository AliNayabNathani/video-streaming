import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import customTheme from "../../themes/customTheme.js";
import Layout from "../../components/Client/Navigation/Layout.js";

const theme = extendTheme({
    ...chakraTheme,
    ...customTheme,
});

function ClientLayout({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <CSSReset />
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default ClientLayout;
