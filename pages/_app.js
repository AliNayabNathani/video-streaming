import { useRouter } from "next/router";
import AdminLayout from "./Admin/AdminLayout";
import ClientLayout from "./Client/ClientLayout";
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const Layout = router.pathname.startsWith("/Admin") ? AdminLayout : ClientLayout;

    return (
        <UserProvider>
            <Layout Component={Component} pageProps={pageProps} />
        </UserProvider>
        // <Auth0Provider
        //     domain="dev-g47ngs10wcqmnpfs.us.auth0.com"
        //     clientId="adb38ErO5bDrRS3ICJsRDrYBtUxOpOlX"
        //     authorizationParams={{
        //         redirect_uri: window.location.origin
        //     }}
        // >
        //     <Component {...pageProps} />
        // </Auth0Provider>
    );
}

export default MyApp;
