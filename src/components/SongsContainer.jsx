import React, {useEffect, useState} from "react";

export default function SongsContainer(props) {
    const createSongContainers = (songList) => {
        return songList.map(song => 
            <div className='song-container'>
                <div>
                    <p className='song-title'>{song.name}</p>
                    <p>{song.artists[0].name}</p>
                </div>
                <p className="add-to-playlist" id={song.id} onClick={handleAddClick}>+</p>
            </div>
        )
    }

    const handleAddClick = (e) => {
        let songId = e.target.id
        let index = props.songList.findIndex(song => song.id === songId)
        let songName = props.songList[index].name
        let songArtist = props.songList[index].artists[0].name

        const checkDuplicate = (song) => {
            return song.id === songId
        }

        if(props.playlistSongs.some(checkDuplicate)) {
            alert('This song is already on your playlist')
            return
        } 

        props.setPlaylistSongs([
            ...props.playlistSongs,
            {
                id: songId,
                title: songName,
                artist: songArtist
            }
        ])
    }
    
    return (
        <>
            <div className='outcome-div'>
                <h1 className='section-title'>Search Results</h1>
                {props.songList ? createSongContainers(props.songList) : <p style={{color: 'darkblue', padding: '1rem', textAlign: 'center'}}>Run a search to display some songs!</p>}
            </div>
        </>
    )
}