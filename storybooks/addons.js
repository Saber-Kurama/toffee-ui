import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-events/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-options/register';
import '@storybook/addon-knobs/register';
// import registerScissors from 'storybook-addon-scissors';
// import devices from './devices.json';

// registerScissors(devices);
import addonAPI from '@storybook/addons';

addonAPI.register('chrvadala/options', (storybookAPI) => {
  let fullscreen = false;
  window.toggleFullscreen = function () {
    fullscreen = !fullscreen;
    storybookAPI.setOptions({goFullScreen: fullscreen})
  }
});
