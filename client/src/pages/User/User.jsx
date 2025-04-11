import axios from 'axios';
import { motion } from 'framer-motion';
import { CircleUserRound, Pencil } from "lucide-react";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState("Name");
    const [mail, setMail] = useState("user@gmail.com");
    const [user, setUser] = useState("username");
    const [batch, setBatch] = useState("batch");
    const [course, setCourse] = useState("Course");
    const [location, setLocation] = useState("Location");
    const [phone, setPhone] = useState("Phone");
    const [prof, setProf] = useState("Profession");

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('userToken');
        navigate("/", { replace: true });
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('userToken');
            const response = await axios.get("http://localhost:8080/v1/current-user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setName(response.data.user.name);
            setMail(response.data.user.email);
            setUser(response.data.user.username);
            setBatch(response.data.user.batch);
            setCourse(response.data.user.course);
            setLocation(response.data.user.location);
            setPhone(response.data.user.phone);
            setProf(response.data.user.profession);
        } catch (error) {
            console.error("Login error: ", error.response?.data || error.message);
        }
    };
    return (
        <>
            {/* Animated Container */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='flex justify-around p-3 mt-5'
            >
                <motion.div className="left flex gap-2" whileHover={{ scale: 1.02 }}>
                    <CircleUserRound size={56} />
                    <div>
                        <motion.h1 className='text-3xl' initial={{ x: -20 }} animate={{ x: 0 }}>
                           Welcome! {name}
                        </motion.h1>
                        <motion.h3 className='text-xl' initial={{ x: -20 }} animate={{ x: 0 }} transition={{ delay: 0.1 }}>
                            @{user}
                        </motion.h3>
                    </div>
                </motion.div>

                <motion.div className="right h-full" whileHover={{ scale: 1.05 }}>
                    <button
                        className='flex gap-1 justify-center items-center bg-blue-600 text-white px-5 py-2 rounded-full'
                        onClick={() => { setIsEdit(!isEdit) }}
                    >
                        <span>Edit Profile</span>
                        <Pencil size={18} />
                    </button>
                </motion.div>
            </motion.div>

            {/* Animated Details Section */}
            <motion.div
                className='flex justify-around items-center my-3 rounded-4xl w-full mx-auto text-2xl space-y-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='space-y-4'>
                    <h1>Name</h1>
                    <h1>Username</h1>
                    <h1>Email</h1>
                    <h1>Phone</h1>
                    <h1>Batch</h1>
                    <h1>Course</h1>
                    <h1>Profession</h1>
                    <h1>Location</h1>
                </div>

                <div className='space-y-4'>
                    <h1>:</h1>
                    <h1>:</h1>
                    <h1>:</h1>
                    <h1>:</h1>
                    <h1>:</h1>
                    <h1>:</h1>
                    <h1>:</h1>
                    <h1>:</h1>
                </div>

                <motion.div
                    className='space-y-4'
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1>{name}</h1>
                    <h1>{user}</h1>
                    <h1>{mail}</h1>
                    <h1>{phone}</h1>
                    <h1>{batch}</h1>
                    <h1>{course}</h1>
                    <h1>{prof}</h1>
                    <h1>{location}</h1>
                </motion.div>
            </motion.div>

            {/* Animated Sign Out Button */}
            <motion.div
                className='flex justify-center items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
            >
                <button
                    className='bg-blue-600 text-white px-5 py-2 rounded-full'
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </motion.div>
        </>
    )
}

export default User;
