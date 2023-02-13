import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import Offers from "./pages/Offers";
import AdminOffers from "./pages/AdminOffers";
import AuthGuard from "./components/AuthGuard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route element={<AuthGuard />}>
                <Route path="/adminOffers" element={<AdminOffers />} />
            </Route>
            {/* <Route path="/image" element={<Image />} /> */}
        </Routes>
    );
}

export default App;
