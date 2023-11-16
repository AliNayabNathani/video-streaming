import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ children, allowedRole }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const storedUserData = localStorage.getItem("User");
  const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  const userRoleFromLocalStorage = parsedUserData?.user?.roleId;
  // console.log("from LS", userRoleFromLocalStorage);
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    } else if (allowedRole && userRoleFromLocalStorage !== allowedRole) {
      router.replace("/Unauthorized");
    }
  }, [isAuthenticated, allowedRole, router, userRoleFromLocalStorage]);

  return isAuthenticated ? <>{children}</> : null;
};

export default PrivateRoute;
