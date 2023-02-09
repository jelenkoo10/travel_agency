import React from "react";
import { Link } from "react-router-dom";

const Button = ({
    to,
    children,
    type,
    disabled,
    onClick,
    className,
    hasIcon,
    other,
}) => {
    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    if (hasIcon) {
        return (
            <button
                type={type}
                onClick={onClick}
                className={`${className} absolute  hover:bg-hoverGreen rounded-[4px] `}
            >
                {children}
            </button>
        );
    }

    if (other) {
        return (
            <button
                type={type}
                onClick={onClick}
                className={`flex justify-center items-center py-[11px] rounded font-semibold text-base cursor-pointer border ${other}`}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            className={`${
                disabled ? "bg-[#a9a9a9]" : "bg-green hover:bg-hoverGreen"
            } 
      hover:shadow-form rounded-[4px] w-full flex justify-center  py-3 px-8 text-center text-base font-semibold text-white outline-none`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
