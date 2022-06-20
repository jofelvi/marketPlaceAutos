import { Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import Home from './pages/home';
import Login from "./pages/login";
import Buyer from "./pages/register/buyer";
import SelectedBuyerSeller from "./pages/register/selected-buyer-seller";
import Seller from "./pages/register/seller";
import FilterCars from "./pages/filter-cars";
import DetailsCars from "./pages/details-car";

function App() {
    return (
        <Routes>
            <Route path="" element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/selected-buyer-seller" element={<SelectedBuyerSeller />} />
                <Route path="/register-buyer" element={<Buyer />} />
                <Route path="/register-seller" element={<Seller />} />
                <Route path="/filter-cars" element={<FilterCars />} />
                <Route path="/details-car/:id" element={<DetailsCars />} />
            </Route>
        </Routes>
    )
}

export default App
