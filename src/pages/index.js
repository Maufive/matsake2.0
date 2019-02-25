import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Nav from "../components/Nav"
import Header from "../components/header"
import Intro from "../components/Intro"
import Oppettider from "../components/Oppettider"
import HittaHit from "../components/HittaHit"
import Kok from "../components/Kok"

import interstate from "../assets/interstate.woff"
import interstate_bold from "../assets/interstate_bold.woff"

const theme = {
  blue: "#0B58A4",
  darkBlue: "#27456B",
  red: "#AC000B",
  darkRed: "#94010F",
  white: "#EEEEEE",
  lightGrey: "#E0E0E0",
  grey: "#828282",
  darkGrey: "#3E3E3E",
  black: "#282828",
  maxWidth: "1200px",
  mobileBreakpoint: "768px",
  animationTime: "300ms",
  bs: "0 5px 24px 0 rgba(0, 0, 0, 0.06)",
  linearGradient: "linear-gradient(90deg, #0B58A4 -23.52%, #27456B 124.66%)",
  radialGradient:
    "radial-gradient(1031.41px at 55.14% 48.87%, rgba(11, 88, 164, 0.8) 0%, rgba(39, 69, 107, 0.8) 100%)",
  textShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
  marginY: "2rem",
}

const StyledPage = styled.div`
  color: ${props => props.theme.grey};
  min-height: 100vh;
  width: 100%;
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Interstate";
    font-style: normal;
    font-weight: normal;
    src: local('Interstate'), url('${interstate}') format('woff');
  }}

  @font-face {
    font-family: "InterstateBold";
    font-style: normal;
    font-weight: bold;
    src: local('InterstateBold'), url('${interstate_bold}') format('woff');
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: Interstate, Arial, Helvetica, sans-serif, sans-serif;
		-webkit-font-smoothing: antialiased !important;
    text-shadow:1px 1px 1px 1px rgba(0,0,0,0.005);
    padding: 0;
    margin: 0;
    background: ${props => props.theme.white};
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
		line-height: 2;
  }

  h1, h2, h3, h4 {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    font-family: InterstateBold !important;
  }

  h1 {
    font-size: 5rem;
    font-weight: 900;
  }

  h2 {
    font-size: 4rem !important;
    font-weight: 900;
    margin-bottom: ${props => props.theme.marginY};
  }

  h3 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: ${props => props.theme.marginY};
  }

  p {
    font-family: Interstate;
    font-size: 2.5rem;
  }

  a, a:visited {
    color: ${props => props.theme.grey};
    text-decoration: none;
  }
`

const Index = () => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyle />
      <Nav />
      <Header />
      <Intro />
      <Oppettider />
      <HittaHit />
      <Kok />
    </StyledPage>
  </ThemeProvider>
)

export default Index
