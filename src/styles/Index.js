import styled from "styled-components"

export const IntroStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 10rem auto;
  text-align: center;
  h2 {
    color: ${props => props.theme.darkBlue};
  }

  p {
    font-family: Interstate;
    color: ${props => props.theme.darkBlue};
  }
`

export const OppettiderStyles = styled.div`
  background: linear-gradient(90deg, #0b58a4 -23.52%, #27456b 124.66%);
  height: 50vh;
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  margin: 10rem auto;
  > div {
    display: flex;
    justify-content: space-between;
    width: 600px;
    p {
      margin-block-end: 0;
      margin-block-start: 0;
      margin-bottom: 1.5rem;
    }
  }
`

export const HittaHitStyles = styled.div`
  color: ${props => props.theme.darkBlue};
  height: 60vh;
  text-align: center;

  > div {
    display: flex;
    justify-content: center;
    margin-bottom: ${props => props.theme.marginY};
    font-size: 2rem;
    svg {
      height: 3rem;
      width: 3rem;
      fill: ${props => props.theme.darkBlue};
      margin-right: 1rem;
    }
  }
`
