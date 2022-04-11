import React from 'react';
import { ContainerCentral } from './style';
import TextBody from './TextBody/index'
import  {BallLogo}  from './BallLogo/index'

function BodyHomePage() {
    return (
        <ContainerCentral>
            <BallLogo/>
            <TextBody/>
        </ContainerCentral>
    )
}

export default BodyHomePage;