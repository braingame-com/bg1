const url = 'https://www.googleapis.com/youtube/v3/playlistItems',
  part = 'snippet,contentDetails',
  playlistID = 'UUpulih4t4xgTrhh9vj4d7uw',
  maxResults = '100',
  APIKey = 'AIzaSyC_TgRe232Bx7xDQInCJfaNYnIHr9HvDJ8';
export const fetchVideos = (setData: any) =>
  fetch(
    `${url}?part=${part}&playlistId=${playlistID}&maxResults=${maxResults}&key=${APIKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      setData({ loaded: true, videos: data.items });
    });
