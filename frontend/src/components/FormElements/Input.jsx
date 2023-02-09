import React, { useEffect, useReducer } from "react";

import { validate } from "../../utils/validators";

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
            };
        case "TOUCH": {
            return {
                ...state,
                isTouched: true,
            };
        }
        default:
            return state;
    }
};

const Input = ({
    initialValue,
    initialValid,
    id,
    onInput,
    validators,
    label,
    disabled,
    labelStyle,
    type,
    placeholder,
    errorText,
}) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: initialValue || "",
        isTouched: false,
        isValid: initialValid || false,
    });

    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = (event) => {
        dispatch({
            type: "CHANGE",
            val: event.target.value,
            validators: validators,
        });
    };

    const touchHandler = () => {
        dispatch({
            type: "TOUCH",
        });
    };

    return (
        <div className="mb-7 relative">
            <label
                htmlFor={id}
                className={`mb-3 block ${labelStyle} text-darkGray`}
            >
                {label}
            </label>
            <input
                disabled={disabled}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                className={`
              
                ${disabled ? "border-disabled text-textGray" : ""}
                ${
                    !inputState.isValid && inputState.isTouched
                        ? "bg-lightRed border border-darkRed text-darkRed placeholder-darkRed "
                        : ""
                } w-full rounded-md border border-black  py-3 px-2 text-base font-normal text-black outline-none focus:border-hoverGreen focus:shadow-md`}
            />
            {!inputState.isValid && inputState.isTouched && (
                <div className="inline-flex absolute top-[5.6rem] left-0">
                    <img
                        className="mr-2"
                        src="/assets/error-sign.svg"
                        alt="error"
                    />
                    <p className="text-darkRed font-semibold text-sm">
                        {errorText}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Input;
