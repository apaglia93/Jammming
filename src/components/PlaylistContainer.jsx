import React from "react";

const playlistSongs = [{
    title: 'song1',
    artist: 'artist1',
    album: 'album1'
}, {
    title: 'song2',
    artist: 'artist2',
    album: 'album2'
}, {
    title: 'song3',
    artist: 'artist3',
    album: 'album3'
}]

export default function PlaylistContainer() {
    const playlistContainers = playlistSongs.map(playlistSong => 
        <div className='song-container'>
            <div>
                <p className='song-title'>{playlistSong.title}</p>
                <p>{playlistSong.artist}</p>
            </div>
            <p className="remove-from-playlist">-</p>
        </div>
    )
    
    return (
        <>
            <div className='outcome-div' style={{width: '35%'}}>
                <h1 className='section-title'>Playlist</h1>
                {playlistSongs.length > 0 &&<p id='send-to-spotify' style={{textAlign: 'center', color: 'darkblue'}}>Send to Spotify</p>}
                {playlistSongs.length > 0 ? playlistContainers : <p style={{color: 'darkblue', padding: '1rem', textAlign: 'center'}}>Add some songs to your playlist...</p>}
            </div>
        </>
    )
}