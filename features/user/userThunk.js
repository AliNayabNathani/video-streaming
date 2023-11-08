import axios from "axios";
import customFetch from "../../utils/axios";
import { server } from "../../components/server";

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    // console.log('user: ', user);
    // const resp = await customFetch.post(url, user);
    const response = await axios.post(`${server}${url}`, user, {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
