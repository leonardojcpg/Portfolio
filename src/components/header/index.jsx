import { 
    Title,
    HeaderContainer,
    TitleContainer,
    NavContainer,
    NavLinks,
    NavButtons
 } from './style.js'

export const Header = () => {
    return (
        <HeaderContainer>
            <TitleContainer>
                <Title>Leonardo Gomes</Title>
            </TitleContainer>
            <NavContainer>
                <NavLinks>
                    <NavButtons href='/'>Home</NavButtons>
                    <NavButtons href='/techs'>Techs</NavButtons>
                    <NavButtons href='/projects'>Projects</NavButtons>
                    <NavButtons href='/contact'>Contact</NavButtons>
                </NavLinks>
            </NavContainer>
        </HeaderContainer>
    )
}