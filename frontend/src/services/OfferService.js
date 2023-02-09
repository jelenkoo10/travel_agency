import axios from "axios";

const getAllOffers = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/home");

        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 8 ~ getAllPlants ~ error",
            error
        );
    }
};

const reserveOffer = async () => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/reservation",
            {}
        );

        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 8 ~ getAllPlants ~ error",
            error
        );
    }
};

export const OfferService = {
    getAllOffers,
};
