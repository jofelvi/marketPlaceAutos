import { Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/Layout/Layout";
import Home from './pages/home';
import Login from "./pages/login";
import Buyer from "./pages/register/buyer";
import SelectedBuyerSeller from "./pages/register/selected-buyer-seller";
import Seller from "./pages/register/seller";
import FilterCars from "./pages/filter-cars";
import DetailsCars from "./pages/details-car";
import PublishVehicle from "./pages/publish-vehicle";
import RequireAuth from "./utils/auth/requireAuth";
import Profile from "./pages/profile";
import PageNotFound from "./pages/page-not-found";

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
                <Route path="/publish-vehicle" element={
                    <RequireAuth>
                        <PublishVehicle />
                    </RequireAuth>
                } />
                <Route path="/profile" element={
                    <RequireAuth>
                        <Profile />
                    </RequireAuth>
                } />
                <Route path="*" element={<PageNotFound />} />

            </Route>
        </Routes>
    )
}

export default App
