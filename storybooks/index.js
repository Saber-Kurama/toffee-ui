import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
console.log('>>>xzcxzcxz')
console.log(process.cwd())
storiesOf('Welcome', module)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
    .addWithInfo(
        'with some info', 
        'Use the [info addon](https://github.com/storybooks/storybook/tree/master/addons/info) with its painful API.',
        context => (
            <div>saber</div>
        )
    )