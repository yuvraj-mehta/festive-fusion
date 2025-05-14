import React from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load components
const Home = React.lazy(() => import("./pages/Home"));
const FestivalDetails = React.lazy(() => import("./pages/FestivalDetails"));
const HiddenGems = React.lazy(() => import("./pages/HiddenGems"));
const UpcomingFestivals = React.lazy(() => import("./pages/UpcomingFestivals"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival/:id" element={<FestivalDetails />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
        <Route path="/upcoming" element={<UpcomingFestivals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
