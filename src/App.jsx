import { Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import Home from './pages/home';
import Login from "./pages/login";

function App() {
    return (
        <Routes>
            <Route path="" element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}

export default App
