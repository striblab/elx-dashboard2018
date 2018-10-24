/**
 * Main JS file for project.
 */

// Define globals that are added through the js.globals in
// the config.json file, here like this:
// /* global _ */

// Utility functions, such as Pym integration, number formatting,
// and device checking

import utilsFn from './utils.js';
utilsFn({});

// Utilize templates on the client.  Get the main content template.
import Content from '../templates/_index-content.svelte.html';

const app = new Content({
  target: document.querySelector('.main-app-container'),
  data: {}
});
