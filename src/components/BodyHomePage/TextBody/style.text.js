import styled from "styled-components";

export const TextBlackMission = styled.span`
    color: #222222;
    font-size: clamp(12px,1.5vw,24px);
    text-align: right;
    font-family: MarkPro;
`;

export const TextRedMediumMission = styled(TextBlackMission)`
    color: #C12D18;
    font-size: clamp(16px,2vw,36px);
    font-family: MarkProBold;
`;

export const TextRedGreatMission = styled(TextRedMediumMission)`
    font-size: clamp(20px,3.5vw,64px);
`;

export const TextsMissionContainer = styled.div`
    flex: 1.3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 60px;

    @media (max-width: 90vh) {
        display: none;
    }
`;
