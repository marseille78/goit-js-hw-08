import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  (function() {
    const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(saveTime, 1000));

    function saveTime() {
      player.getCurrentTime().then(function(sec) {
        localStorage.setItem('videoplayer-current-time', sec);
      }).catch(function(err) {
        throw new Error(err);
      });
    }

    player.on('play', () => {
      player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
        .then(sec => {})
        .catch(err => {
          throw new Error(err);
        });
    });
  })();
});