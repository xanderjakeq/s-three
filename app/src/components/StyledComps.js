import styled, {css, keyframes} from 'styled-components'

// CONSTANTS
const imgWidth = 30
const fontSize = 1
const navHeight = 50

export const AuthButton = styled.input`
    background: none;
    ${props => props.isActive && `
        background: blue;
    `}
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 100%;
    padding: 0 10px;
    height: ${navHeight}px;
    background: white;

    position: sticky;
    top: 0;
    left: 0;
`
const slideDown = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
        transform: rotate(180deg);
    }
`;
const slideUp = keyframes`
    from {
    transform: rotate(180deg);
    }

    to {
        transform: rotate(0deg);
    }
`;
const optionsAnimation = (animation) => css`
    ${animation} 2s linear;
`
export const OptionsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    ${({expanded}) => expanded ? css`
        animation: ${optionsAnimation(slideDown)} ;
    `: css`
        animation: ${optionsAnimation(slideUp)} ;
    `}
`


// SearchPage
export const SongsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 0 auto;
`

export const TrackPreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 5px 0;
    h1{
        font-size: ${fontSize}em;
        text-align: left;
    }
    h2{
        font-size: ${fontSize/1.5}em;
        text-align: left;
    }
    div{
        width: 100%;
        margin: 0 0 10px;
        margin-left: 10px;
    }
    img{
        width: ${imgWidth}%;
        height: ${imgWidth}%;
    }
`
