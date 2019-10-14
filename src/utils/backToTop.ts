import { MouseEvent } from "react"
export const backToTop = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
  if (window.history.pushState) {
    window.history.pushState(null, "#top", "#top")
  } else {
    window.location.href = "#top"
  }
}
