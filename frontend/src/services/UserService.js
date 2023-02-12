import axios from "axios";

const logIn = async ({ email, password }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/login", {
            email,
            password,
        });

        return response;
    } catch (error) {
        console.log(
            "🚀 ~ file: UserService.js ~ line 16 ~ logIn ~ error",
            error
        );
    }
};

const getUser = async ({ email }) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/user/show", {
            email,
        });

        return response;
    } catch (error) {
        console.log(
            "🚀 ~ file: UserService.js ~ line 16 ~ logIn ~ error",
            error
        );
    }
};

export const UserService = { logIn, getUser };
