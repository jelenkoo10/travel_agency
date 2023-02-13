import React from "react";
import Button from "../FormElements/Button";
import Input from "../FormElements/Input";
import { useForm } from "../../hooks/useForm";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import close from "../../assets/close.png";

const AdminOfferAdd = ({ toogle, add }) => {
    const [formState, inputHandler] = useForm(
        {
            offer_name: {
                value: "",
                isValid: false,
            },
            city: {
                value: "",
                isValid: false,
            },
            country: {
                value: "",
                isValid: false,
            },
            continent: {
                value: "",
                isValid: false,
            },
            transport: {
                value: "",
                isValid: false,
            },
            departure_time: {
                value: "",
                isValid: false,
            },
            arrival_time: {
                value: "",
                isValid: false,
            },
            apartment: {
                value: "",
                isValid: false,
            },
            apartment_name: {
                value: "",
                isValid: false,
            },
            accomodation: {
                value: "",
                isValid: false,
            },
            stars: {
                value: "",
                isValid: false,
            },
            price: {
                value: "",
                isValid: false,
            },
            has_tv: {
                value: "",
                isValid: false,
            },
            has_ac: {
                value: "",
                isValid: false,
            },
            has_internet: {
                value: "",
                isValid: false,
            },
            has_fridge: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            offer_name: formState.inputs.offer_name.value,
            city: formState.inputs.city.value,
            country: formState.inputs.country.value,
            continent: formState.inputs.continent.value,
            transport: formState.inputs.transport.value,
            departure_time: formState.inputs.departure_time.value,
            arrival_time: formState.inputs.arrival_time.value,
            apartment: formState.inputs.apartment.value,
            apartment_name: formState.inputs.apartment_name.value,
            accomodation: formState.inputs.accomodation.value,
            stars: formState.inputs.stars.value,
            price: formState.inputs.price.value,
            has_tv: formState.inputs.has_tv.value,
            has_ac: formState.inputs.has_ac.value,
            has_internet: formState.inputs.has_internet.value,
            has_fridge: formState.inputs.has_fridge.value,
            destination_image: "empty",
        };
        add(data);
    };

    return (
        <div className="relative w-[95%] h-[95%] bg-[#f0f2f3] p-[2rem]">
            <h1 className=" text-xl text-black mb-2 font-bold">
                Add offer informations
            </h1>
            <button
                className="absolute right-[40px] top-[40px] w-[30px] h-[30px] cursor-pointer"
                onClick={toogle}
            >
                <img src={close} alt="close" />
            </button>
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-2 min-[1400px]:grid-cols-3 gap-[1rem]"
            >
                <Input
                    id="offer_name"
                    label="offer_name"
                    type="text"
                    initialValue={formState.inputs.offer_name.value}
                    initialValid={formState.inputs.offer_name.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter your name!"
                    onInput={inputHandler}
                />
                <Input
                    id="country"
                    label="country"
                    type="text"
                    initialValue={formState.inputs.country.value}
                    initialValid={formState.inputs.country.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter your surname!"
                    onInput={inputHandler}
                />
                <Input
                    id="city"
                    label="city"
                    type="text"
                    initialValue={formState.inputs.city.value}
                    initialValid={formState.inputs.city.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter phone number!"
                    onInput={inputHandler}
                />
                <Input
                    id="continent"
                    label="continent"
                    type="text"
                    initialValue={formState.inputs.continent.value}
                    initialValid={formState.inputs.continent.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter valid email!"
                    onInput={inputHandler}
                />
                <Input
                    id="transport"
                    label="transport"
                    type="text"
                    initialValue={formState.inputs.transport.value}
                    initialValid={formState.inputs.transport.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter number of travelers!"
                    onInput={inputHandler}
                />
                <Input
                    id="departure_time"
                    label="departure_time"
                    type="text"
                    initialValue={formState.inputs.departure_time.value}
                    initialValid={formState.inputs.departure_time.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter payment!"
                    onInput={inputHandler}
                />
                <Input
                    id="arrival_time"
                    label="arrival_time"
                    type="text"
                    initialValue={formState.inputs.arrival_time.value}
                    initialValid={formState.inputs.arrival_time.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <Input
                    id="apartment"
                    label="apartment"
                    type="text"
                    initialValue={formState.inputs.apartment.value}
                    initialValid={formState.inputs.apartment.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter payment!"
                    onInput={inputHandler}
                />
                <Input
                    id="apartment_name"
                    label="apartment_name"
                    type="text"
                    initialValue={formState.inputs.apartment_name.value}
                    initialValid={formState.inputs.apartment_name.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter payment!"
                    onInput={inputHandler}
                />
                <Input
                    id="accomodation"
                    label="accomodation"
                    type="text"
                    initialValue={formState.inputs.accomodation.value}
                    initialValid={formState.inputs.accomodation.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <Input
                    id="stars"
                    label="stars"
                    type="text"
                    initialValue={formState.inputs.stars.value}
                    initialValid={formState.inputs.stars.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <Input
                    id="price"
                    label="price"
                    type="text"
                    initialValue={formState.inputs.price.value}
                    initialValid={formState.inputs.price.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Enter payment!"
                    onInput={inputHandler}
                />
                <Input
                    id="has_tv"
                    label="has_tv"
                    type="text"
                    initialValue={formState.inputs.has_tv.value}
                    initialValid={formState.inputs.has_tv.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <Input
                    id="has_ac"
                    label="has_ac"
                    type="text"
                    initialValue={formState.inputs.has_ac.value}
                    initialValid={formState.inputs.has_ac.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <Input
                    id="has_internet"
                    label="has_internet"
                    type="text"
                    initialValue={formState.inputs.has_internet.value}
                    initialValid={formState.inputs.has_internet.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <Input
                    id="has_fridge"
                    label="has_fridge"
                    type="text"
                    initialValue={formState.inputs.has_fridge.value}
                    initialValid={formState.inputs.has_fridge.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <div></div>
                <div className="max-h-[41.6px] mt-[31px]">
                    <Button type="submit">Add</Button>
                </div>
            </form>
        </div>
    );
};

export default AdminOfferAdd;
