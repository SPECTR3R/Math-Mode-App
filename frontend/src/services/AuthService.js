import React, { useState, useEffect, useContext, createContext } from 'react';

import handleAsync from '../services/handleAsync';

//Axios config
import axios from 'axios';
const baseURL = 'http://localhost:3000';
const service = axios.create({
  baseURL,
  withCredentials: true,
});

const authContext = createContext();

// Provider component that wraps your app and makes auth object available to any child component that calls useAuth()
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {

  const [user, setUser] = useState(null);

  const signup = async data => {
    const response = await handleAsync(() => service.post('/signup', data));
    setUser(response.user);
    return response;
  };

  const login = async data => {
    console.log(data)
    const response = await handleAsync(() => service.post('/login', data));
    setUser(response.user);
    return response;
  };

  const logout = async data => {
    await handleAsync(() => service.get('/logout'));
    return setUser(false);
  };

  // Subscribe to user on mount and cleanup subscription on unmount
  useEffect(() => {
    const unsubscribe = async () => {
      const user = await handleAsync(() => service.get('/currentUser'));
      if (user) setUser(user);
      else setUser(false);
    };
    return () => unsubscribe();
  }, []);

  return {
    user,
    login,
    signup,
    logout,
  };
}
