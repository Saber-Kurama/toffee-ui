import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonBase from '../src';

storiesOf('Button', module)
// .addDecorator(withKnobs)
  .add('with text', () => <ButtonBase >正常的button</ButtonBase>);
// .add('自定义样式', () => <MyButton>自定义样式</MyButton>)
// .add('Logger', () => [<Button >正常的button</Button>, <Logger />, <MyLogger />])
// .add('自定义样式 Logger', () => <MyLogger />)
// .add('自定义样式1', () => [<Button1>asdasd</Button1>, <ThemeProvider theme={theme}><Button1>Themed</Button1></ThemeProvider>])
// .add('自定义样式2', () => <Link>asdasd</Link>);
