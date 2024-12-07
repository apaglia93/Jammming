import React, { useEffect, useState } from "react";

export default function PlaylistContainer(props) {
    const playlistContainers = props.playlistSongs.map(playlistSong => 
        <div className='song-container'>
            <div>
                <p className='song-title'>{playlistSong.title}</p>
                <p>{playlistSong.artist}</p>
            </div>
            <p className="remove-from-playlist" id={playlistSong.id} onClick={() => {handleRemoveClick(playlistSong.id)}} >-</p>
        </div>
    )

    const handleRemoveClick = (id) => {
        props.setPlaylistSongs(props.playlistSongs.filter(song => song.id !== id))
    }

    const changeSendState = () => {
        let bool
        if (props.sendState) {
            bool = false
        } else {
            bool = true
        }

        props.setSendState(bool)
    }

    return (
        <>
            <div className='outcome-div' style={{width: '35%'}}>
                <h1 className='section-title'>Playlist</h1>
                {props.playlistSongs.length > 0 &&<p id='send-to-spotify' onClick={changeSendState} style={{textAlign: 'center', color: 'darkblue'}}>Send playlist to Spotify</p>}
                {props.playlistSongs.length > 0 ? playlistContainers : <p style={{color: 'darkblue', padding: '1rem', textAlign: 'center'}}>Add some songs to your playlist...</p>}
            </div>
        </>
    )
}