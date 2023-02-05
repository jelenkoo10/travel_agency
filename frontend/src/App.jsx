import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const send = async () =>
            axios.get("http://127.0.0.1:8000/offer/13").then(({ data }) => {
                console.log(data[0].id);
            });

        send();
    }, []);

    return (
        <BrowserRouter>
            <button type="submit" label="Send">
                Send!
            </button>
        </BrowserRouter>
    );
}

export default App;
