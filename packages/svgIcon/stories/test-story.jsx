import React from 'react';
import { storiesOf } from '@storybook/react';
import SvgIcon from '../src';

storiesOf('SvgIcon', module)
  .add('SvgIcon', () => [<SvgIcon key="check" type="check" />,
    <SvgIcon type="left" />,
    <SvgIcon key="search" type="search" />]);
