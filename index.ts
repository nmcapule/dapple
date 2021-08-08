import { loadYouTubeIframeAPI } from './src/youtube';

function queryParams(key: string): string {
  return new URL(window.location.href).searchParams.get(key);
}

function selectYouTubeVideo(): string {
  // Check first if param is set.
  if (queryParams('id')) {
    return queryParams('id');
  }

  const r = Math.random() * 100;
  if (r < 70.0) {
    return 'FtutLA63Cp8'; // bad apple
  }
  if (r < 97.5) {
    return 'htIuSWBnmok'; // already dead
  }
  return 'dQw4w9WgXcQ'; // you know what this is.
}

async function initPlayer() {
  await loadYouTubeIframeAPI();

  let done = false;
  const player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: selectYouTubeVideo(),
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: event => {
        if (queryParams('autoplay')) {
          console.log('autoplay!');
          player.playVideo();
        }
      },
      onStateChange: event => {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(player.stopVideo, 6000);
          done = true;
        }
      },
    },
  });
}
initPlayer();
