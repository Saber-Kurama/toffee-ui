import { configure, setAddon } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import infoAddon from "@storybook/addon-info";

console.log("???xxx");

// const glob = require('glob');
// const fs = require('fs');
// import fs from 'fs'å

setOptions({
  name: "CRA Kitchen Sink",
  url:
    "https://github.com/storybooks/storybook/tree/master/examples/cra-kitchen-sink",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./
});

setAddon(infoAddon);

function loadStories() {
  // require('./index');
  require("./requireStories!./empty.js");
  //   require('../src/stories/storybook-components');
}

configure(loadStories, module);
