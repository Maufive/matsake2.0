import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import SEO from "../components/seo"
import Nav from "../components/Nav"
import Header from "../components/header"
import Intro from "../components/Intro"
import HittaKok from "../components/HittaKok"
import Oppettider from "../components/Oppettider"
import { Textbox } from "../styles/HittaKok"
import Footer from "../components/Footer"
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
  mobilePadding: "10px",
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

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    h1 {
      font-size: 3.5rem;
      letter-spacing: 2.5px;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway');

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
    font-family: "Raleway", Arial, Helvetica, sans-serif, sans-serif;
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
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: ${props => props.theme.marginY};
  }

  h3 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: ${props => props.theme.marginY};
  }

  p {
    font-family: "Raleway";
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
      <SEO
        title="ELON Mats Åke på Teg Umeå | Köp Vitvaror, kök, spis, tvättmaskin och torktumlare hos oss!"
        keywords={[
          "ELON",
          "Mats",
          "Åke",
          "på",
          "teg",
          "Umeå",
          "MatsÅke",
          "service",
          "vitvaror",
          "kök",
          "spis",
          "tvättmaskin",
          "torktumlare",
          "hushållspapper",
          "hushållsmaskiner",
          "rita",
          "kök",
          "hemleverans",
          "hemkörning",
        ]}
      />
      <Nav />
      <Header />
      <Intro />
      <HittaKok />
      {/* <HittaHit /> */}
      <Textbox>
        <h2>Vår arbetsfilosofi</h2>
        <p>
          Service har varit vårt ledord under alla företagets år och något vi
          tar på allra största allvar. I och med att fler och fler lågpriskedjor
          öppnat upp runt staden så har vi valt att satsa på att ha så nöjda
          kunder som möjligt. Just därför kommer vi alltid att försöka göra det
          lilla extra för dig som kund. Det kan vara en reservdel,
          tillhandahålla en gammal bruksanvisning eller ett hembesök om kunden
          så önskar.
        </p>
      </Textbox>
      <Oppettider />
      <Footer />
    </StyledPage>
  </ThemeProvider>
)

export default Index
