import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme, { setThemeValue, hairline } from 'toffee-ui-theme';
import ButtonBase from 'toffee-ui-button-base';

const defaultTheme = theme.default;
// 获取字体颜色
const getColor = (props) => {
  let color = '#000';
  if (props.color === 'default') {
    color = setThemeValue(props.theme, defaultTheme, 'text.color_base');
  } else {
    color = setThemeValue(props.theme, defaultTheme, 'color_base_inverse');
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
  return css`
    background: ${background};
  `;
};
console.log('hairline()', hairline());
const ButtonBaseStyle = styled(ButtonBase)`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  text-align: center;
  font-size: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.fontSize')};
  height: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.height')};
  line-height: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.height')};
  border: 1PX solid #ddd;
  border-radius: 5px;
  ${props => getColor(props)}
  ${props => getBackground(props)}
  ${props => hairline(props)}
  '&:hover':{

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
