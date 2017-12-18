import { css } from 'styled-components';

export default function getButtonStyles() {
  return css`
        -webkit-appearance: none; /*外观显示*/
        align-items: center;
        display: inline-flex;
        justify-content: center;
        box-sizing: border-box;
        outline: 0 none; 
        padding: 0 px;
        text-align: center;
        height: 48px;
        line-height: 48px;
        overflow: hidden;
        text-overflow: ellipsis; 
        word-break: break-word;
        white-space: nowrap;
        color: #000;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: default;
        &:active {
            outline: none;
        }
        &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.12);
        }
    `;
}
