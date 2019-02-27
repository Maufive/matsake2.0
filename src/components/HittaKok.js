import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { HittaKokStyles, TextBox } from "../styles/HittaKok"
import Kok1 from "../images/kok_1.jpg"
import Kok2 from "../images/kok_2.jpg"
import Kok3 from "../images/kok_3.jpg"
import Kok4 from "../images/kok_4.jpg"

const images = [
  {
    original: Kok1,
    description:
      "Här kan man skriva en liten text om köket, vilket märke eller annan info",
  },
  {
    original: Kok2,
    description: "Olika info om olika bilder",
  },
  {
    original: Kok3,
  },
  {
    original: Kok4,
  },
]

const HittaKok = () => (
  <HittaKokStyles>
    <TextBox>
      <h2>Hitta ditt drömkök</h2>
      <p>
        Är du på jakt efter nytt kök? Bli inspirerad av olika kök som vi
        installerat hemma hos några av våra kunder. Välkommen in till vår butik
        om du vill veta mer.
      </p>
    </TextBox>
    <ImageGallery
      autoPlay={true}
      showBullets={true}
      showIndex={true}
      showThumbnails={false}
      items={images}
    />
  </HittaKokStyles>
)

export default HittaKok
