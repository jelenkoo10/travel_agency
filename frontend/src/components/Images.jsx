import React, { useEffect } from "react";
import { useState } from "react";
import arrow from "../assets/arrow.png";

const Images = ({ offer }) => {
    const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);
    const incrementCount = () => {
        if (count === 5) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        if (count === 0) {
            setCount(5);
        } else {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        const array = [];
        const imagePath = `/cityImages/${offer.city.toLowerCase()}.jpg`;
        const basic = `/roomImages/${offer.accomodation.substr(0, 3)}.jpg`;
        const room = `/roomImages/${offer.accomodation.substr(0, 3)} room.jpg`;
        const view = `/roomImages/${offer.accomodation.substr(0, 3)} view.jpg`;
        const kitchen = `/roomImages/${offer.accomodation.substr(
            0,
            3
        )} kitchen.jpg`;
        const bathroom = `/roomImages/${offer.accomodation.substr(
            0,
            3
        )} bathroom.jpg`;

        array.push(imagePath);
        array.push(basic);
        array.push(room);
        array.push(view);
        array.push(kitchen);
        array.push(bathroom);
        setImages(array);
    }, []);

    return (
        <div className="relative w-[100%] h-[100%]">
            <img
                src={images[count]}
                alt="offer image"
                className="w-[100%] h-[100%]"
            />
            <button
                onClick={decrementCount}
                className="absolute z-[5] top-[42%] left-0 rotate-180 "
            >
                <img src={arrow} alt="left" className="w-[200px] h-[200px]" />
            </button>
            <button
                onClick={incrementCount}
                className="absolute z-[5] top-[42%] right-0"
            >
                <img src={arrow} alt="right" className=" w-[200px] h-[200px]" />
            </button>
        </div>
    );
};

export default Images;
