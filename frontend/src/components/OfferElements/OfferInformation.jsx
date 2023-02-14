import React from "react";
import Button from "../FormElements/Button";
import starIcon from "../../assets/star.png";
import ac from "../../assets/air-conditioner.png";
import wifi from "../../assets/wifi.png";
import tv from "../../assets/television.png";
import fridge from "../../assets/fridge.png";

const OfferInformation = ({ toogle, offer }) => {
    const ratingArray = Array.from(new Array(offer.stars));
    const rating = ratingArray.map((_, i) => (
        <img
            key={`${offer.id}+${i}`}
            src={starIcon}
            className="w-[20px] h-[20px]"
        />
    ));

    return (
        <div className="h-[100%] w-[100%]">
            <h1 className="text-2xl font-bold mb-[1rem] w-[70%]">
                {offer.offer_name}
            </h1>
            <p>
                <span className="font-semibold">Continent</span>:
                {offer.continent}
            </p>
            <p>
                <span className="font-semibold">Country</span>:{offer.country}
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
                <span className="font-semibold">Length of trip</span>:
                {offer.num_of_days.substr(1)}
            </p>
            <p>
                <span className="font-semibold">Accomodation</span>:
                {`${offer.accomodation[0]} room ${offer.accomodation[2]}${
                    offer.accomodation.length > 3
                        ? `+${
                              offer.accomodation[offer.accomodation.length - 1]
                          }`
                        : ""
                } beds `}
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
                <div className="flex">{rating}</div>
            </div>
            <div>
                <span className="font-semibold">Additionals</span>:
                <div className="flex">
                    {offer.has_tv === "1" && (
                        <img
                            src={tv}
                            alt="television"
                            className="w-[30px] h-[30px]"
                        />
                    )}
                    {offer.has_ac === "1" && (
                        <img
                            src={ac}
                            alt="air conditioner"
                            className="w-[30px] h-[30px] ml-2"
                        />
                    )}
                    {offer.has_internet === "1" && (
                        <img
                            src={wifi}
                            alt="wifi"
                            className="w-[30px] h-[30px] ml-2"
                        />
                    )}
                    {offer.has_fridge === "1" && (
                        <img
                            src={fridge}
                            alt="frigde"
                            className="w-[30px] h-[30px] ml-2"
                        />
                    )}
                </div>
            </div>
            <p>
                <span className="font-semibold">Price</span>:{" "}
                <span className=" font-extrabold">${offer.price}</span>
            </p>

            <div className="mt-[1rem] w-[100%]">
                <Button disabled={offer.available === "0"} onClick={toogle}>
                    Reserve
                </Button>
            </div>
        </div>
    );
};

export default OfferInformation;
