import React, { Component } from 'react';

const DIRECTION_UP = 'up';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const DIRECTION_DOWN = 'down';

const mapPlayerToKeyToDirection = {
  player1: {
    w: DIRECTION_UP,
    a: DIRECTION_LEFT,
    d: DIRECTION_RIGHT,
    s: DIRECTION_DOWN
  },
  player2: {
    ArrowUp: DIRECTION_UP,
    ArrowLeft: DIRECTION_LEFT,
    ArrowRight: DIRECTION_RIGHT,
    ArrowDown: DIRECTION_DOWN
  }
};

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 1,
      direction: 'right',
      timerId: null
    };
  }

  render() {
    return <div />;
  }
}

export default Player;
