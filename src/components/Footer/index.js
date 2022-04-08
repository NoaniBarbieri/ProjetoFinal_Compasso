import { FooterContainer, FooterArea } from './style';
import {InputFooter} from '../Inputs/input.footer'

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
                 {/* Area Timer  */}
            </FooterArea>
        </FooterContainer>
    );
};

export default Footer;