import "matchmedia-polyfill"
import "matchmedia-polyfill/matchMedia.addListener"
import smoothscroll from "smoothscroll-polyfill"

smoothscroll.polyfill()

afterEach(() => {
  jest.clearAllMocks()
})
