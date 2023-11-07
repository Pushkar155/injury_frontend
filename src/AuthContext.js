import React, { createContext, useContext, useState } from 'react';

// Create a new context
const AuthContext = createContext();

// Create a custom hook to access the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider component to wrap your app
export const AuthProvider = ({ children }) => {
    const [id, setId] = useState('');

    const [data,setData]=useState([]);
  return (
    <AuthContext.Provider value={{id,setId,data,setData }}>
      {children}
    </AuthContext.Provider>
  );
};