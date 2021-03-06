import styled from "styled-components"

export const HittaKokStyles = styled.div`
  img {
    max-width: 100%;
  }
`

export const Textbox = styled.div`
  width: 800px;
  text-align: center;
  margin: 5rem auto;
  color: ${props => props.theme.darkBlue};
  font-weight: 400;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
    padding: 0 2.5rem;
  }
`

export const Hembesok = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 0;
  color: ${props => props.theme.white};
  background: linear-gradient(270deg, #27456b 0%, #0b58a4 100%);
  margin-bottom: 10rem;

  h2 {
    margin-block-end: 0;
    margin-block-start: 0;
  }

  p {
    width: 800px;
    margin: 5rem auto;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      width: 100%;
      padding: 0 2.5rem;
      margin: 0;
      margin-bottom: 2rem;
    }
  }
`
