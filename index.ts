import { loadYouTubeIframeAPI } from './src/youtube';

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
async function initPlayer() {
  await loadYouTubeIframeAPI();

  let done = false;
  const player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'FtutLA63Cp8',
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: event => {
        console.log('player is ready');
        event.target.playVideo();
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
