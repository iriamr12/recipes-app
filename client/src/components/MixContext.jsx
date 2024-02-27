import React from 'react'
import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const context = createContext();

const Mixcontext = ({children}) => {


    const[favoriteRecipes, setFavoriteRecipes] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate()
  
    const login = async (user) => {
      try{
        const {data} = await axios.post("/api/auth/login", user);
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        console.log(data.message, data.token);
      } catch (error){
        console.log("Login failed:", error.response?.data|| error.message);
      }
    }

    const logout = () => {
      localStorage.removeItem( "token");
      setIsLoggedIn(false)
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

    const addToFavorites = (recipe) =>{ 
        setFavoriteRecipes((prevFavoriteRecipes) => [...prevFavoriteRecipes, recipe]);
        console.log(favoriteRecipes);
    }

    useEffect(() => {
      // Check local storage or any other mechanism to determine if the user is logged in
      // For example, you can check if a token exists in local storage
      const token = localStorage.getItem("token");
      if (token) {
          setIsLoggedIn(true);
      }
   }, []);

    const value = {
        addToFavorites,
        favoriteRecipes,
        login,
        logout,
        isLoggedIn,
        registration,
    }

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}

export default Mixcontext