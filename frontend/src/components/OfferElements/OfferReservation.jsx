import React from "react";
import Button from "../FormElements/Button";
import Input from "../FormElements/Input";
import { useForm } from "../../hooks/useForm";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import { OfferService } from "../../services/OfferService";
import back from "../../assets/back.png";
import { toast } from "react-toastify";

const OfferReservation = ({ _id, name, toogle }) => {
    const [formState, inputHandler] = useForm(
        {
            traveler_name: {
                value: "",
                isValid: false,
            },
            traveler_surname: {
                value: "",
                isValid: false,
            },
            phone_number: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            payment: {
                value: "",
                isValid: false,
            },
            num_of_travelers: {
                value: "",
                isValid: false,
            },
            comment: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            offer_id: _id,
            traveler_name: formState.inputs.traveler_name.value,
            traveler_surname: formState.inputs.traveler_surname.value,
            phone_number: formState.inputs.phone_number.value,
            email: formState.inputs.email.value,
            payment: formState.inputs.payment.value,
            num_of_travelers: formState.inputs.num_of_travelers.value,
            comment: formState.inputs.comment.value,
        };

        const response = await OfferService.reserveOffer(data);
        if (response) {
            toast.success("Successfully reserved !", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error("Error! Change your informations !", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };
    return (
        <div className="relative">
            <h1 className=" text-xl text-black mb-2 font-bold">{`Reserve your trip to ${name}`}</h1>
            <button
                className="absolute right-[40px] top-0 w-[30px] h-[30px] cursor-pointer"
                onClick={toogle}
            >
                <img src={back} alt="back" />
            </button>
            <form onSubmit={handleSubmit}>
                <Input
                    id="traveler_name"
                    label="First name"
                    type="text"
                    initialValue={formState.inputs.traveler_name.value}
                    initialValid={formState.inputs.traveler_name.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter your name!"
                    onInput={inputHandler}
                />
                <Input
                    id="traveler_surname"
                    label="Surname"
                    type="text"
                    initialValue={formState.inputs.traveler_surname.value}
                    initialValid={formState.inputs.traveler_surname.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter your surname!"
                    onInput={inputHandler}
                />
                <Input
                    id="phone_number"
                    label="Phone"
                    type="text"
                    initialValue={formState.inputs.phone_number.value}
                    initialValid={formState.inputs.phone_number.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter phone number!"
                    onInput={inputHandler}
                />
                <Input
                    id="email"
                    label="Email"
                    type="text"
                    initialValue={formState.inputs.email.value}
                    initialValid={formState.inputs.email.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter valid email!"
                    onInput={inputHandler}
                />
                <Input
                    id="num_of_travelers"
                    label="Number of travelers"
                    type="text"
                    initialValue={formState.inputs.num_of_travelers.value}
                    initialValid={formState.inputs.num_of_travelers.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter number of travelers!"
                    onInput={inputHandler}
                />
                <Input
                    id="payment"
                    label="Payment"
                    type="text"
                    initialValue={formState.inputs.payment.value}
                    initialValid={formState.inputs.payment.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter payment!"
                    onInput={inputHandler}
                />
                <div className="mb-4">
                    <Input
                        id="comment"
                        label="Additional comment"
                        type="text"
                        initialValue={formState.inputs.comment.value}
                        validators={[]}
                        onInput={inputHandler}
                    />
                </div>
                <Button type="submit">Reserve</Button>
            </form>
        </div>
    );
};

export default OfferReservation;
