import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Landing from "../pages/Landing";

// Lazy-loaded components for better performance
const Login = lazy(() => import("../pages/forms/Login"));
const Register = lazy(() => import("../pages/forms/Register"));
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/User"));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Landing />
                            <Footer />
                        </>
                    } />
                    <Route path="/login" element={
                        <>
                            <Login />
                        </>
                    } />
                    <Route path="/register" element={
                        <>
                            <Register />
                        </>
                    } />
                    {/* Protected Routes */}
                    <Route path="/home" element={<ProtectedRoute>
                        <Navbar />
                        <Home />
                        <Footer />
                    </ProtectedRoute>} />

                    <Route path="/user" element={<ProtectedRoute>
                        <Navbar />
                        <Profile />
                        <Footer />
                    </ProtectedRoute>} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
