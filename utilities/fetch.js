import { url, playlistID, APIKey } from "../setup/youtube-api";

export const fetchVideos = (setData) =>
  fetch(
    `${url}?part=snippet,contentDetails&playlistId=${playlistID}&maxResults=100&key=${APIKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      setData({ loaded: true, videos: data.items });
    });
