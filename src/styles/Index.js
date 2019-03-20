import styled from "styled-components"

export const IntroStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 10rem auto;
  text-align: center;
  h2 {
    color: ${props => props.theme.darkBlue};
  }

  p {
    font-weight: 400;
    color: ${props => props.theme.darkBlue};
  }
`

export const IconStyles = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-weight: 700;
    }
    svg {
      height: 100px;
      width: 100px;
      fill: ${props => props.theme.darkBlue};
    }
  }
`

export const OppettiderStyles = styled.div`
  height: 50vh;
  color: ${props => props.theme.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  margin: 5rem auto;
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

export const KokStyles = styled.div`
  height: 60vh;
  color: ${props => props.theme.darkBlue};
  margin: 10rem auto;
  text-align: center;
  width: 600px;
`

export const FooterStyles = styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.lightGrey};
  display: flex;
  justify-content: space-evenly;
  padding: 5rem 0;
  width: 100%;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3rem;

    h4 {
      font-size: 2rem;
    }

    ul {
      list-style: none;
    }
  }

  p {
    font-size: 1.5rem;
  }
`
