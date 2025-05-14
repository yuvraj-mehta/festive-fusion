import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Lazy load components
const Home = React.lazy(() => import("./pages/Home"));
const FestivalDetails = React.lazy(() => import("./pages/FestivalDetails"));
const HiddenGems = React.lazy(() => import("./pages/HiddenGems"));
const UpcomingFestivals = React.lazy(() => import("./pages/UpcomingFestivals"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Profile = React.lazy(() => import("./pages/Profile"));

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/festival/:id" element={<FestivalDetails />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
        <Route path="/upcoming" element={<UpcomingFestivals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upcoming-festivals" element={<UpcomingFestivals />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />

        {/* Protected routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
