import React from "react";
import { useForm } from "../hooks/useForm";
import { UserService } from "../services/UserService";
import Button from "./FormElements/Button";
import Input from "./FormElements/Input";
import { VALIDATOR_REQUIRE } from "../utils/validators";

function LogIn() {
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
            console.log("succes");
            const user = await UserService.getUser(data);
            console.log(user);
        }
    };

    return (
        <div className="w-[30%] h-[30%] bg-white">
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
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
}

export default LogIn;
