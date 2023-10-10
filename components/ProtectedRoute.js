"use client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  const router = useRouter();

  if (user.roleId === 1) {
    return <div>Not Found</div>;
  }
  return children;
};

export default ProtectedRoute;
