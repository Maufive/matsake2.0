import React from "react"
import LocationIcon from "../assets/location.svg"
import { HittaHitStyles } from "../styles/Index"

const HittaHit = () => (
  <HittaHitStyles>
    <h2>Hitta till oss</h2>
    <div>
      <LocationIcon />
      Domarevägen 28B, 904 33 Umeå
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.936273554984!2d20.23930839125878!3d63.81850334217382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b9e3254638f%3A0x479cd94941151282!2zRUxPTiBNYXRzw4VrZSBww6UgVGVn!5e0!3m2!1ssv!2sse!4v1551122120540"
      width="1000"
      height="600"
      frameborder="0"
      title={"Hitta hit"}
      style={{
        border: "3px solid #27456B",
        borderRadius: "3px",
      }}
      allowfullscreen
    />
  </HittaHitStyles>
)

export default HittaHit
