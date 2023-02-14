import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { UserService } from "../services/UserService";
import Button from "./FormElements/Button";
import Input from "./FormElements/Input";
import { VALIDATOR_REQUIRE } from "../utils/validators";
import { useNavigate } from "react-router-dom";
import { SessionService } from "../services/SessionService";
import showImage from "../assets/show.png";
import hideImage from "../assets/hide.png";
import { toast } from "react-toastify";

function LogIn() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
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

    const toogleShow = () => {
        setShow(!show);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
        };

        const response = await UserService.logIn(data);

        if (response) {
            const user = await UserService.getUser(data);
            SessionService.saveSession(user);
            navigate("/adminOffers");
            toast.success("Successfully logged in !", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error("Error! Change your credentials !", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <div className="w-[570px] h-[380px] p-[4rem] rounded-lg shadow-2xl bg-white relative">
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
                    type={show ? "text" : "password"}
                    initialValue={formState.inputs.password.value}
                    initialValid={formState.inputs.password.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter your password!"
                    onInput={inputHandler}
                />
                <div
                    onClick={toogleShow}
                    className="w-[30px] h-[30px] absolute top-[50.5%] right-[13%] cursor-pointer"
                >
                    <img
                        src={!show ? showImage : hideImage}
                        alt="toogle"
                        className="w-[30px] h-[30px]"
                    />
                </div>
                <div className="mt-[40px]">
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </div>
    );
}

export default LogIn;
