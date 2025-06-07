import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router";

function Protect() {
  const { isLoggedIn } = useContext(AuthContext);
  // const isLoggedIn = false;
  const Navigate = useNavigate();

  if (isLoggedIn === false) {
    return Navigate("/login");
  }

  return <Outlet />;
}

export default Protect;
