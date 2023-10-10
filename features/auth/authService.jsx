import axios from "axios";
import { userData } from "../../components/Admin/Tables/UserTableData";
import { server } from "../../components/server";

//Register User
const register = async (userData) => {
    const res = await axios.post(server + 'auth/register', userData);

    if (res.data) {
        localStorage.setItem('User', JSON.stringify(res.data))
    }

    return res.data
}

//Login User
const login = async (userData) => {
    const res = await axios.post(server + 'auth/login', userData, {
        headers: {
            "Content-type": "application/json"
        },
        withCredentials: true,
    });

    if (res.data) {
        localStorage.setItem('User', JSON.stringify(res.data))
    }
    return res.data
}

const logout = async () => {
    localStorage.removeItem('User');
    await axios.get(server + 'auth/logout');

}

const authService = {
    register,
    logout,
    login
}

export default authService;