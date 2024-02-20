import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

function MyCurrentlyPlayingComponent() {
  const [nowPlaying, setNowPlaying] = useState({ name: 'Not Checked', albumArt: '' });

  useEffect(() => {
    // Set the access token here
    spotifyApi.setAccessToken('d5b2c9a12d5f4ddc944ee3b386fb8bb4');
    getNowPlaying();
  }, []);

  const getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        setNowPlaying({
          name: response.item.name,
          albumArt: response.item.album.images[0].url,
        });
      });
  }

  return (
    <div>
      <div>Now Playing: {nowPlaying.name}</div>
      <img src={nowPlaying.albumArt} style={{ width: 50 }}/>
    </div>
  );
}

export default MyCurrentlyPlayingComponent;
