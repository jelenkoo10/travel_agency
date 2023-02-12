import axios from "axios";

const getAllOffers = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/home");

        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 10 ~ getAllOffers ~ error",
            error
        );
    }
};

const reserveOffer = async ({
    offer_id,
    traveler_name,
    traveler_surname,
    phone_number,
    email,
    payment,
    num_of_travelers,
    comment,
}) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/reservation", {
            offer_id,
            traveler_name,
            traveler_surname,
            phone_number,
            email,
            payment,
            num_of_travelers,
            comment,
        });

        return response;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 40 ~ reserveOffer ~ error",
            error
        );
    }
};

export const OfferService = {
    getAllOffers,
    reserveOffer,
};
