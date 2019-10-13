import React, { Component } from "react"
import styled from "@emotion/styled"
import { start } from "../../services/gems"
import { smallUp } from "../../globals/sizes"

export class Gems extends Component<{}> {
  canvasRef: HTMLCanvasElement | null

  constructor(props: {}) {
    super(props)
    this.canvasRef = null
  }

  onRef = (canvasEl: HTMLCanvasElement | null) => (this.canvasRef = canvasEl)

  componentDidMount = () => {
    const script = document.createElement("script")

    script.src = "/vendor/three.min.js"
    script.async = true
    script.onload = this.onLoad

    document.body.appendChild(script)
  }

  onLoad = () => {
    const isMobile = window.innerWidth < smallUp
    start(this.canvasRef, isMobile)
  }

  render() {
    return (
      <Wrapper>
        <Canvas
          ref={this.onRef}
          id="gems-canvas"
          role="img"
          aria-label="falling gems in motion"
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Canvas = styled("canvas")`
  height: 100%;
  width: 100%;
`
