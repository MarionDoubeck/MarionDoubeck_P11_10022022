import React, { useEffect, useState } from 'react';
import { NavLink} from "react-router-dom";

const Navigation = () => {
  const pathname=window.location.pathname
  const [aProposClassName, setAProposClassName] = useState("navItem")
  const [homeClassName, setHomeClassName] = useState("navItem")
  useEffect(() => {
    if(pathname === "/aPropos"){
      setAProposClassName("navItem active")
    }else if (pathname === "/"){
      setHomeClassName("navItem active")
    }
  },[pathname])
  
  return (
    <div className="navigation">
      <NavLink exact="true" to="/">
        <span className={homeClassName}>Accueil</span>
      </NavLink>
      <NavLink exact="true" to="/aPropos">
        <span className={aProposClassName}>A Propos</span>
      </NavLink>
    </div>
  );
};

export default Navigation;