import React, { Component } from 'react';
import styled from 'preact-emotion';
import start from '../../services/gems';
import { smallUp } from '../../globals/sizes';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
`;

export default class Gems extends Component {
  constructor() {
    super();
    this.canvasRef = null;
  }

  onRef = canvasEl => (this.canvasRef = canvasEl);

  onLoad = () => {
    const isMobile = window.innerWidth < smallUp;
    start(this.canvasRef, isMobile);
  };

  render() {
    return (
      <Wrapper>
        <Canvas innerRef={this.onRef} id="gems-canvas" />
        <script onLoad={this.onLoad} aysnc src="/vendor/three.min.js" />
      </Wrapper>
    );
  }
}
