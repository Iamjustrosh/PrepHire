import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Pricing from "../pages/Pricing";
import Companies from "../pages/Companies";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/companies" element={<Companies />} />
    </Routes>
  );
}
