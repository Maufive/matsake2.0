import React from "react"
import { FooterStyles } from "../styles/Index"

/* 
  Saker som ska finnas i footern:
  Address,
  Telefonnummer,
  Email,
  Facebook,
  Länkar till ELON, Creoform, Bäcklunda,

*/

const Footer = () => (
  <FooterStyles>
    <div>
      <h4>Om oss</h4>
      <p>
        Vi på Mats-Åke på Teg är en del av ELON-koncernen och butiken grundades
        för mer än 50 år sedan av Mats-Åke Lindahl. Mycket har hänt sedan dess,
        och butiken styrs sedan 2008 av dottern Mona.
      </p>
    </div>
    <div>
      <ul>
        <h4>Kontakta oss:</h4>
        <li>Domarevägen 28B</li>
        <li>904 33, Umeå</li>
        <li>umea@elon.se</li>
        <li>090 - 12 44 82</li>
        <li>Facebook</li>
      </ul>
    </div>
    <div>
      <ul>
        <h4>Länkar:</h4>
        <li>
          <a href="www.elon.se" target="_blank">
            ELON
          </a>
        </li>
        <li>
          <a href="www.backlunda.se" target="_blank">
            Bäcklunda kök
          </a>
        </li>
        <li>
          <a href="www.creoform.se" target="_blank">
            Creoform
          </a>
        </li>
      </ul>
    </div>
  </FooterStyles>
)

export default Footer
