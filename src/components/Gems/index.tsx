import React, { useRef, useEffect, useCallback } from "react"
import styled from "@emotion/styled"
import { start } from "../../vendor/gems"
import { smallUp } from "../../utils/sizes"
import "matchmedia-polyfill"
import "matchmedia-polyfill/matchMedia.addListener"

export const Gems = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const onLoad = useCallback(() => {
    const isMobile = window.innerWidth < smallUp
    start(canvasRef.current, isMobile)
  }, [canvasRef])

  useEffect(() => {
    const script = document.createElement("script")

    script.src = "/vendor/three.min.js"
    script.async = true
    script.onload = onLoad

    document.body.appendChild(script)
  }, [onLoad])

  return (
    <Wrapper>
      <Canvas
        ref={canvasRef}
        id="gems-canvas"
        role="img"
        aria-label="falling gems in motion"
      />
    </Wrapper>
  )
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
