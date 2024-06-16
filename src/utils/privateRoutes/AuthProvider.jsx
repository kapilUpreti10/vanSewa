/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/api/users/getUser");
        console.log("hello mia");
        console.log("hello world", response.data.data._id);
        setUser(response.data.data._id);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  console.log("user in authprovider is", user);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
