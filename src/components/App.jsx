import Layout from "./Layout/Layout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import HotelOptions from "./HotelOptions/HotelOptions";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home Page</div>} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/hotel" element={<HotelOptions />} />
          <Route path="*" element={<div>Home Page</div>} />
        </Route>
      </Routes>
    </>
  );
}
