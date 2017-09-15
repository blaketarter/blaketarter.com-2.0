import React, { Component } from 'react';
import styled from 'styled-components';

/* TODO
  - clean up code for falling gems
  - use local, cacheable file for threejs
  - optimize perf
  - test on mobile devices better
  - look into lazy loading images
  - look into disabling the webgel renderer when its not on screen (maybe pause it after a while)
*/

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  // &:before {
  //   content: '';
  //   position: absolute;
  //   height: 100%;
  //   width: 100%;
  //   background: rgba(0, 0, 0, 0.2);
  //   background: radial-gradient(
  //     ellipse at center,
  //     rgba(0, 0, 0, 0.2); 0%,
  //     rgba(0, 0, 0, 0.3); 100%
  //   );
  // }
`;

const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
`;

export default class Gems extends Component {
  constructor() {
    super();
    this.canvasRef = null;
    this.canvasHeight = 0;
    this.canvasWidth = 0;
  }

  getCanvasSize = () => {
    this.canvasHeight = this.canvasRef.clientHeight;
    this.canvasWidth = this.canvasRef.clientWidth;

    return { height: this.canvasHeight, widht: this.canvasWidth };
  };

  onRef = canvasEl => (this.canvasRef = canvasEl);

  onLoad = () => {
    console.log('loaded!');
    console.log(window.THREE);
    console.dir(this.canvasRef);

    this.getCanvasSize();
    this.setupGems();
  };

  setupGems = () => {
    var controls,
      scene,
      camera,
      renderer,
      directionalLight1,
      directionalLight2,
      stats,
      ambient;
    // urls,
    // cubemap,
    // shader,
    // shaderMaterial,
    // skybox;

    var triangles = [],
      AMBIENT_COLOR = 0x536dfe,
      DIRECTIONAL_COLOR_1 = 0x607d8b,
      DIRECTIONAL_COLOR_2 = 0xffa000,
      // FOG_COLOR = 0xffecb3,
      FOG_COLOR = 0xf7c284,
      TRIANGLE_COUNT = 500,
      TRIANGLE_INDEX = 0;

    function render() {
      requestAnimationFrame(render);
      animate();

      // stats.update();
      renderer.render(scene, camera);
    }

    function animate() {
      var minVelocity = 2,
        maxVelocity = 15;

      // controls.update();

      TRIANGLE_INDEX = 0;

      for (; TRIANGLE_INDEX < TRIANGLE_COUNT; TRIANGLE_INDEX++) {
        if (triangles[TRIANGLE_INDEX].isReverse) {
          triangles[TRIANGLE_INDEX].rotation.y += Math.random() * 0.1;
          triangles[TRIANGLE_INDEX].rotation.x += Math.random() * 0.1;
        } else {
          triangles[TRIANGLE_INDEX].rotation.y -= Math.random() * 0.1;
          triangles[TRIANGLE_INDEX].rotation.x -= Math.random() * 0.1;
        }

        if (triangles[TRIANGLE_INDEX].position.y < -500) {
          triangles[TRIANGLE_INDEX].position.x = (Math.random() - 0.5) * 1000;
          triangles[TRIANGLE_INDEX].position.y = (Math.random() - 0.5) * 1000;
          triangles[TRIANGLE_INDEX].position.y = 500;
          triangles[TRIANGLE_INDEX.velocity] =
            Math.random() * (maxVelocity - minVelocity + 1) + minVelocity;
        } else {
          triangles[TRIANGLE_INDEX].position.y -=
            triangles[TRIANGLE_INDEX].velocity;
        }

        // triangles[TRIANGLE_INDEX].updateMatrix();
      }
    }

    const onWindowResize = () => {
      this.getCanvasSize();
      camera.aspect = this.canvasWidth / this.canvasHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(this.canvasWidth, this.canvasHeight);
    };

    function newTriangle(triangles, scene) {
      var radiusTop = 0,
        maxRadius = 5,
        minRadius = 20,
        radiusBottom = Math.random() * (maxRadius - minRadius + 1) + minRadius,
        height = 20,
        maxSides = 5,
        minSides = 3,
        sidesBottom = Math.floor(
          Math.random() * (maxSides - minSides + 1) + minSides,
        ),
        sidesTop = 1,
        geometry,
        material,
        mesh,
        isReverse = Math.random() >= 0.5,
        minVelocity = 2,
        maxVelocity = 15,
        velocity =
          Math.random() * (maxVelocity - minVelocity + 1) + minVelocity;

      geometry = new window.THREE.CylinderGeometry(
        radiusTop,
        radiusBottom,
        height,
        sidesBottom,
        sidesTop,
      );
      material = new window.THREE.MeshLambertMaterial({
        color: 0xffffff,
        shading: window.THREE.FlatShading,
      });

      mesh = new window.THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 1000;
      mesh.position.y = (Math.random() - 0.5) * 1000;
      mesh.position.z = (Math.random() - 0.5) * 1000;

      mesh.isReverse = isReverse;
      mesh.velocity = velocity;

      if (isReverse) {
        mesh.rotation.y += Math.random() * 0.1;
        mesh.rotation.x += Math.random() * 0.1;
      } else {
        mesh.rotation.y -= Math.random() * 0.1;
        mesh.rotation.x -= Math.random() * 0.1;
      }

      mesh.updateMatrix();
      // mesh.matrixAutoUpdate = false;

      scene.add(mesh);
      triangles.push(mesh);
    }

    window.addEventListener('resize', onWindowResize, false);

    window.THREE.ImageUtils.crossOrigin = '';
    window.THREE.TextureLoader.crossOrigin = '';

    scene = new window.THREE.Scene();
    scene.fog = new window.THREE.FogExp2(FOG_COLOR, 0.002);

    camera = new window.THREE.PerspectiveCamera(
      75,
      this.canvasWidth / this.canvasHeight,
      0.1,
      1000,
    );
    camera.position.set(0, -500, 0);
    camera.lookAt(new window.THREE.Vector3(0, 500, 0));

    // controls = new window.THREE.OrbitControls(camera);
    // controls.damping = 0.2;

    for (; TRIANGLE_INDEX < TRIANGLE_COUNT; TRIANGLE_INDEX++) {
      newTriangle(triangles, scene);
    }

    renderer = new window.THREE.WebGLRenderer({
      antialias: false,
      canvas: this.canvasRef,
    });
    renderer.setClearColor(scene.fog.color);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(this.canvasWidth, this.canvasHeight);
    // document.body.appendChild(renderer.domElement);

    ambient = new window.THREE.AmbientLight(AMBIENT_COLOR);
    scene.add(ambient);

    directionalLight1 = new window.THREE.DirectionalLight(DIRECTIONAL_COLOR_1);
    directionalLight1.position.set(1, 1, 1);

    scene.add(directionalLight1);

    directionalLight2 = new window.THREE.DirectionalLight(DIRECTIONAL_COLOR_2);
    directionalLight2.position.set(-1, -1, -1);

    scene.add(directionalLight2);

    // stats = new Stats();
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.top = '0px';
    // stats.domElement.style.right = '0px';
    // stats.domElement.style.zIndex = 100;
    // document.body.appendChild( stats.domElement );

    render();
  };

  render() {
    return (
      <Wrapper>
        <Canvas innerRef={this.onRef} id="gems-canvas" />
        <script
          onLoad={this.onLoad}
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.min.js"
        />
      </Wrapper>
    );
  }
}
