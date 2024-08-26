import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const context = createContext();

const Mixcontext = ({ children }) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [savedRecipes, setSavedRecipes] = useState([]);

    const navigate = useNavigate();

    // Function to check local storage on initial load
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = async (user) => {
        try {
            const { data } = await axios.post("/api/auth/login", user);
            localStorage.setItem("token", data.token);
            setIsLoggedIn(true);
            console.log(data.message, data.token);
            navigate('/profile');
        } catch (error) {
            console.log("Login failed:", error.response?.data || error.message);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate('/login');
    };

    const registration = async (user) => {
        try {
            const { data } = await axios.post("api/auth/register", user);
            localStorage.setItem("token", data.token);
            setIsLoggedIn(true);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const addToFavorites = (recipe) => { 
        setFavoriteRecipes((prevFavoriteRecipes) => [...prevFavoriteRecipes, recipe]);
        console.log(favoriteRecipes);
    };

    const addToSaved = (recipe) => {
        setSavedRecipes((prevSavedRecipes) => [...prevSavedRecipes, recipe]);
        console.log(savedRecipes);
    };

    const value = {
        addToFavorites, // Ensure this is defined before this line
        favoriteRecipes,
        login,
        logout,
        isLoggedIn,
        registration,
        addToSaved,
        savedRecipes
    };

    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    );
};

export default Mixcontext;
