import { FooterContainer, FooterArea } from './style';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterArea>
                <p className={'leftText'}>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            </FooterArea>

            <FooterArea>
                {/* Area Input  */}
            </FooterArea>

            <FooterArea>
                 {/* Area Timer  */}
            </FooterArea>
        </FooterContainer>
    );
};

export default Footer;