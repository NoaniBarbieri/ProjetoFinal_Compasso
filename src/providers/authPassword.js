import React, { useState, useEffect } from "react";

//vazio
export const PassContext = React.createContext({});

export const PassProvider = (props) => {
    const [pass, setPass] = useState({
        password: "",
    });

    useEffect(() => {
        const passStorage = localStorage.getItem("pass");
        if(passStorage){
            setPass(JSON.parse(passStorage));
        }else{
            setPass({
                pass: "",
            });
        }
    }, []);


    return (
        < PassContext.Provider value={{pass, setPass }}>
            {props.children}
        </ PassContext.Provider>
    )
}

export const usePass = () => React.useContext(PassContext);