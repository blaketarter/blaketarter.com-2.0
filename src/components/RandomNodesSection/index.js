import React from 'react';
import styled from 'styled-components';
import RandomNodes from 'random-nodes-canvas';
import {
  canvasHeight,
} from '../../globals/sizes';

const NodesCanvas = styled.canvas`
  height: ${canvasHeight }vh;
  width: 110%;
  margin-left: -5%;
  margin-top: -5%;
`;

export default class RandomNodesSection extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = null;
  }

  componentDidMount() {
    const randomNodes = new RandomNodes({
      height: this.canvasRef.clientHeight,
      width: this.canvasRef.clientWidth,
      cellSize: 75,
      canvasElement: this.canvasRef,
    });

    randomNodes.start();
  }

  onRef = (canvasEl) => this.canvasRef = canvasEl

  render() {
    return (<NodesCanvas innerRef={this.onRef} />);
  }
}
