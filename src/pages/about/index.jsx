import { Header } from "../../components/Header"
import {
    AboutContainer, 
    ContainerContent,
    PhotoProfile, 
    AboutText, 
    AboutTextH1, 
    AboutTextH3, 
    Image
} from './styles.js'

export const About = (props) => {

    return (
        <AboutContainer>
        <Header />
        <ContainerContent>
            <PhotoProfile>
                <Image src="https://github.com/leonardojcpg.png" alt="" />
            </PhotoProfile>
            <AboutText>
                <AboutTextH1>{props.aboutTextH1}</AboutTextH1>
                <AboutTextH3>{props.aboutTextH3}</AboutTextH3>
                <p>{props.pText1}</p><br></br>
                <p>{props.pText2}</p>
            </AboutText>
        </ContainerContent>
        </AboutContainer>
    )
}