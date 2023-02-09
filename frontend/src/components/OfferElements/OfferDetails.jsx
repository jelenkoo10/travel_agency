import React, { useState } from "react";
import OfferInformation from "./OfferInformation";
import OfferReservation from "./OfferReservation";

const OfferDetails = ({ offer }) => {
    const imagePath = `/cityImages/${offer.city.toLowerCase()}.jpg`;
    const [reserving, setReserving] = useState(false);
    console.log(offer);

    const handleToogle = () => {
        setReserving(!reserving);
    };

    return (
        <div className="w-[80%] h-[80%] bg-[#f0f2f3] flex">
            <div className="w-[65%] h-[100%] flex justify-center items-center p-[2rem]">
                <img src={imagePath} className="w-full h-full" />
            </div>
            <div className="w-[35%] p-[2rem]">
                {reserving ? (
                    <OfferReservation
                        toogle={handleToogle}
                        name={offer.city}
                        _id={offer.id}
                    />
                ) : (
                    <OfferInformation toogle={handleToogle} offer={offer} />
                )}
            </div>
        </div>
    );
};

export default OfferDetails;
