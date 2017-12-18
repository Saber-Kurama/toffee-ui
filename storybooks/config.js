import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

// const glob = require('glob');
// const fs = require('fs');
// import fs from 'fs'

setOptions({
  name: 'CRA Kitchen Sink',
  url:
    'https://github.com/storybooks/storybook/tree/master/examples/cra-kitchen-sink',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./,
});

setAddon(infoAddon);

function loadStories() {
  // require('./index');
  require('./requireStories!./empty.js');
  //   require('../src/stories/storybook-components');
}

configure(loadStories, module);
