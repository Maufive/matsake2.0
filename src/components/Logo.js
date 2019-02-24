import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoStyles = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.white};
  font-family: Interstate;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
`

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/LOGO.png/" }) {
          childImageSharp {
            fixed(width: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <LogoStyles>
        <Img fixed={data.file.childImageSharp.fixed} />
        Matsåke på teg
      </LogoStyles>
    )}
  />
)

export default Logo
