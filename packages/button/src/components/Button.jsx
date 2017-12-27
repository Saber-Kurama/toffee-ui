import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme, { setThemeValue, hairline } from 'toffee-ui-theme';
import ButtonBase from 'toffee-ui-button-base';

export const elevationTransition = css`
box-shadow 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, z-index 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
`;
const defaultTheme = theme.default;
// 获取字体颜色
const getColor = (props) => {
  let color = '#000';
  if (props.type === 'flat') {
    if (props.color === 'default') {
      color = setThemeValue(props.theme, defaultTheme, 'text.color_base');
    }
    if (props.color === 'primary') {
      color = setThemeValue(props.theme, defaultTheme, 'brand.primary');
    }
    if (props.color === 'accent') {
      color = setThemeValue(props.theme, defaultTheme, 'brand.accent');
    }
  } else {
    if (props.color === 'default') {
      color = setThemeValue(props.theme, defaultTheme, 'text.color_base');
    }
    if (props.color === 'primary' || props.color === 'accent') {
      color = setThemeValue(props.theme, defaultTheme, 'text.color_base_inverse');
    }
  }

  return css`
    color: ${color};
  `;
};
// 获取 背景颜色
const getBackground = (props) => {
  let background = '#fff';
  if (props.color === 'default') {
    background = setThemeValue(props.theme, defaultTheme, 'fill.base');
  }
  if (props.color === 'primary') {
    background = setThemeValue(props.theme, defaultTheme, 'brand.primary');
  }
  if (props.color === 'accent') {
    background = setThemeValue(props.theme, defaultTheme, 'brand.accent');
  }
  if (props.type === 'flat') {
    background = 'transparent';
  }
  return css`
    background: ${background};
  `;
};
// 获取 边框
const getBorder = (props) => {
  if (props.type === 'flat') {
    return '';
  }
  const radius = setThemeValue(props.theme, defaultTheme, 'radius.md');
  let color = null;
  if (props.color === 'default') {
    color = setThemeValue(props.theme, defaultTheme, 'border.color_base');
  }
  return hairline('all', color, radius);
};
console.log('hairline()', hairline());
// transition: ${elevationTransition}, background-color 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
const ButtonBaseStyle = styled(ButtonBase)`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  text-align: center;
  font-size: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.fontSize')};
  height: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.height')};
  line-height: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.height')};
  ${props => getColor(props)}
  ${props => getBackground(props)}
  ${props => getBorder(props)}
  &:hover :{
    cursor: pointer;
  }
`;

class Button extends Component {
  // getStyledComponent() {
  //   // return this.props.href ? StyledLink : StyledButton;
  // }
  state = {}
  render() {
    // const StyledComponent = this.getStyledComponent();
    return (
      <ButtonBaseStyle {...this.props}>
        {this.props.children}
      </ButtonBaseStyle>
    );
  }
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  /*
   * 按钮的类型: default, flat, raised, fab, ghost
   */
  type: PropTypes.oneOf(['default', 'flat', 'raised', 'fab', 'ghost']),
  /*
   *  inherit 继承
   *  primary 主要色
   *  accent 强调色
   *  contrast 反差色
   */
  color: PropTypes.oneOf(['default', 'primary', 'accent']),
};
Button.defaultProps = {
  type: 'default',
  color: 'default',
};
export default styled(Button)``;
