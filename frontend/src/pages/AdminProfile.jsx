import React, { useEffect, useState } from "react";
import { SessionService } from "../services/SessionService";
import Button from "../components/FormElements/Button";
import Navigation from "../components/Navigation";
import Input from "../components/FormElements/Input";
import { useForm } from "../hooks/useForm";
import { VALIDATOR_REQUIRE } from "../utils/validators";
import { UserService } from "../services/UserService";
import { toast } from "react-toastify";

function AdminProfile() {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const profile = SessionService.getProfile();
        setUser(profile[0]);
        setFormData(
            {
                email: {
                    value: profile[0].email,
                    isValid: true,
                },
                name: {
                    value: profile[0].name,
                    isValid: true,
                },
                surname: {
                    value: profile[0].surname,
                    isValid: true,
                },
                role: {
                    value: profile[0].role,
                    isValid: true,
                },
                phone_number: {
                    value: profile[0].phone_number,
                    isValid: true,
                },
            },
            true
        );
        setIsLoading(false);
    }, []);

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: "",
                isValid: false,
            },
            name: {
                value: "",
                isValid: false,
            },
            surname: {
                value: "",
                isValid: false,
            },
            role: {
                value: "",
                isValid: false,
            },
            phone_number: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: user.id,
            email: formState.inputs.email.value,
            name: formState.inputs.name.value,
            surname: formState.inputs.surname.value,
            phone_number: formState.inputs.phone_number.value,
            password: "test1234",
        };

        const response = await UserService.updateUser(data);
        if (response) {
            toast.success("Successfully update info !", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error("Error! Change your inputs !", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    if (isLoading) {
        return <div>UCitava se</div>;
    }

    return (
        <div className="w-[100%] h-[100%]">
            <Navigation />
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="gap-[1rem] w-[30%] mx-auto mt-[3rem]"
                >
                    <Input
                        id="email"
                        label="email"
                        type="text"
                        initialValue={formState.inputs.email.value}
                        initialValid={formState.inputs.email.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Enter your name!"
                        onInput={inputHandler}
                    />
                    <Input
                        id="name"
                        label="name"
                        type="text"
                        initialValue={formState.inputs.name.value}
                        initialValid={formState.inputs.name.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Enter your surname!"
                        onInput={inputHandler}
                    />
                    <Input
                        id="surname"
                        label="surname"
                        type="text"
                        initialValue={formState.inputs.surname.value}
                        initialValid={formState.inputs.surname.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Enter phone number!"
                        onInput={inputHandler}
                    />
                    <Input
                        id="phone_number"
                        label="phone_number"
                        type="text"
                        initialValue={formState.inputs.phone_number.value}
                        initialValid={formState.inputs.phone_number.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Enter valid email!"
                        onInput={inputHandler}
                    />
                    <Input
                        id="role"
                        label="role"
                        type="text"
                        initialValue={formState.inputs.role.value}
                        initialValid={formState.inputs.role.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        disabled
                        errorText="Enter valid email!"
                        onInput={inputHandler}
                    />
                    <Button>Save</Button>
                </form>
            </div>
        </div>
    );
}

export default AdminProfile;
