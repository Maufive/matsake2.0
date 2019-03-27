import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { HittaKokStyles, Textbox, Hembesok } from "../styles/HittaKok"
import { Button } from "../styles/Button"
import styled from "styled-components"

const Gallery = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  > img {
    max-width: 1200px;
  }
  @media (min-width: 1599px) {
    margin-bottom: 5rem;
  }
`

const HittaKok = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "kok" } }) {
          edges {
            node {
              childImageSharp {
                original {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      let images = []
      data.allFile.edges.map(image => {
        const src = image.node.childImageSharp.original.src
        const item = {
          original: src,
        }
        images.push(item)
      })
      return (
        <HittaKokStyles>
          <Textbox>
            <h2>Hitta ditt drömkök</h2>
            <p>
              Är du på jakt efter nytt kök? Bli inspirerad av olika kök som vi
              installerat hemma hos några av våra kunder. Välkommen in till vår
              butik om du vill veta mer.
            </p>
          </Textbox>
          <Gallery>
            <ImageGallery
              autoPlay={true}
              showBullets={true}
              showIndex={true}
              showThumbnails={false}
              items={images}
            />
          </Gallery>
          <Hembesok>
            <h2>Boka hembesök</h2>
            <p>
              Hör av dig till oss för att boka tid med vår personal så ordnar vi
              ett hembesök för att planera ditt drömkök
            </p>
            <a href="mailto:umea@elon.se?subject=Boka tid för hembesök">
              <Button primary>Kontakta oss</Button>
            </a>
          </Hembesok>
        </HittaKokStyles>
      )
    }}
  />
)

export default HittaKok
