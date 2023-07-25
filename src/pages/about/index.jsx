import { Header } from "../../components/header"
import {AboutContainer, ContainerContent} from './styles.js'

export const About = () => {
    return (
        <AboutContainer>
        <Header />
        <ContainerContent>
            <div className="photoProfile">
                <img src="https://github.com/leonardojcpg" alt="" />
            </div>
            <div className="aboutText"></div>
        </ContainerContent>
        </AboutContainer>
    )
}