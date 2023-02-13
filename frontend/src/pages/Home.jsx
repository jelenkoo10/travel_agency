import React from "react";
import Navigation from "../components/Navigation";

export const Home = () => {
    const bgImage = `bg-[url('./assets/homeBg.jpg')]`;

    return (
        <div>
            <Navigation />
            <div
                className={`${bgImage} absolute bg-center bg-contain bg-[#c9c5c5] bg-blend-darken bg-repeat-space min-h-[95%] px-[20px] pt-[20px] w-[100%] pb-[80px]`}
            >
                Majmune
            </div>
        </div>
    );
};
