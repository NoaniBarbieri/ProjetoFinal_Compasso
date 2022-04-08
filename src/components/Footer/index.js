import { FooterContainer, FooterArea } from './style';
import {InputFooter} from '../Inputs/input.footer'
import { TimerToLogout } from '../Timer/index'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterArea>
                <p className={'leftText'}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            </FooterArea>

            <FooterArea>
                <InputFooter/>
            </FooterArea>

            <FooterArea>
                <TimerToLogout/>
            </FooterArea>
        </FooterContainer>
    );
};

export default Footer;