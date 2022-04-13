import React from "react";
import logo from "../../assets/images/LogoCompasso.png"
import { Nav, ContainerHeader } from "./style";
import {Clock} from '../Clock/index'
import Climate from '../Climate/index'

function Header() {
    return (
        <ContainerHeader>
            <Nav>
                <img className="logo" src={logo} alt="projectHome"/>
                <Clock/>
                <Climate/>
            </Nav>
        </ContainerHeader>
    )
}

export default Header