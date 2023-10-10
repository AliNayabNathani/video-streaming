import axios from "axios";
import { userData } from "../../components/Admin/Tables/UserTableData";

const API_URL = 'http://localhost:5000/api/v1/auth/';

//Register User
const register = async (userData) => {
    const res = await axios.post(API_URL + 'register', userData);

    if (res.data) {
        localStorage.setItem('User', JSON.stringify(res.data))
    }

    return res.data
}

//Login User
const login = async (userData) => {
    const res = await axios.post(API_URL + 'login', userData, {
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
    await axios.get(API_URL + 'logout');

}

const authService = {
    register,
    logout,
    login
}

export default authService;