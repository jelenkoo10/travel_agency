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
        const response = await axios.post("http://127.0.0.1:8000/getuser", {
            email,
        });

        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: UserService.js ~ line 16 ~ getUser ~ error",
            error
        );
    }
};

const updateUser = async ({
    id,
    email,
    name,
    surname,
    phone_number,
    password,
}) => {
    try {
        const response = await axios.post(
            `http://127.0.0.1:8000/update/user/${id}`,
            {
                email,
                name,
                surname,
                phone_number,
                password,
            }
        );

        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: UserService.js ~ line 16 ~ getUser ~ error",
            error
        );
    }
};

const addUser = async ({ email, name, surname, phone_number, password }) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8000/user`, {
            email,
            name,
            surname,
            phone_number,
            password,
        });

        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: UserService.js ~ line 86 ~ addUser ~ error",
            error
        );
    }
};

export const UserService = { logIn, getUser, updateUser, addUser };
