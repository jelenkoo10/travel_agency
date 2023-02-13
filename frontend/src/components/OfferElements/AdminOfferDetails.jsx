import React, { useState } from "react";
import close from "../../assets/close.png";
import { OfferService } from "../../services/OfferService";
import Button from "../FormElements/Button";

const AdminOfferDetails = ({ offer, closeM }) => {
    const imagePath = `/cityImages/${offer.city.toLowerCase()}.jpg`;
    const handleDelete = async () => {
        const response = await OfferService.deleteOffer(offer.id);
        console.log(response);
    };
    console.log(offer.destination_image);

    const handleUpdate = async () => {
        const data = {
            id: offer.id,
            offer_name: "Bagrdan 2027, Exclusive-Dont Miss",
            city: "Batocina",
            country: "Serbia",
            continent: "Europe",
            transport: "by foot",
            departure_time: "2025-11-23 15:24:14",
            arrival_time: "2025-11-23 15:24:24",
            apartment: "Bungalow",
            apartment_name: "Vila sky",
            accomodation: "1_2",
            stars: 1,
            price: 10,
            has_tv: 1,
            has_ac: 0,
            has_internet: 0,
            has_fridge: 0,
            destination_image: offer.destination_image,
        };
        const response = await OfferService.updateOffer(data);
        console.log(response);
    };

    return (
        <div className="w-[95%] h-[95%] bg-[#f0f2f3] flex">
            <div className="w-[65%] h-[100%] flex justify-center items-center p-[2rem]">
                <img src={imagePath} className="w-full h-full" />
            </div>
            <div className="w-[35%] p-[2rem] relative">
                <button
                    className="absolute right-[32px] top-[37px] w-[24px] h-[24px] cursor-pointer z-[2]"
                    onClick={closeM}
                >
                    <img src={close} alt="close" />
                </button>
                <h1 className="text-2xl font-bold mb-[1rem] w-[70%]">
                    {offer.offer_name}
                </h1>
                <p>
                    <span className="font-semibold">Continent</span>:
                    {offer.continent}
                </p>
                <p>
                    <span className="font-semibold">Country</span>:
                    {offer.country}
                </p>
                <p>
                    <span className="font-semibold">City</span>:{offer.city}
                </p>

                <p>
                    <span className="font-semibold">Departure time</span>:
                    {offer.departure_time}
                </p>
                <p>
                    <span className="font-semibold">Transport</span>:
                    {offer.transport}
                </p>
                <p>
                    <span className="font-semibold">Lenght of trip</span>:
                    {offer.num_of_days}
                </p>
                <p>
                    <span className="font-semibold">Accomodation</span>:
                    {offer.accomodation}
                </p>
                <p>
                    <span className="font-semibold">Apartment</span>:
                    {offer.apartment}
                </p>
                <p>
                    <span className="font-semibold">Apartment name</span>:
                    {offer.apartment_name}
                </p>

                <div>
                    <p>
                        <span className="font-semibold">Rating</span>:
                    </p>
                    <div className="flex">{offer.stars}</div>
                </div>
                <div>
                    <span className="font-semibold">Additionals</span>:
                    <div className="flex">
                        {offer.has_tv}
                        {offer.has_ac}
                        {offer.has_internet}
                        {offer.has_fridge}
                    </div>
                </div>
                <p>
                    <span className="font-semibold">Price</span>:{" "}
                    <span className=" font-extrabold">${offer.price}</span>
                </p>
                <div className="w-[100%]">
                    <Button onClick={handleUpdate}>Update</Button>
                </div>
                <div className="w-[100%]">
                    <Button onClick={handleDelete} other="bg-red">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AdminOfferDetails;
