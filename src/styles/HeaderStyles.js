import styled from "styled-components"

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > div {
    background: ${props => props.theme.radialGradient};
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    h1 {
      letter-spacing: 5px;
      font-size: 3rem;
      text-transform: uppercase;
    }
    h1,
    h3 {
      text-shadow: ${props => props.theme.textShadow};
      color: ${props => props.theme.white};
    }
  }
`
