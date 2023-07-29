import {HomeContainer, HomeSubTitle, HomeTitle} from'./styles'

export const HomeText = ({title, subtitle}) => {
    return (
        <HomeContainer>
            <HomeTitle>{title}</HomeTitle>
            <HomeSubTitle>{subtitle}</HomeSubTitle>
        </HomeContainer>
    )
}