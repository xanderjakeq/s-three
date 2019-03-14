import styled, {css, keyframes} from 'styled-components'

// 
const imgWidth = 30
const fontSize = 1
const navHeight = 50

const spotifyPlayerHeight = 80

export const AppContainer = styled.div`
  text-align: center;
  padding-bottom: ${spotifyPlayerHeight}px;
`


export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - ${spotifyPlayerHeight}px);

    input{
        padding: 10px;
        margin: 5px 0;
        font-size: 1em;
        border: none;
        border-bottom: 2px solid black;
        :focus{
            outline: none;
        }
    }
`
export const AuthButton = styled.input`
    background: black;
    color: white;
    border-radius: 5px;
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
    border-bottom: 1px solid #191414;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    a{
        height: 30px;
    }
`
// TRYING TO ANIMATE
// const slideDown = keyframes`
//     from {
//     transform: rotate(0deg);
//     }

//     to {
//         transform: rotate(180deg);
//     }
// `;
// const slideUp = keyframes`
//     from {
//     transform: rotate(180deg);
//     }

//     to {
//         transform: rotate(0deg);
//     }
// `;
// const optionsAnimation = (animation) => css`
//     ${animation} 2s linear;
// `
// export const OptionsContainer = styled.div`
//     width: 100vw;
//     height: 100vh;
//     position: absolute;
//     top: 0;
//     right: 0;
//     ${({expanded}) => expanded ? css`
//         animation: ${optionsAnimation(slideDown)} ;
//     `: css`
//         animation: ${optionsAnimation(slideUp)} ;
//     `}
// `


// SearchPage

export const SearchBar = styled.form`
    position: sticky;
    top: ${navHeight+1}px;
    padding: 0;
    margin: 0;
    height: 30px;
    input{
        font-size: ${fontSize}em;
        width: 100%;
        margin: 0;
        border: none;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
        :focus{
            outline: none;
        }
    }
`

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
    a{
        text-decoration: none;
        width: 100%;
        margin: 0 0 10px;
        margin-left: 10px;
    }
    img{
        width: ${imgWidth}%;
        height: ${imgWidth}%;
        :hover{
            cursor: pointer;
        }
    }
    audio{
        width: 100%;
    }
`
export const SpotifyPlayerFrame = styled.iframe`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: black;
`

export const FullScreenOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: white;
`