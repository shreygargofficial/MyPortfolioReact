import React from "react";

export const iphoneContext = React.createContext({ isIphone: true });
const isIphone = () => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};
const IphoneContextProvider = ({ children }) => {
    return <iphoneContext.Provider value={{isIphone:isIphone()}}>
        {children}
    </iphoneContext.Provider>
}

export default IphoneContextProvider