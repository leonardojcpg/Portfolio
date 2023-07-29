import {
    TechsContainer,
    TechCard,
    TechImg,
    TechsBackground
} from "./styles.js"

import {Header} from '../../components/Header/index.jsx'

import htmlImg from './assets/html5.png'
import cssImg from './assets/css.png'
import javascriptImg from './assets/javascript.png'
import reactImg from './assets/react.png'
import typescriptImg from './assets/typescript.png'
import mySqlImg from './assets/mysql.png'
import javaImg from './assets/java.png'

export const Techs = () => {

    const techs = [
        {
            name: "Html",
            img: htmlImg,
        },
        {
            name: "Css",
            img: cssImg,
        },
        {
            name: "Javascript",
            img: javascriptImg,
        },
        {
            name: "React Js",
            img: reactImg,
        },
        {
            name: "Typescript",
            img: typescriptImg,
        },
        {
            name: "MySQL",
            img: mySqlImg,
        },
        {
            name: "Java",
            img: javaImg,
        }
    ]

    
  return (
    <TechsBackground>
        <Header />
        <TechsContainer>
        {techs.map((tech, index) => (
            <TechCard key={index}>
            <TechImg src={tech.img} height={90} width={90} alt={tech.name} />
            </TechCard>
        ))}
        </TechsContainer>
    </TechsBackground>
  );
};
