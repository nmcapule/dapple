const WINDOW_YT_STATE = '__youtube_api_state';
const CHECK_INTERVAL_MS = 500;

enum YouTubeIframeAPIState {
  UNKNOWN = 0,
  LOADING,
  LOADED,
}

export async function loadYouTubeIframeAPI() {
  if (window[WINDOW_YT_STATE] === YouTubeIframeAPIState.LOADED) {
    return;
  }
  if (window[WINDOW_YT_STATE] === YouTubeIframeAPIState.LOADING) {
    return new Promise((resolve: (value: void) => void) => {
      const tick = setInterval(() => {
        if (window[WINDOW_YT_STATE] === YouTubeIframeAPIState.LOADED) {
          resolve();
          clearInterval(tick);
        }
      }, CHECK_INTERVAL_MS);
    });
  }

  window[WINDOW_YT_STATE] = YouTubeIframeAPIState.LOADING;

  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  return new Promise((resolve: (value: void) => void) => {
    window['onYouTubeIframeAPIReady'] = () => {
      window[WINDOW_YT_STATE] = YouTubeIframeAPIState.LOADED;
      resolve();
    };
  });
}
