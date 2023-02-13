import React, { useState } from "react";
import close from "../../assets/close.png";
import { OfferService } from "../../services/OfferService";
import AdminOfferInformation from "./AdminInformations";
import AdminOfferUpdate from "./AdminOfferUpdate";

const AdminOfferDetails = ({ offer, closeM, refreshPage }) => {
    const imagePath = `/cityImages/${offer.city.toLowerCase()}.jpg`;

    const [updating, setUpdating] = useState(false);
    const [offerData, setOfferData] = useState(offer);

    const handleToogle = () => {
        setUpdating(!updating);
    };

    const handleDelete = async () => {
        const response = await OfferService.deleteOffer(offer.id);
        console.log(response);
        if ((response.status = 200)) {
            refreshPage();
            closeM();
        }
    };

    const handleUpdate = async (data) => {
        const response = await OfferService.updateOffer(data);
        console.log(response);

        if ((response.status = 200)) {
            refreshPage();
            setUpdating(false);
            setOfferData(data);
        }
    };

    return (
        <div className="w-[95%] h-[95%] bg-[#f0f2f3]">
            {updating ? (
                <div className="w-[100%] p-[2rem] relative">
                    <button
                        className="absolute right-[32px] top-[37px] w-[24px] h-[24px] cursor-pointer z-[2]"
                        onClick={closeM}
                    >
                        <img src={close} alt="close" />
                    </button>
                    <AdminOfferUpdate
                        update={handleUpdate}
                        toogle={handleToogle}
                        offer={offerData}
                    />
                </div>
            ) : (
                <div className="flex w-[100%] h-[100%]">
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
                        <AdminOfferInformation
                            toogle={handleToogle}
                            offer={offerData}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminOfferDetails;
