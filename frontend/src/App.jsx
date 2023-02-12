import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Home } from "./pages/home";
import Offers from "./pages/Offers";

function App() {
    axios
        .post("http://127.0.0.1:8000/login", {
            email: "ray23@gmail.com",
            password: "test123",
        })
        .then((data) => {
            console.log(data);
            // getRes();
        });

    const getRes = () => {
        axios.get("http://127.0.0.1:8000/user/3").then(({ data }) => {
            console.log(data);
        });
    };
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
        </Routes>
    );
}

export default App;
