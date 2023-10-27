// components/PrivateRoute.js
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/User");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <>{children}</> : null;
};

export default PrivateRoute;
