import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'toffee-ui-theme';
import ButtonBase from 'toffee-ui-button-base';
import getButtonStyle from '../styled/getButtonStyles';
import buttonStyle from '../styled/buttonStyle';

export const elevationTransition = css`
background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, z-index 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
`;
const defaultTheme = theme.default;
// transition: ${elevationTransition}, background-color 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
const ButtonBaseStyle = styled(ButtonBase)`
  ${getButtonStyle()}
  ${buttonStyle}
`;

const Button = (props) => {
  const { disabled, ...other } = props;
  return (
    <ButtonBaseStyle
      disabled={disabled}
      {...other}
    >
      {props.children}
    </ButtonBaseStyle>
  );
};
Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node.isRequired,
  /*
   * 按钮的类型: default, flat, raised, fab, ghost
   */
  // type: PropTypes.oneOf(['default', 'flat', 'raised', 'fab', 'ghost']),
  /*
   *  inherit 继承
   *  primary 主要色
   *  accent 强调色
   *  contrast 反差色
   */
  // color: PropTypes.oneOf(['default', 'primary', 'accent']),
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  // type: 'default',
  // color: 'default',
  primary: false,
  accent: false,
  disabled: false,
};
export default styled(Button)``;
