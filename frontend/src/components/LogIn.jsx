import React from "react";
import { useForm } from "../hooks/useForm";
import { UserService } from "../services/UserService";
import Button from "./FormElements/Button";
import Input from "./FormElements/Input";
import { VALIDATOR_REQUIRE } from "../utils/validators";
import { useNavigate } from "react-router-dom";
import { SessionService } from "../services/SessionService";

function LogIn({ isLogged }) {
    const navigate = useNavigate();

    const [formState, inputHandler] = useForm(
        {
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
        };

        const response = await UserService.logIn(data);

        if (response.status === 204) {
            const user = await UserService.getUser(data);
            SessionService.saveSession(user);
            navigate("/adminOffers");
        }
    };

    return (
        <div className="w-[40%] h-[40%] bg-white">
            <form onSubmit={handleSubmit}>
                <Input
                    id="email"
                    label="Email"
                    type="text"
                    initialValue={formState.inputs.email.value}
                    initialValid={formState.inputs.email.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter your email!"
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    label="Password"
                    type="text"
                    initialValue={formState.inputs.password.value}
                    initialValid={formState.inputs.password.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter your password!"
                    onInput={inputHandler}
                />
                <div className="mt-5">
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </div>
    );
}

export default LogIn;
