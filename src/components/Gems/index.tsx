import React, {
  useRef,
  useEffect,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react"
import styled from "@emotion/styled"
import { start, setFogColor } from "../../vendor/gems"
import { smallUp } from "../../utils/sizes"
import "matchmedia-polyfill"
import "matchmedia-polyfill/matchMedia.addListener"
import { ThemeContext } from "../../utils/theme"

export const Gems = () => {
  const { mode } = useContext(ThemeContext)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isStarted, setIsStarted] = useState(false)

  const onLoad = useCallback(() => {
    const isMobile = window.innerWidth < smallUp
    if (canvasRef.current) {
      start(canvasRef.current, isMobile)
      setIsStarted(true)
    }
  }, [canvasRef])

  useEffect(() => {
    const script = document.createElement("script")

    script.src = "/vendor/three.min.js"
    script.async = true
    script.onload = onLoad

    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [onLoad])

  useLayoutEffect(() => {
    if (isStarted) {
      setFogColor(mode)
    }
  }, [mode, isStarted])

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
