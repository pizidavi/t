import Plyr from 'plyr';
import plyrStyle from 'plyr/dist/plyr.css';

import './utils/spatial-navigation';
import css from './global.css';

/**
 * Main function
 */
function main() {
  // Show the page
  document.body.style.display = 'block';

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

  // ---

  const iframeHandler = () => {
    const iframe = document.querySelector('#player iframe');
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
    if (document.querySelector('#player iframe:not(.handled)')) {
      document.querySelector('#player iframe')?.classList.add('handled');
      iframeHandler();
    }
  }, 250);
}

document.body.style.display = 'none';

document.addEventListener('DOMContentLoaded', main);
if (document.readyState === 'interactive' || document.readyState === 'complete')
  main();
