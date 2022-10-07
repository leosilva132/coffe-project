import { IconsIntro, IntroContainer, IntroIcons, IntroInfo, IntroItems } from "./styles";
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'

import coffeImg from '../../assets/coffe-info-img.png'



export function Intro(){
    return (
        <IntroContainer>
            <div>
                <IntroInfo>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    <IntroItems>
                        <IntroIcons>
                                <IconsIntro statusIcons="yellow-dark">
                                    <ShoppingCartSimple size={16} weight='fill' color="#fff"/>
                                </IconsIntro> Compra simples e segura
                            </IntroIcons>

                            <IntroIcons>
                                <IconsIntro statusIcons="gray">
                                    <Package size={16} color="#fff"/> 
                                </IconsIntro> Embalagem mantém o café intacto
                            </IntroIcons>

                            <IntroIcons>
                                <IconsIntro statusIcons="yellow-light">
                                    <Timer size={16} color="#fff" weight="fill"/>
                                </IconsIntro> Entrega rápida e rastreada
                            </IntroIcons>

                            <IntroIcons>
                                <IconsIntro statusIcons="purple-dark">
                                    <Coffee size={16} color="#fff"/>
                                </IconsIntro> O café chega fresquinho até você
                            </IntroIcons>
                        </IntroItems>
                </IntroInfo>
                <div>
                    <img src={coffeImg} alt="" />
                </div>
            </div>
        </IntroContainer>
        
    )
}