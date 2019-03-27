import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { OppettiderStyles } from "../styles/Index"

const Oppettider = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "oppettider" } }) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  mon_fri
                  sat
                  sun
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const hours = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
      return (
        <OppettiderStyles id="oppettider">
          <h2>Öppettider:</h2>
          <div>
            <p>Måndag - Fredag:</p>
            <p>{hours.mon_fri}</p>
          </div>
          <div>
            <p>Lördag:</p>
            <p>{hours.sat}</p>
          </div>
          <div>
            <p>Söndag:</p>
            <p>{hours.sun}</p>
          </div>
        </OppettiderStyles>
      )
    }}
  />
)

export default Oppettider
