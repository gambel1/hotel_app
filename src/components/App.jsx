import Layout from "./Layout/Layout";
import AuthenticationPage from "../pages/AuthenticationPage/AuthenticationPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="/register" element={<AuthenticationPage />} />
          <Route path="/login" element={<AuthenticationPage />} />

          <Route path="/hotel" element={<div>Hotel Page</div>} />
          <Route path="*" element={<div>Home Page</div>} />
        </Route>
      </Routes>
    </>
  );
}
