import axios from 'axios'
import customFetch from '../../utils/axios';

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        console.log('user: ', user);
        // const resp = await customFetch.post(url, user);
        const response = await axios.post(`http://localhost:5000/api/v1${url}`, user, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};