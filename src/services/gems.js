/* eslint-disable */

let canvasEle

let controls
let scene
let camera
let renderer
let directionalLight1
let directionalLight2
let ambient

const colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)")

function setFogColor() {
  FOG_COLOR = colorSchemeMedia.matches ? 0x19191d : 0xf7c284
  scene.fog = new window.THREE.FogExp2(FOG_COLOR, 0.002)
  renderer.setClearColor(scene.fog.color)
}

function randomBetween(min, max) {
  const whole_min = Math.ceil(min)
  const whole_max = Math.floor(max)
  return Math.floor(Math.random() * (whole_max - whole_min + 1)) + whole_min
}

const triangles = []
const AMBIENT_COLOR = 0x536dfe
const DIRECTIONAL_COLOR_1 = 0x607d8b
const DIRECTIONAL_COLOR_2 = 0xffa000
let FOG_COLOR = colorSchemeMedia.matches ? 0x19191d : 0xf7c284
colorSchemeMedia.addEventListener("change", setFogColor)
// const TRIANGLE_COUNT = 500;
const TRIANGLE_COUNT = 100
let TRIANGLE_INDEX = 0

function render() {
  requestAnimationFrame(render)
  animate()

  renderer.render(scene, camera)
}

function animate() {
  const minVelocity = 2
  const maxVelocity = 15

  if (controls) {
    controls.update()
  }

  TRIANGLE_INDEX = 0

  for (; TRIANGLE_INDEX < TRIANGLE_COUNT; TRIANGLE_INDEX++) {
    if (triangles[TRIANGLE_INDEX].isReverse) {
      triangles[TRIANGLE_INDEX].rotation.y += Math.random() * 0.1
      triangles[TRIANGLE_INDEX].rotation.x += Math.random() * 0.1
    } else {
      triangles[TRIANGLE_INDEX].rotation.y -= Math.random() * 0.1
      triangles[TRIANGLE_INDEX].rotation.x -= Math.random() * 0.1
    }

    if (triangles[TRIANGLE_INDEX].position.y < -500) {
      triangles[TRIANGLE_INDEX].position.x = (Math.random() - 0.5) * 1000
      triangles[TRIANGLE_INDEX].position.y = (Math.random() - 0.5) * 1000
      triangles[TRIANGLE_INDEX].position.y = 500
      triangles[TRIANGLE_INDEX.velocity] =
        Math.random() * (maxVelocity - minVelocity + 1) + minVelocity
    } else {
      triangles[TRIANGLE_INDEX].position.y -= triangles[TRIANGLE_INDEX].velocity
    }
  }
}

const onWindowResize = () => {
  camera.aspect = canvasEle.clientWidth / canvasEle.clientHeight
  camera.updateProjectionMatrix()

  renderer.setSize(canvasEle.clientWidth, canvasEle.clientHeight)
}

function newTriangle(triangles, scene) {
  const radiusTop = 0
  const maxRadius = 5
  const minRadius = 20
  const radiusBottom = Math.random() * (maxRadius - minRadius + 1) + minRadius
  const height = 20
  const maxSides = 5
  const minSides = 3
  const sidesBottom = Math.floor(
    Math.random() * (maxSides - minSides + 1) + minSides,
  )
  const sidesTop = 1
  let geometry
  let material
  let mesh
  const isReverse = Math.random() >= 0.5
  const minVelocity = 2
  const maxVelocity = 15
  const velocity = Math.random() * (maxVelocity - minVelocity + 1) + minVelocity

  geometry = new window.THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    sidesBottom,
    sidesTop,
  )
  material = new window.THREE.MeshLambertMaterial({
    color: 0xffffff,
    // shading: window.THREE.FlatShading,
  })
  geometry.computeFlatVertexNormals()

  mesh = new window.THREE.Mesh(geometry, material)

  mesh.position.x = (Math.random() - 0.5) * 1000
  mesh.position.y = (Math.random() - 0.5) * 1000
  mesh.position.z = (Math.random() - 0.5) * 1000

  mesh.isReverse = isReverse
  mesh.velocity = velocity

  if (isReverse) {
    mesh.rotation.y += Math.random() * 0.1
    mesh.rotation.x += Math.random() * 0.1
  } else {
    mesh.rotation.y -= Math.random() * 0.1
    mesh.rotation.x -= Math.random() * 0.1
  }

  mesh.updateMatrix()

  scene.add(mesh)
  triangles.push(mesh)
}

export function start(canvasRef, isMobile) {
  canvasEle = canvasRef
  window.addEventListener("resize", onWindowResize, false)

  window.THREE.ImageUtils.crossOrigin = ""
  window.THREE.TextureLoader.crossOrigin = ""

  scene = new window.THREE.Scene()
  scene.fog = new window.THREE.FogExp2(FOG_COLOR, 0.002)

  camera = new window.THREE.PerspectiveCamera(
    75,
    canvasEle.clientWidth / canvasEle.clientHeight,
    0.1,
    1000,
  )
  camera.position.set(
    randomBetween(-500, 500),
    randomBetween(-500, 500),
    randomBetween(-500, 500),
  )
  camera.lookAt(new window.THREE.Vector3(0, 500, 0))

  if (!isMobile) {
    controls = new window.THREE.OrbitControls(camera, canvasEle)
    controls.damping = 0.2
    controls.noZoom = true
    controls.autoRotate = true
  }

  for (; TRIANGLE_INDEX < TRIANGLE_COUNT; TRIANGLE_INDEX++) {
    newTriangle(triangles, scene)
  }

  renderer = new window.THREE.WebGLRenderer({
    antialias: false,
    canvas: canvasEle,
  })
  renderer.setClearColor(scene.fog.color)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvasEle.clientWidth, canvasEle.clientHeight)

  ambient = new window.THREE.AmbientLight(AMBIENT_COLOR)
  scene.add(ambient)

  directionalLight1 = new window.THREE.DirectionalLight(DIRECTIONAL_COLOR_1)
  directionalLight1.position.set(1, 1, 1)

  scene.add(directionalLight1)

  directionalLight2 = new window.THREE.DirectionalLight(DIRECTIONAL_COLOR_2)
  directionalLight2.position.set(-1, -1, -1)

  scene.add(directionalLight2)

  render()
}
