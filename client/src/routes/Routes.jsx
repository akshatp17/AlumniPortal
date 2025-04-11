import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import Loading from "../pages/Loading";

// Lazy-loaded pages
const Landing = lazy(() => import("../pages/Landing"));
const Login = lazy(() => import("../pages/forms/Login"));
const Register = lazy(() => import("../pages/forms/Register"));
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/User/User"));
const AlumniList = lazy(() => import("../pages/features/AlumniList"));
const Error = lazy(() => import("../pages/Error"));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                {/* Main layout with header and footer */}
                <Routes>
                    {/* Public routes without layout */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Error />} />

                    {/* All other routes use MainLayout */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Landing />} />
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/user"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/alumni-list"
                            element={
                                <ProtectedRoute>
                                    <AlumniList />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
