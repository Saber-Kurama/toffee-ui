import { css } from 'styled-components';
import theme, { setThemeValue, hairline } from 'toffee-ui-theme';

const defaultTheme = theme.default;

const textColor = css`
    color: ${props => ((props.primary || props.accent) ?
    setThemeValue(props.theme, defaultTheme, 'text.color_base_inverse')
    : setThemeValue(props.theme, defaultTheme, 'text.color_base'))};
`;
const getBackground = (props) => {
  let background = setThemeValue(props.theme, defaultTheme, 'fill.base');
  if (props.primary) {
    background = setThemeValue(props.theme, defaultTheme, 'brand.primary');
  }
  if (props.accent) {
    background = setThemeValue(props.theme, defaultTheme, 'brand.accent');
  }
  return css`
      background: ${background};
    `;
};
// 获取 边框
const getBorder = (props) => {
  const radius = setThemeValue(props.theme, defaultTheme, 'radius.md');
  let color = setThemeValue(props.theme, defaultTheme, 'border.color_base');
  if (props.primary || props.accent) {
    color = null;
  }
  return hairline('all', color, radius);
};
const defaultCss = css`
    ${textColor}
    ${props => getBackground(props)}
    ${props => getBorder(props)}
    ${props => props.disabled && 'opacity: 0.4;'}
    
`;
export default defaultCss;
