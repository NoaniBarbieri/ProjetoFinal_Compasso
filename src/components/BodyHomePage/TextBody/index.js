import React from 'react';
import{TextsMissionContainer,TextRedMediumMission, TextRedGreatMission, TextBlackMission} from './style.text'

function TextBody() {
  return (
    <TextsMissionContainer>
        <TextRedMediumMission>Our mission is</TextRedMediumMission>
        <TextBlackMission>Nossa missão é</TextBlackMission>

        <TextRedGreatMission>to transform the world</TextRedGreatMission>
        <TextBlackMission>transformar o mundo</TextBlackMission>

        <TextRedGreatMission>building digital experiences</TextRedGreatMission>
        <TextBlackMission>construindo experiências digitais</TextBlackMission>

        <TextRedGreatMission>that enable our client’s growth</TextRedGreatMission>
        <TextBlackMission>que permitam o crescimento dos nossos clientes</TextBlackMission>
    </TextsMissionContainer>
  )
}

export default TextBody;