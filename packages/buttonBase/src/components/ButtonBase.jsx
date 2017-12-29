import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import createRippleHandler from './createRippleHandler';
import TouchRipple from './TouchRipple';

const StyledLink = styled.button`
    display: inline-flex;
    align-item: center;
    justify-content: center;
    position: relative;
    background-color: transparent;
    outline: none;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    user-select: none;
    appearance: none;
    text-decoration: none;
    color: inherit;
    &::-moz-focus-inner: {
        border-style: none;
    }
`;
StyledLink.displayName = 'StyledLink';
class ButtonBase extends React.Component {
    state = {

    }
    handleMouseDown = createRippleHandler(this, 'MouseDown', 'start', () => {
    //   clearTimeout(this.keyboardFocusTimeout);
    //   focusKeyPressed(false);
    //   if (this.state.keyboardFocused) {
    //     this.setState({ keyboardFocused: false });
    //   }
    });

    handleMouseUp = createRippleHandler(this, 'MouseUp', 'stop');

    handleMouseLeave = createRippleHandler(this, 'MouseLeave', 'stop', (event) => {
    //   if (this.state.keyboardFocused) {
    //     event.preventDefault();
    //   }
    });
    handleTouchStart = createRippleHandler(this, 'TouchStart', 'start')
    handleTouchEnd = createRippleHandler(this, 'TouchEnd', 'stop')
    handleTouchMove = createRippleHandler(this, 'TouchMove', 'stop')
    render() {
      const { children, disabled, ...other } = this.props;
      return (
        <StyledLink
          onMouseDown={this.handleMouseDown}
          onMouseLeave={this.handleMouseLeave}
          onMouseUp={this.handleMouseUp}
          onTouchEnd={this.handleTouchEnd}
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchStart}
          disabled={disabled}
          {...other}
        >
          {children}
          {!disabled && <TouchRipple
            innerRef={(node) => {
              this.ripple = node;
            }}
          />}
        </StyledLink>
      );
    }
}
ButtonBase.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
ButtonBase.defaultProps = {
  children: null,
  disabled: false,
};
export default ButtonBase;
