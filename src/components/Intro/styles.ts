import styled from "styled-components";

import bannerIntro from "../../assets/Background.jpg"

const ICON_COLORS = {
    'yellow-light': 'yellow',
    'yellow-dark': 'yellow-dark',
    'gray': 'base-text',
    'purple-dark': 'purple-dark',
} as const

interface StatusIcons {
    statusIcons: keyof typeof ICON_COLORS
  }

export const IntroContainer = styled.article`
    margin-top: 5.75rem;

    background: url(${bannerIntro});
    height: 544px;


    &>div  {
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: 1120px;
        padding: 5.87rem 0;
        gap: 3.5rem;
    }
`

export const IntroInfo = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 3rem;
        max-width: 588px;
    }

    span {
        margin-top: 1rem;
        font-size: 1.25rem;
        max-width: 588px;
    }
`

export const IntroItems = styled.div`
    margin-top: 4.12rem;
    display: grid;
    grid-template-columns: 300px 300px;
    width: 100%;
    max-width: 567px;
    gap: 2.5rem;
`

export const IntroIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:0.8rem;
`

export const IconsIntro = styled.div<StatusIcons>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: ${(props) =>
      props.theme[ICON_COLORS[props.statusIcons]]};;

`
