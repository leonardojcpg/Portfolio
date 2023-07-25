import {Header} from '../../components/header/index.jsx'

export const Techs = () => {

    const techs = [
        {
            name: "Html",
            img: "",
            description: ""
        },
        {
            name: "Css",
            img: "",
            description: ""
        },
        {
            name: "Javascript",
            img: "",
            description: ""
        },
        {
            name: "React Js",
            img: "",
            description: ""
        },
        {
            name: "Typescript",
            img: "",
            description: ""
        },
        {
            name: "Node Js",
            img: "",
            description: ""
        },
        {
            name: "MySQL",
            img: "",
            description: ""
        },
        {
            name: "Java",
            img: "",
            description: ""
        }
    ]

    
  return (
    <>
        <Header />
        {techs.map((tech, index) => (
            <TechCard key={index}>
            <h3>{tech.name}</h3>
            <img src={tech.img} alt={tech.name} />
            <p>{tech.description}</p>
            </TechCard>
        ))}
    </>
  );
};
