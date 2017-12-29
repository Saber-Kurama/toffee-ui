import { css } from 'styled-components';
import theme, { setThemeValue, hairline } from 'toffee-ui-theme';

const defaultTheme = theme.default;

const defaultCss = css`
  box-shadow: ${props => setThemeValue(props.theme, defaultTheme, 'shadows')[2]};
  &:active {
    box-shadow: ${props => setThemeValue(props.theme, defaultTheme, 'shadows')[10]};
  }
`;
export default defaultCss;
