import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, FlatButton, RaiseButton, FabButton } from '../src';
import styled, { ThemeProvider } from 'styled-components';
import theme, { setThemeValue, hairline } from 'toffee-ui-theme';

const defaultTheme = theme.default;
const Hr = () => (
  <div style={{ height: 8 }} />
);
const DefalutButton = styled(Button)`
  color: #fff;
  background: #00C7E5;
  border:none;
`;
const DButton = styled.button`
  padding:10px;
  &:hover {
    color:red;
    background: green;
    
  }
  &:active {
    
    letter-spacing: 2px ;
  }
`;
// const FlatButton = styled(Button)`
//   color: #00C7E5;
//   background: transparent;
//   border:none;
// `;
storiesOf('Button', module)
// .addDecorator(withKnobs)
  // .add('defalut类型按钮', () => [<Button >default的button</Button>, <Hr />,
  //   <Button disabled>default disabled 的button</Button>, <Hr />,
  //   <Button primary >primary的button</Button>, <Hr />,
  //   <Button primary disabled >primary disabled的button</Button>, <Hr />,
  //   <Button accent>accent的button</Button>, <Hr />,
  //   <Button accent disabled>accent disabled的button</Button>, <Hr />,
  //   <DefalutButton>自定义样式的button</DefalutButton>,
  // ])
  // .add('flat 类型按钮', () => [
  //   <FlatButton >default的button</FlatButton>, <Hr />,
  //   <FlatButton disabled>default的button</FlatButton>, <Hr />,
  //   <FlatButton primary>primary的button</FlatButton>, <Hr />,
  //   <FlatButton primary disabled>primary的button</FlatButton>, <Hr />,
  //   <FlatButton accent>accent的button</FlatButton>, <Hr />,
  //   <FlatButton accent disabled>accent的button</FlatButton>, <Hr />,
  // ])
  .add('raise 类型按钮', () =>
    // <RaiseButton >default的button</RaiseButton>, <Hr />,
    // <RaiseButton disabled>default的button</RaiseButton>, <Hr />,
    // <RaiseButton primary>primary的button</RaiseButton>, <Hr />,
    // <RaiseButton primary disabled>primary的button</RaiseButton>, <Hr />,
    // <RaiseButton accent>accent的button</RaiseButton>, <Hr />,
    // <RaiseButton accent disabled>accent的button</RaiseButton>, <Hr />,
    <DButton key={11} accent disabled>DButtonDButtonDButtonDButton</DButton>);
// .add('float 类型按钮', () => [
//   <FabButton >default的button</FabButton>, <Hr />,
//   <FabButton disabled>default的button</FabButton>, <Hr />,
//   <FabButton primary>primary的button</FabButton>, <Hr />,
//   <FabButton primary disabled>primary的button</FabButton>, <Hr />,
//   <FabButton accent>accent的button</FabButton>, <Hr />,
//   <FabButton accent disabled>accent的button</FabButton>, <Hr />,
// ]);

