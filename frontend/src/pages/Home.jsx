import React from "react";
import Navigation from "../components/Navigation";
import logo from "../assets/logo.png";

export const Home = () => {
    // const bgImage = `bg-[url('./assets/homeBg.jpg')]`;
    const bgImage = `bg-[url('./assets/homeBgDark.jpg')]`;
    document.body.style.overflow = "hidden";

    return (
        <div className="w-[100%] max-h-[100%]">
            <Navigation />
            <div
                className={`${bgImage} absolute bg-center bg-cover bg-[#fffcfc] bg-blend-darken bg-no-repeat h-[100%] w-[100%] flex justify-center items-center flex-col`}
            >
                <img
                    src={logo}
                    alt="logo"
                    className="w-[600px] h-[337px] mb-[100px]"
                ></img>
                <h1 className="text-3xl text-white absolute top-[490px]">
                    ANYTHING LIFE CAN OFFER
                </h1>
            </div>
        </div>
    );
};
