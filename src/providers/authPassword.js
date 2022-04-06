import React, { useState} from "react";

//vazio
export const PassContext = React.createContext({});

export const PassProvider = (props) => {
    const [pass, setPass] = useState({
        password: "",
    });

    return (
        < PassContext.Provider value={{pass, setPass }}>
            {props.children}
        </ PassContext.Provider>
    )
}

export const usePass = () => React.useContext(PassContext);