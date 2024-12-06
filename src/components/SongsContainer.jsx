import React from "react";

const songs = [{
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

export default function SongsContainer() {
    const songContainers = songs.map(song => 
        <div className='song-container'>
            <div>
                <p className='song-title'>{song.title}</p>
                <p>{song.artist}</p>
            </div>
            <p className="add-to-playlist">+</p>
        </div>
    )
    
    return (
        <>
            <div className='outcome-div'>
                <h1 className='section-title'>Search Results</h1>
                {songs.length > 0 ? songContainers : <p style={{color: 'darkblue', padding: '1rem', textAlign: 'center'}}>Run a search to display some songs!</p>}
            </div>
        </>
    )
}