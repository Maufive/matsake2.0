import React from "react"
import StopwatchIcon from "../assets/stopwatch.svg"
import DiamondIcon from "../assets/diamond.svg"
import ToolsIcon from "../assets/tools.svg"
import { IntroStyles, IconStyles } from "../styles/Index"

const IconRow = () => (
  <IconStyles>
    <div>
      <StopwatchIcon />
      <p>Snabba leveranser</p>
    </div>
    <div>
      <DiamondIcon />
      <p>Hög kvalitet</p>
    </div>
    <div>
      <ToolsIcon />
      <p>Installation</p>
    </div>
  </IconStyles>
)

const Intro = () => (
  <IntroStyles>
    <h2>Välkommen till Mats-Åke på Teg</h2>
    <p>
      Vi är det trygga valet när du ska köpa nytt kök, vitvaror, kökstillbehör
      eller värmepumpar. Vi erbjuder även utkörning och installation av våra
      produkter och byter smidigt ut dina gamla vitvaror.
    </p>
    <IconRow />
  </IntroStyles>
)

export default Intro
