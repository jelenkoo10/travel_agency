import React from "react";
import Button from "../FormElements/Button";
import Input from "../FormElements/Input";
import { useForm } from "../../hooks/useForm";
import { VALIDATOR_REQUIRE } from "../../utils/validators";

const OfferReservation = ({ _id, name, toogle }) => {
    const [formState, inputHandler] = useForm(
        {
            fullName: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: _id,
            name: formState.inputs.fullName.value,
            phone: formState.inputs.phone.value,
        };

        // const response

        console.log("SUBMITTED");
    };
    return (
        <div>
            <div>{`Rezervisi svoje putovanje u ${name}`}</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <Input
                        id="fullName"
                        label="Ime i Prezime"
                        type="text"
                        initialValue={formState.inputs.fullName.value}
                        initialValid={formState.inputs.fullName.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Unesi ime i prezime!"
                        onInput={inputHandler}
                    />
                    {/* <Input
                        id="fullName"
                        label="Phone"
                        type="text"
                        initialValue={formState.inputs.fullName.value}
                        initialValid={formState.inputs.fullName.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Unesi ime i prezime!"
                        onInput={inputHandler}
                    />
                    <Input
                        id="fullName"
                        label="Email"
                        type="text"
                        initialValue={formState.inputs.fullName.value}
                        initialValid={formState.inputs.fullName.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Unesi ime i prezime!"
                        onInput={inputHandler}
                    />
                    <Input
                        id="fullName"
                        label="Broj putnika"
                        type="text"
                        initialValue={formState.inputs.fullName.value}
                        initialValid={formState.inputs.fullName.isValid}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Unesi ime i prezime!"
                        onInput={inputHandler}
                    />
                    <Input
                        id="fullName"
                        label="Napomena"
                        type="text"
                        initialValue={formState.inputs.fullName.value}
                        initialValid={formState.inputs.fullName.isValid}
                        validators={}
                        errorText="Unesi ime i prezime!"
                        onInput={inputHandler}
                    />
                    <Button type="submit">REZERVISI</Button> */}
                </div>
            </form>
            <div>
                <Button onClick={toogle}>Rezervisi</Button>
            </div>
        </div>
    );
};

export default OfferReservation;
