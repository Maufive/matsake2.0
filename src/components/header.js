import React from "react"
import { HeaderStyles } from "../styles/HeaderStyles"
import { Button, ButtonContainer } from "../styles/Button"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/butiken.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderStyles>
        <Img fluid={data.file.childImageSharp.fluid} />
        <div>
          <h1>Mats-Åke på Teg</h1>
          <h3>Vitvaror, kök och hushållsapparater i Umeå</h3>
          <ButtonContainer>
            <a href="#oppettider">
              <Button primary>Öppettider</Button>
            </a>
            <a href="https://goo.gl/maps/sR3zwZovUnB2" target="_BLANK">
              <Button>Hitta hit</Button>
            </a>
          </ButtonContainer>
        </div>
      </HeaderStyles>
    )}
  />
)

export default Header
