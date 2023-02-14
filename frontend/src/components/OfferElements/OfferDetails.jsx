import React, { useState } from "react";
import OfferInformation from "./OfferInformation";
import OfferReservation from "./OfferReservation";
import close from "../../assets/close.png";
import Images from "../Images";

const OfferDetails = ({ offer, closeM }) => {
    const imagePath = `/cityImages/${offer.city.toLowerCase()}.jpg`;
    const [reserving, setReserving] = useState(false);

    const handleToogle = () => {
        setReserving(!reserving);
    };
    return (
        <div className="w-[95%] h-[95%] bg-[#f0f2f3] flex">
            <div className="w-[65%] h-[100%] flex justify-center items-center p-[2rem]">
                <Images offer={offer} />
            </div>
            <div className="w-[35%] p-[2rem] relative">
                <button
                    className="absolute right-[32px] top-[37px] w-[24px] h-[24px] cursor-pointer z-[2]"
                    onClick={closeM}
                >
                    <img src={close} alt="close" />
                </button>
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
