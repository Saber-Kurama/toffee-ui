import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src' 
import Logger from './Logger'
import styled, {ThemeProvider} from 'styled-components'
// console.log(Saber.Button)
console.log(Button)
const StyledSpan = styled.span`{ color: #ddd}`;
const MyButton = styled(Button)`
        background-color: #ccc;
    `;
const MyButton1 = styled(Button);  
const MyLogger = styled(Logger)`
        background-color: #fcc;
        > ${ Button } {
            background-color: #fcc;
        }
    `  
const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover, &:active {
    text-decoration: underline;
  }
`
const P = styled.p`
  ${ Link } {
    text-decoration: underline;
  }
`      
import {
  withKnobs,
  text,
  number,
  boolean,
  color,
  select,
  array,
  date,
  object,
} from '@storybook/addon-knobs'

// Define our button, but with the use of props.theme this time
const Button1 = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;

	/* Color the border and text with theme.main */
	color: ${props => props.theme.main};
	border: 2px solid ${props => props.theme.main};
`;

// We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
Button1.defaultProps = {
	theme: {
		main: 'palevioletred'
	}
}

// // Define what props.theme will look like
const theme = {
	main: 'mediumseagreen'
};

// render(
// 	<div>
// 		<Button>Normal</Button>

// 		<ThemeProvider theme={theme}>
// 			<Button>Themed</Button>
// 		</ThemeProvider>
// 	</div>
// );

storiesOf('Button', module)
    // .addDecorator(withKnobs)
    .add('with text', () => <Button >正常的button</Button>)
    .add('自定义样式', () => <MyButton>自定义样式</MyButton>)
    .add('Logger', () => [<Button >正常的button</Button>,<Logger />, <MyLogger />])
    .add('自定义样式 Logger', () => <MyLogger />)
    .add('自定义样式1', () => [<Button1>asdasd</Button1>,<ThemeProvider theme={theme}><Button1>Themed</Button1></ThemeProvider>])
    .add('自定义样式2', () => <Link>asdasd</Link>)