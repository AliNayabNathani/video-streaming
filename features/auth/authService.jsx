import axios from "axios";
import { userData } from "../../components/Admin/Tables/UserTableData";
import { server } from "../../components/server";

//Register User
const register = async (userData) => {
  const res = await axios.post(server + "auth/register", userData);

  if (res.data) {
    localStorage.setItem("User", JSON.stringify(res.data));
  }

  return res.data;
};

//Login User
// const login = async (userData) => {
//   const res = await axios.post(server + "auth/login", userData, {
//     headers: {
//       "Content-type": "application/json",
//     },
//     withCredentials: true,
//   });
//   // console.log(res);
//   if (res.data) {
//     localStorage.setItem("User", JSON.stringify(res.data));
//   }
//   return res.data;
// };

//Admin Login
const adminlogin = async (userData) => {
  const res = await axios.post(server + "auth/login/admin", userData, {
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: true,
  });
  // console.log(res);
  if (res.data) {
    localStorage.setItem("User", JSON.stringify(res.data));
  }
  return res.data;
};

//Creator Login
const creatorLogin = async (userData) => {
  const res = await axios.post(server + "auth/login/creator", userData, {
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: true,
  });
  // console.log(res);
  if (res.data) {
    localStorage.setItem("User", JSON.stringify(res.data));
  }
  return res.data;
};

//User Login
const userLogin = async (userData) => {
  const res = await axios.post(server + "auth/login/user", userData, {
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: true,
  });
  // console.log(res);
  if (res.data) {
    localStorage.setItem("User", JSON.stringify(res.data));
  }
  return res.data;
};

const logout = async () => {
  localStorage.removeItem("User");
  await axios.get(server + "auth/logout", { withCredentials: true });
};

const updateProfile = async (userData) => {
  const res = await axios.patch(server + "auth/updateprofile", userData, {
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: true,
  });

  if (res.data) {
    localStorage.setItem("User", JSON.stringify(res.data));
  }

  return res.data;
};

const authService = {
  register,
  logout,
  adminlogin,
  creatorLogin,
  userLogin,
  updateProfile,
};

export default authService;
