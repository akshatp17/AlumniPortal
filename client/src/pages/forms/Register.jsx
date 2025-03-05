import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [step, setStep] = useState(1); // State for multi-step form
    const [formData, setFormData] = useState({}); // Store form data across steps
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const tkn = localStorage.getItem('userToken');
        if (tkn) {
            navigate('/home');
        }
    }, [navigate]);

    const handleNext = (data) => {
        setFormData({ ...formData, ...data }); // Save data from Step 1
        setStep(2); // Move to Step 2
    };

    const handleRegister = async (data) => {
        const finalData = { ...formData, ...data }; // Merge Step 1 & Step 2 data
        try {
            const response = await axios.post("http://localhost:8080/v1/register", finalData);
            localStorage.setItem("userToken", response.data.token);
            navigate("/home", { replace: true });
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center min-h-screen"
        >
            {/* Register Card */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-1/2 max-w-lg h-screen bg-white p-8 shadow-lg rounded-lg flex flex-col justify-center"
            >
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-800 text-center"
                >
                    Join the Alumni Network
                </motion.h2>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-800 text-center"
                >
                    {step === 1 ? "Step 1: Basic Details" : "Step 2: Account Details"}
                </motion.h2>

                <hr className="border-gray-300 my-4" />

                {/* Step 1: User Info */}
                {step === 1 && (
                    <form onSubmit={handleSubmit(handleNext)} className="space-y-4">
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label className="block font-medium">Full Name:</label>
                            <input
                                type="text"
                                placeholder="Enter Full Name"
                                {...register("name", { required: "Full Name is required" })}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
                            />
                            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
                        </motion.div>

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <label className="block font-medium">Username:</label>
                            <input
                                type="text"
                                placeholder="Choose a Username"
                                {...register("username", { required: "Username is required" })}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
                            />
                            {errors.username && <p className="text-red-600 text-xs mt-1">{errors.username.message}</p>}
                        </motion.div>

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <label className="block font-medium">Email:</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
                            />
                            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
                        </motion.div>

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <label className="block font-medium">Password:</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Set a Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                                    })}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700 pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Eye /> : <EyeOff />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password.message}</p>}
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                            type="submit"
                        >
                            Next
                        </motion.button>
                    </form>
                )}

                {/* Step 2: Account Info */}
                {step === 2 && (
                    <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label className="block font-medium">Phone:</label>
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Only numbers are allowed",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Phone number must be at least 10 digits",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Phone number cannot exceed 10 digits",
                                    }
                                })}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
                                onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                            />
                            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
                        </motion.div>

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <label className="block font-medium mt-4">Course:</label>
                            <select
                                {...register("course", { required: "Course selection is required" })}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
                            >
                                <option value="">Select your course</option>
                                <option value="BE/BTech">BE/BTech</option>
                                <option value="BCA">BCA</option>
                                <option value="BCom">BCom</option>
                                <option value="BBA">BBA</option>
                            </select>
                            {errors.course && <p className="text-red-600 text-xs mt-1">{errors.course.message}</p>}
                        </motion.div>

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <label className="block font-medium mt-4">Profession:</label>
                            <select
                                {...register("profession", { required: "Profession selection is required" })}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
                            >
                                <option value="">Select your profession</option>
                                <option value="Businessman">Businessman</option>
                                <option value="Civil Servant">Civil Servant</option>
                                <option value="Entrepreneur">Entrepreneur</option>
                                <option value="Government Job">Government Job</option>
                                <option value="Hardware Engineer">Hardware Engineer</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="Others">Others...</option>
                            </select>
                            {errors.profession && <p className="text-red-600 text-xs mt-1">{errors.profession.message}</p>}

                        </motion.div>

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <label className="block font-medium mt-4">Year of Passing:</label>
                            <select
                                {...register("yearOfPassing", { required: "Year of passing is required" })}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
                            >
                                <option value="">Select year of passing</option>
                                {[...Array(new Date().getFullYear() - 1978)].map((_, i) => {
                                    const year = 1979 + i;
                                    return <option key={year} value={year}>{year}</option>;
                                })}
                            </select>
                            {errors.yearOfPassing && <p className="text-red-600 text-xs mt-1">{errors.yearOfPassing.message}</p>}
                        </motion.div>

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <label className="block font-medium mt-4">Current Location:</label>
                            <input
                                type="text"
                                placeholder="Enter your current location"
                                {...register("location", { required: "Location is required" })}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
                            />
                            {errors.location && <p className="text-red-600 text-xs mt-1">{errors.location.message}</p>}
                        </motion.div>

                        <div className="flex justify-between">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-1/3 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
                                onClick={() => setStep(1)}
                                type="button"
                            >
                                Back
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-1/3 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                                type="submit"
                            >
                                Submit
                            </motion.button>
                        </div>
                    </form>
                )}

                <p className="text-center text-gray-600 mt-4">
                    Already registered?{" "}
                    <Link to="/login" className="text-blue-700 font-semibold hover:underline">
                        Sign in!
                    </Link>
                </p>
            </motion.div>


            {/* Background Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='flex flex-1 h-screen'
            >
                Here will be the art for login
                {/* <img src="https://media.istockphoto.com/id/1307188897/video/abstract-background.jpg?s=640x640&k=20&c=HWuCUKzzrfR77rQBUudirMjWBHwm_4XzSuWR9elhBJ4=" alt="bg" className="w-full h-full object-cover object-center block" /> */}
            </motion.div>
        </motion.div>
    );
};

export default Register;
