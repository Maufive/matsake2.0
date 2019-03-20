import styled from "styled-components"

export const IntroStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 5rem auto;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  h2 {
    font-size: 4rem;
    font-family: InterstateBold;
    font-weight: 900;
    color: ${props => props.theme.darkBlue};
    margin-bottom: ${props => props.theme.marginY};
  }

  p {
    font-family: "Raleway";
    color: ${props => props.theme.darkBlue};
  }
`
