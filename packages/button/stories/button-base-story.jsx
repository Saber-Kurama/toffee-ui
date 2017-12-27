import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';
import styled, { ThemeProvider } from 'styled-components';

const Hr = () => (
  <div style={{ height: 8 }} />
);
const DefalutButton = styled(Button)`
  color: #fff;
  background: #00C7E5;
  border:none;
`;
const FlatButton = styled(Button)`
  color: #00C7E5;
  background: transparent;
  border:none;
`;
storiesOf('Button', module)
// .addDecorator(withKnobs)
  .add('defalut类型按钮', () => [<Button >default的button</Button>, <Hr />,
    <Button color="primary">primary的button</Button>, <Hr />,
    <Button color="accent">accent的button</Button>, <Hr />,
    <DefalutButton>自定义样式的button</DefalutButton>,
  ])
  .add('flat 类型按钮', () => [<Button type="flat">default的button</Button>, <Hr />,
    <Button type="flat" color="primary">primary的button</Button>, <Hr />,
    <Button type="flat" color="accent">accent的button</Button>, <Hr />,
    <FlatButton >自定义样式的button</FlatButton>,
  ]);

