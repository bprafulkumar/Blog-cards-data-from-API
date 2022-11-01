import React, { createContext,useState } from "react";
export const UserContext = createContext();
export const UserDispatchContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [assetdata , setAssetdata] = useState({})
     console.log(assetdata,"In context compoenent")
    return (
      <UserContext.Provider value={ assetdata }>
        <UserDispatchContext.Provider value={setAssetdata}>
        {children}
      </UserDispatchContext.Provider>
      </UserContext.Provider>
    );
  };

