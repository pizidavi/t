import Plyr from 'plyr';
import plyrStyle from 'plyr/dist/plyr.css';

import './utils/spatial-navigation';
import css from './global.css';

/**
 * Main function
 */
function main() {
  // Custom style
  const style = document.createElement('style');
  style.textContent = css + plyrStyle;
  document.head.appendChild(style);

  // Spatial Navigation
  SpatialNavigation.init();
  document.addEventListener('sn:enter-down', e => {
    e.preventDefault();
    e.stopPropagation();
  });
  document.addEventListener('sn:enter-up', e => {
    e.preventDefault();
    e.stopPropagation();

    e.target?.click();
  });
  document.addEventListener('keydown', e => {
    console.log('main.js (28) # e.key', e.key, e.keyCode);
    let keyContainer = document.querySelector('#key-container');
    if (!keyContainer) {
      const div = document.createElement('div');
      div.id = 'key-container';
      div.style.position = 'fixed';
      div.style.top = '1em';
      div.style.right = '1em';
      div.style.padding = '1rem';
      div.style.background = '#000';
      div.style.color = 'white';
      div.style.fontFamily = 'monospace';
      div.style.fontSize = '1rem';
      div.style.zIndex = '10000';
      document.body.appendChild(div);
      keyContainer = div;
    }

    keyContainer.innerHTML = `Key: ${e.key} (${e.keyCode})`;
  });

  // Clean up the page
  document.querySelector('.alert.alert-home')?.remove();
  document.querySelector('.widget.slider')?.remove();
  document.querySelector('#header')?.remove();
  document.querySelector('#controls')?.remove();
  document.querySelector('#download')?.remove();

  // Add focusable class
  document
    .querySelectorAll(
      '.item > .inner a:first-child, ' +
        '.episodes > .episode a, ' +
        '.servers-tabs > .tab, ' +
        '#player-cover'
    )
    .forEach(item => item.classList.add('focusable'));

  SpatialNavigation.add({
    selector: '.focusable',
  });
  SpatialNavigation.makeFocusable();
  SpatialNavigation.focus();

  // Show the page
  document.body.style.display = 'block';

  // ---

  const iframeHandler = iframe => {
    iframe?.addEventListener('load', function () {
      if (!this.contentDocument) return;
      const content = this.contentDocument;

      const video = content.querySelector('video');
      if (!video) return;

      iframe.parentElement
        ?.querySelectorAll('.plyr')
        .forEach(item => item.remove());
      iframe.parentElement?.appendChild(video);
      iframe.remove();

      const player = new Plyr(video, {
        controls: [
          'play',
          'progress',
          'current-time',
          'duration',
          'settings',
          'fullscreen',
        ],
        settings: ['speed'],
        disableContextMenu: false,
      });
      player.play();
    });
  };

  setInterval(() => {
    const iframe = document.querySelector('#player iframe:not(.handled)');
    if (iframe) {
      iframe.classList.add('handled');
      iframeHandler(iframe);
    }
  }, 250);
}

document.body.style.display = 'none';

document.addEventListener('DOMContentLoaded', main);
if (document.readyState === 'interactive' || document.readyState === 'complete')
  main();
