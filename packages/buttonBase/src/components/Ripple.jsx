import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';

// 是否是配置
const DURATION = 550;
// 是否是配置
const easeInOut = 'cubic-bezier(0.4, 0, 0.2, 1)';
const rippleExit = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const rippleEnter = keyframes`
  0% {
    transform: scale(0);
  },
  100% {
    transform: scale(1);
  },
`;

const WrapperSpan = styled.span`
    opacity: 1;
    ${props => (props.leaving ?
    `
    opacity: 0;
    animation: ${rippleExit} ${DURATION}ms ${easeInOut}
    `
    : '')}
`;

const RippleSpan = styled.span`
  width: 50px;
  height: 50px;
  left: 0;
  right: 0;
  opacity: 0;
  position: absolute;
  border-radius: 50%;
  background: currentColor;
  ${props => (props.visible ?
    `
      opacity : 0.3;
      transform: scale(1);
      animation: ${rippleEnter} ${DURATION}ms ${easeInOut}
    `
    : ''
  )}
`;

class Ripple extends Component {
  state = {
    rippleVisible: true,
    rippleLeaving: false,
  };

  handleEnter = () => {
    this.setState({
      rippleVisible: true,
    });
  };

  handleExit = () => {
    this.setState({
      rippleLeaving: true,
    });
  };
  render() {
    const {
      rippleX,
      rippleY,
      rippleSize,
      ...other
    } = this.props;
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX,
    };
    return (
      <Transition
        in
        timeout={{ enter: DURATION, exit: DURATION }}
        onEnter={this.handleEnter}
        onExit={this.handleExit}
        {...other}
      >
        <WrapperSpan leaving={this.state.rippleLeaving} >
          <RippleSpan visible={this.state.rippleVisible} style={rippleStyles} />
        </WrapperSpan>
      </Transition>
    );
  }
}

Ripple.propTypes = {
  // 键盘选中的样式
  // pulsate: PropTypes.bool,
  rippleSize: PropTypes.number,
  rippleX: PropTypes.number,
  rippleY: PropTypes.number,
};
Ripple.defaultProps = {
  rippleSize: 0,
  rippleX: 0,
  rippleY: 0,
};

export default Ripple;
