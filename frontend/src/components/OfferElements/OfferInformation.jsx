import React from "react";
import Button from "../FormElements/Button";

const OfferInformation = ({ toogle, offer }) => {
    return (
        <div>
            <h2>{offer.country}</h2>
            <h1>{offer.city}</h1>
            <div>
                <Button onClick={toogle}>Rezervisi</Button>
            </div>
        </div>
    );
};

export default OfferInformation;
