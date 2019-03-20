import React from "react"
import { FooterStyles } from "../styles/Index"
import LocationIcon from "../assets/location.svg"
import PhoneIcon from "../assets/phone.svg"
import FacebookIcon from "../assets/facebook.svg"
import EmailIcon from "../assets/email.svg"

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
        <li>
          <LocationIcon /> Domarevägen 28B
        </li>
        <li>
          <LocationIcon />
          904 33, Umeå
        </li>
        <li>
          <a href="mailto:umea@elon.se">
            <EmailIcon /> umea@elon.se
          </a>
        </li>
        <li>
          <PhoneIcon /> 090 - 12 44 82
        </li>
        <li>
          <a
            href="https://www.facebook.com/pages/category/Heating--Ventilating---Air-Conditioning-Service/ELON-Mats%C3%85ke-p%C3%A5-Teg-418746171519744/"
            target="_BLANK"
          >
            <FacebookIcon /> Facebook
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <h4>Länkar:</h4>
        <li>
          <a href="www.elon.se" target="_BLANK">
            ELON
          </a>
        </li>
        <li>
          <a href="www.backlunda.se" target="_BLANK">
            Bäcklunda kök
          </a>
        </li>
        <li>
          <a href="www.creoform.se" target="_BLANK">
            Creoform
          </a>
        </li>
      </ul>
    </div>
  </FooterStyles>
)

export default Footer
