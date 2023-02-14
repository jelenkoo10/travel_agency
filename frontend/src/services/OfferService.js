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

const searchOffers = async ({
    offer_name,
    city,
    country,
    continent,
    transport,
    departure_time,
    arrival_time,
}) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/search", {
            offer_name,
            city,
            country,
            continent,
            transport,
            departure_time,
            arrival_time,
        });

        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 40 ~ reserveOffer ~ error",
            error
        );
    }
};

const deleteOffer = async (_id) => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/offer/delete/${_id}`
        );

        return response;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 85 ~ deleteOffer ~ error",
            error
        );
    }
};

const updateOffer = async ({
    id,
    offer_name,
    city,
    country,
    continent,
    transport,
    departure_time,
    arrival_time,
    apartment,
    apartment_name,
    accomodation,
    stars,
    price,
    has_tv,
    has_ac,
    has_internet,
    has_fridge,
    destination_image,
}) => {
    try {
        const response = await axios.patch(
            `http://127.0.0.1:8000/update/offer/${id}`,
            {
                offer_name,
                city,
                country,
                continent,
                transport,
                departure_time,
                arrival_time,
                apartment,
                apartment_name,
                accomodation,
                stars,
                price,
                has_tv,
                has_ac,
                has_internet,
                has_fridge,
                destination_image,
            }
        );

        return response;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 40 ~ reserveOffer ~ error",
            error
        );
    }
};

const addOffer = async ({
    offer_name,
    city,
    country,
    continent,
    transport,
    departure_time,
    arrival_time,
    apartment,
    apartment_name,
    accomodation,
    stars,
    price,
    has_tv,
    has_ac,
    has_internet,
    has_fridge,
    destination_image,
}) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/offer", {
            offer_name,
            city,
            country,
            continent,
            transport,
            departure_time,
            arrival_time,
            apartment,
            apartment_name,
            accomodation,
            stars,
            price,
            has_tv,
            has_ac,
            has_internet,
            has_fridge,
            destination_image,
        });

        return response;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 40 ~ reserveOffer ~ error",
            error
        );
    }
};

const getReservations = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/reservations");

        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 200 ~ getReservations ~ error",
            error
        );
    }
};

const confirmReservations = async (id) => {
    try {
        const response = await axios.post(
            `http://127.0.0.1:8000/res/update/${id}`,
            {}
        );

        return response;
    } catch (error) {
        console.log(
            "🚀 ~ file: OfferService.js ~ line 216 ~ confirmReservations ~ error",
            error
        );
    }
};

export const OfferService = {
    getAllOffers,
    reserveOffer,
    searchOffers,
    deleteOffer,
    updateOffer,
    addOffer,
    getReservations,
    confirmReservations,
};
