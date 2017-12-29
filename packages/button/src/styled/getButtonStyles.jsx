import { css } from 'styled-components';
import theme, { setThemeValue, hairline } from 'toffee-ui-theme';

const defaultTheme = theme.default;
export const elevationTransition = `
background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
`;
export default function getButtonStyles() {
  return css`
        width: 100%;
        -webkit-appearance: none; /*外观显示*/
        align-items: center;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        outline: 0 none; 
        padding: 0;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis; 
        word-break: break-word;
        white-space: nowrap;
        font-size: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.fontSize')};
        height: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.height')};
        line-height: ${props => setThemeValue(props.theme, defaultTheme, 'components.button.height')};
        transition: ${elevationTransition};
        &:active {
            outline: none;
        }
        &:hover {
            cursor: pointer;
        }
    `;
}

// const defaultColor = setThemeValue(props.theme, defaultTheme, 'text.color_base');
