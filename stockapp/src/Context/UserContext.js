import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [subscribedStocks, setSubscribedStocks] = useState([]);
  

  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      const storedStocks = JSON.parse(localStorage.getItem(`subscribedStocks-${userEmail}`)) || [];
      setSubscribedStocks(storedStocks);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      localStorage.setItem(`user-${userEmail}`, JSON.stringify(user));
      localStorage.setItem(`subscribedStocks-${userEmail}`, JSON.stringify(subscribedStocks));
    }
  }, [user, subscribedStocks]);

  const subscribeToStock = (stock) => {
    if (!subscribedStocks.includes(stock)) {
      setSubscribedStocks([...subscribedStocks, stock]);
    }
  };

  const logoutUser = () => {
    if (user) {
      const userEmail = user.email;
      localStorage.removeItem(`user-${userEmail}`);
      localStorage.removeItem(`subscribedStocks-${userEmail}`);
    }
    setUser(null);
    setSubscribedStocks([]);
  };

  return (
    <UserContext.Provider value={{ user, setUser,setSubscribedStocks, subscribedStocks, subscribeToStock, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
