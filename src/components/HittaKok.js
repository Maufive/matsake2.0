import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { HittaKokStyles, Textbox, Hembesok } from "../styles/HittaKok"
import { Button } from "../styles/Button"
import Kok1 from "../images/kok1.jpg"
import Kok2 from "../images/kok2.jpg"
import Kok3 from "../images/kok3.jpg"
import Kok4 from "../images/kok4.jpg"
import Kok5 from "../images/kok5.jpg"
import Kok6 from "../images/kok6.jpg"
import Kok7 from "../images/kok7.jpg"
import Kok9 from "../images/kok9.jpg"
import Kok10 from "../images/kok10.jpg"

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
  {
    original: Kok5,
  },
  {
    original: Kok6,
  },
  {
    original: Kok7,
  },
  {
    original: Kok9,
  },
  {
    original: Kok10,
  },
]

const HittaKok = () => (
  <HittaKokStyles>
    <Textbox>
      <h2>Hitta ditt drömkök</h2>
      <p>
        Är du på jakt efter nytt kök? Bli inspirerad av olika kök som vi
        installerat hemma hos några av våra kunder. Välkommen in till vår butik
        om du vill veta mer.
      </p>
    </Textbox>
    <ImageGallery
      autoPlay={true}
      showBullets={true}
      showIndex={true}
      showThumbnails={false}
      items={images}
    />
    <Hembesok>
      <h2>Boka hembesök</h2>
      <p>
        Hör av dig till oss för att boka tid med vår personal så ordnar vi ett
        hembesök för att planera ditt drömkök
      </p>
      <Button primary>Kontakta oss</Button>
    </Hembesok>
  </HittaKokStyles>
)

export default HittaKok
