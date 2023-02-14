import React from "react";
import Input from "./FormElements/Input";
import { useForm } from "../hooks/useForm";
import Button from "./FormElements/Button";
import { OfferService } from "../services/OfferService";

function Search({ searchOffers }) {
    const [formState, inputHandler] = useForm(
        {
            city: {
                value: "",
                isValid: true,
            },
            country: {
                value: "",
                isValid: true,
            },
            continent: {
                value: "",
                isValid: true,
            },
            transport: {
                value: "",
                isValid: true,
            },

            departure_time: {
                value: "",
                isValid: true,
            },
            arrival_time: {
                value: "",
                isValid: true,
            },
        },
        false
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            city: formState.inputs.city.value,
            country: formState.inputs.country.value,
            continent: formState.inputs.continent.value,
            transport: formState.inputs.transport.value,
            departure_time: formState.inputs.departure_time.value,
            arrival_time: formState.inputs.arrival_time.value,
        };

        const response = await OfferService.searchOffers(data);

        searchOffers(response.data);

        console.log(response.data);
    };

    return (
        <div className="p-2 bg-white rounded-md m-2 shadow-xl">
            <form
                className="flex justify-between px-[1rem]"
                onSubmit={handleSubmit}
            >
                <div className="max-w-[150px]">
                    <Input
                        id="continent"
                        label="Continent"
                        type="text"
                        initialValue={formState.inputs.continent.value}
                        initialValid={formState.inputs.continent.isValid}
                        validators={[]}
                        onInput={inputHandler}
                    />
                </div>
                <div className="max-w-[150px]">
                    <Input
                        id="country"
                        label="Country"
                        type="text"
                        initialValue={formState.inputs.country.value}
                        initialValid={formState.inputs.country.isValid}
                        validators={[]}
                        onInput={inputHandler}
                    />
                </div>
                <div className="max-w-[150px]">
                    <Input
                        id="city"
                        label="City"
                        type="text"
                        initialValue={formState.inputs.city.value}
                        initialValid={formState.inputs.city.isValid}
                        validators={[]}
                        onInput={inputHandler}
                    />
                </div>
                <div className="max-w-[150px]">
                    <Input
                        id="transport"
                        label="Transport"
                        type="text"
                        initialValue={formState.inputs.transport.value}
                        initialValid={formState.inputs.transport.isValid}
                        validators={[]}
                        onInput={inputHandler}
                    />
                </div>
                <div className="max-w-[150px]">
                    <Input
                        id="departure_time"
                        label="Departure Time"
                        type="date"
                        initialValue={formState.inputs.departure_time.value}
                        initialValid={formState.inputs.departure_time.isValid}
                        validators={[]}
                        onInput={inputHandler}
                    />
                </div>
                <div className="max-w-[150px]">
                    <Input
                        id="arrival_time"
                        label="Arrival Time"
                        type="date"
                        initialValue={formState.inputs.arrival_time.value}
                        initialValid={formState.inputs.arrival_time.isValid}
                        validators={[]}
                        onInput={inputHandler}
                    />
                </div>
                <div className="mt-[2rem]">
                    <Button type="submit">Search</Button>
                </div>
            </form>
        </div>
    );
}

export default Search;
