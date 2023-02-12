/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                green: "#235431",
                error: "#CD3232",
                red: "#de2b2b",
                lightRed: "#FCE9E9",
                darkRed: "#CD3232",
                lightGreen: "#61ED89",
                hoverGreen: "#4E6E57",
            },
        },
    },
    plugins: [],
};
