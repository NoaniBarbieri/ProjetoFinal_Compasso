import React from "react";
import logo from "../../assets/images/LogoCompasso.png"
import { Nav, ContainerHeader } from "./style";
import {Clock} from '../Clock/index'

function Header() {
    return (
        <ContainerHeader>
            <Nav>
                <img className="logo" src={logo} alt="projectHome"/>
                <Clock/>
                <h1>API CLIMA</h1>
            </Nav>
        </ContainerHeader>
    )
}

export default Header