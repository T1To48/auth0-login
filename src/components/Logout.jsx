import { useAuth0 } from "@auth0/auth0-react";

import React, { useEffect } from "react";

const Logout = () => {
  const { user,logout, isAuthenticated } = useAuth0();
useEffect(()=>{
    if(isAuthenticated){
        console.log(user)
    }
    
},[isAuthenticated])
  return isAuthenticated && <button onClick={() => logout()}>Logout</button>;
};

export default Logout;
