import { useRouter } from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../features/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../components/Admin/AdminLayout";
import ClientLayout from "../components/Client/ClientLayout";
import UnauthorizedPage from "./Unauthorized";

const CustomRouteWrapper = ({ Component, pageProps }) => {
  const router = useRouter();
  const [userRole, setUserRole] = useState();
  const route = router.route;
  let Layout = ClientLayout;
  if (route.startsWith("/Admin")) {
    Layout = AdminLayout;
  } else {
    Layout = ClientLayout;
  }
  const isRouteAccessible = () => {
    const route = router.route;
    console.log(route);
    if ((route.startsWith("/Admin") && roleId == 1) || roleId == 3) {
      return true;
    }
    if (route.startsWith("/Client") && roleId == 3) {
      return true;
    }
    if (route == "/") {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!isRouteAccessible) {
      router.push("/Unauthorized");
    }
  });
  return <Layout Component={Component} pageProps={pageProps} />;
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomRouteWrapper Component={Component} pageProps={pageProps} />
      </PersistGate>
      <ToastContainer autoClose={4000} />
    </Provider>
  );
}

export default MyApp;
