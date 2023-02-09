import React, { useEffect, useState } from "react";
import OfferCard from "../components/OfferElements/OfferCard";
import OfferDetails from "../components/OfferElements/OfferDetails";
import { OfferService } from "../services/OfferService";

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [modal, setModal] = useState(null);

    if (modal) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    useEffect(() => {
        const fetchOffers = async () => {
            const data = await OfferService.getAllOffers();
            setOffers(data);
        };
        fetchOffers();
    }, []);

    const offerCards = offers.map((data) => (
        <div onClick={() => setModal(data)}>
            <OfferCard key={data.id} data={data} />
        </div>
    ));
    const bgImage = `bg-[url('./assets/homeBg.jpg')]`;

    return (
        <div>
            <div className="h-[60px] bg-[#AAF0BE]">Navigacija</div>
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 min-[1400px]:grid-cols-3 gap-[1rem] ${bgImage} absolute bg-center bg-contain  bg-[#c9c5c5] bg-blend-darken bg-repeat-space min-h-[95%] px-[20px] pt-[20px] w-[100%]`}
            >
                {offerCards}
            </div>
            {modal && (
                <div className="fixed z-10 w-[100%] h-[100%] flex justify-center items-center top-0 left-0">
                    <div
                        className="absolute z-[-1] bg-[#000] opacity-30 w-[100%] h-[100%] cursor-pointer"
                        onClick={() => setModal(null)}
                    ></div>
                    <OfferDetails offer={modal} />
                </div>
            )}
        </div>
    );
};

export default Offers;
