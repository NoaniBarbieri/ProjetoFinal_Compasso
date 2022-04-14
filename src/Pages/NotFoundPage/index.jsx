import React from "react";
import { NotFoundContainer, TextNotFound } from "./style";
import {ImageScarecrow , ImageLogo } from "../../components/Images/style.js";
import { Link } from "react-router-dom";
import Image404 from  '../../assets/images/Scarecrow.png'
import CompassoLogo from  '../../assets/images/LogoCompasso.png'


const NotFound = () => {
    return (
        <div>
            <NotFoundContainer>
                <ImageLogo src={CompassoLogo}/>
                <ImageScarecrow src={Image404}/>
                <TextNotFound>
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <p>The page you were looking for doesn't exist.</p>
                    <Link to="/" style={{ textDecoration: 'none' }}><button>BACK TO LOGIN PAGE</button></Link>
                </TextNotFound>
            </NotFoundContainer>
        </div >
    );
}

export default NotFound;