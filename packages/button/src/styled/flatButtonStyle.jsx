import { css } from 'styled-components';
import theme, { setThemeValue, hairline } from 'toffee-ui-theme';

const defaultTheme = theme.default;
const textColor = (props) => {
  let color = setThemeValue(props.theme, defaultTheme, 'text.color_base');
  if (props.primary) {
    color = setThemeValue(props.theme, defaultTheme, 'brand.primary');
  }
  if (props.accent) {
    color = setThemeValue(props.theme, defaultTheme, 'brand.accent');
  }
  //   props.primary ? color = setThemeValue(props.theme, defaultTheme, 'brand.primary') : '';
  //   props.accent ? color = setThemeValue(props.theme, defaultTheme, 'brand.accent') : '';
  //   color = !color && setThemeValue(props.theme, defaultTheme, 'text.color_base');
  return css`
    color: ${color};
  `;
};

const defaultCss = css`
${props => textColor(props)}
background: ${props => setThemeValue(props.theme, defaultTheme, 'fill.base')};
border:none;
&::before {
    display: none;
}
`;
export default defaultCss;
