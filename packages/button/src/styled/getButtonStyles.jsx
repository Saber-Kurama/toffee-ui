import { css } from 'styled-components'

export default function getButtonStyles() {

    return css`
        align-items: center;
        display: inline-flex;
        justify-content: center;
        box-sizing: border-box;
        outline: 0 none;
        padding: 0 15px;
        text-align: center;
        height: 47px;
        line-height: 47px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        color: #000;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
    `
}
