import { Header } from "../../components/Header";
import { Intro } from "./components/Intro";
import { Shop } from "./components/Shop";

import { HomeContainer } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <Intro />
            <Shop />
        </HomeContainer>
    )
}