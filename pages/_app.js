import { useRouter } from "next/router";
import AdminLayout from "./Admin/AdminLayout";
import ClientLayout from "./Client/ClientLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Determine which layout to use based on the route
  if (router.pathname.startsWith("/Admin")) {
    return <AdminLayout Component={Component} pageProps={pageProps} />;
  } else {
    return <ClientLayout Component={Component} pageProps={pageProps} />;
  }
}

export default MyApp;
