import React from "react";
import { TimerLogoutContainer } from './style';
import { ButtonFooterContainer, ButtonResetTimer, ButtonLogout } from "../Buttons/style.buttons";


export const TimerToLogout = () => {
  
    return (
        <>
            <TimerLogoutContainer>
                <span>Application <br /> refresh in</span>
                <div>
                    {/* Inserir Timer */}
                    <span>seconds</span>
                </div>
            </TimerLogoutContainer>

            <ButtonFooterContainer>
                <ButtonResetTimer >Continuar<br />Navegando</ButtonResetTimer>
                <ButtonLogout >Logout</ButtonLogout>
            </ButtonFooterContainer>
        </>
    )
};
