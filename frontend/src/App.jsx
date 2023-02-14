import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import Offers from "./pages/Offers";
import AdminOffers from "./pages/AdminOffers";
import AuthGuard from "./components/AuthGuard";
import AdminProfile from "./pages/AdminProfile";
import Users from "./pages/Users";
import Reservation from "./pages/Reservation";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route element={<AuthGuard />}>
                <Route path="/adminOffers" element={<AdminOffers />} />
                <Route path="/profile" element={<AdminProfile />} />
                <Route path="/users" element={<Users />} />
                <Route path="/reservations" element={<Reservation />} />
            </Route>
        </Routes>
    );
}

export default App;
