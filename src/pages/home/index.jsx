import { Header } from '../../components/header/index.jsx'
import './style.js'
import bgImg from '../../assets/bgImg.jpg'

export const Home = () => {
    return (
        <div className="container-home">
            <Header/>
            <div className="background-img">
                <img src={bgImg} alt="" />
            </div>
            <div className="home-body">
                <span>Leonardo Gomes</span>
            </div>
        </div>
    )
}