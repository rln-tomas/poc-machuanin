import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

const Layout = ({ children }) => {
  const adminContext = useContext(Context);

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    if (isAdmin) adminContext.setIsAdmin(true);
  }, []);

  return (
    <div>
      <p>{adminContext.isAdmin ? "Hola admin" : "Raja de aca"}</p>
      {children}
    </div>
  );
};

export default Layout;
