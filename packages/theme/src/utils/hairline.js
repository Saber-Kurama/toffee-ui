
import { css } from 'styled-components';
import { hiDPI } from 'polished';

export default function hairline(direction, borderColor, radius) {
  if (direction === 'all') {

  }
  return css`
    ${borderColor && `border: 1PX solid ${borderColor}`};
    border-radius: ${radius}px;
    ${borderColor &&
        `${hiDPI(2)} {
            position: relative;
            border: none;
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 200%;
                height: 200%;
                border: 1PX solid ${borderColor};
                border-radius: ${2 * radius}px;
                transform-origin: 0 0;
                transform: scale(0.5);
                box-sizing: border-box;
                pointer-events: none;
            }
        }`}
  `;
}
