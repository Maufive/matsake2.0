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

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
    padding: 0 2.5rem;
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
      @media (max-width: ${props => props.theme.mobileBreakpoint}) {
        height: 50px;
        width: 50px;
      }
    }
  }
`

export const OppettiderStyles = styled.div`
  color: ${props => props.theme.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5rem;
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
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      width: 100%;
    }
  }
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    justify-content: flex-start;
    height: fit-content;
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

  a {
    color: ${props => props.theme.lightGrey};
    transition: all 300ms ease-out;
    display: flex;
    align-items: center;
    &:hover {
      color: ${props => props.theme.blue};
    }
  }

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
      padding: 0;
      li {
        display: flex;
        align-items: center;
      }
    }
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      align-items: flex-start;

      div {
        padding-left: 40px;
      }
    }
  }

  p {
    font-size: 1.5rem;
  }

  svg {
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;
    fill: ${props => props.theme.lightGrey};
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
