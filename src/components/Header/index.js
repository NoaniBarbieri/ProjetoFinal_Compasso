import React from "react";
import logo from "../../assets/images/LogoCompasso.png"
import { Nav, ContainerHeader } from "./style";

function Header() {
    return (
        <ContainerHeader>
            <Nav>
                <img className="logo" src={logo} alt="projectHome"/>
            </Nav>
        </ContainerHeader>
    )
}

export default Header