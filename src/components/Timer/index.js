import React, { useState, useRef, useEffect } from "react";
import { TimerLogoutContainer } from './style';
import { ButtonFooterContainer, ButtonResetTimer, ButtonLogout } from "../Buttons/style.buttons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/authUser";
import { usePass } from "../../providers/authPassword";

export const TimerToLogout = () => {

    const [timer, setTimer] = useState(180);
    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
    }

    const resetTimer = () => {
        setTimer(180);
    }

    const navigate = useNavigate();

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear();
    }, [])

    useEffect(() => {
        if (timer === 0) {
            localStorage.removeItem('user')
            setUser({user: ''})
            localStorage.removeItem('pass')
            setPass({password: ''})
            navigate('/')
        }

    }, [timer]);

    const { setUser } = useAuth();
    const { setPass } = usePass();

    const logout = () => {
        localStorage.removeItem('user')
        setUser({user: ''})
        localStorage.removeItem('pass')
        setPass({password: ''})
        navigate('/')
    }

    return (
        <>
            <TimerLogoutContainer>
                <span>Application <br /> refresh in</span>
                <div>
                    <p>{timer}</p>
                    <span>seconds</span>
                </div>
            </TimerLogoutContainer>

            <ButtonFooterContainer>
                <ButtonResetTimer onClick={resetTimer} >Continuar<br />Navegando</ButtonResetTimer>
                <ButtonLogout onClick={logout} >Logout</ButtonLogout>
            </ButtonFooterContainer>
        </>
    )
};
