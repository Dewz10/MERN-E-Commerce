import axios from "axios";

export const register = async (value) => {
    return await axios.post(process.env.REACT_APP_API + '/register', value)
}
