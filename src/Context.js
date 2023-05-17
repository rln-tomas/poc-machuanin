import React, { createContext, useState } from "react";

export const Context = createContext({});

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Context.Provider
      value={{
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </Context.Provider>
  );
};
