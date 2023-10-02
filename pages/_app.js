import { useRouter } from "next/router";
import AdminLayout from "./Admin/AdminLayout";
import ClientLayout from "./Client/ClientLayout";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../features/store";


function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const Layout = router.pathname.startsWith("/Admin") ? AdminLayout : ClientLayout;

    // useEffect(() => {
    //     if (error) {
    //         toast.error(error);
    //         dispatch({ type: 'clearError' });
    //     }

    //     if (message) {
    //         toast.success(message);
    //         dispatch({ type: 'clearMessage' });
    //     }
    // }, [dispatch, error, message]);

    return (
        <Provider store={store}>
            <Layout Component={Component} pageProps={pageProps} />
            <Toaster />
        </Provider>


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
