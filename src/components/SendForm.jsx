import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function SendForm(props) {
    const [username, setUsername] = useState('')
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const [playlistName, setPlaylistName] = useState('')
    const handlePlaylistName = (e) => {
        setPlaylistName(e.target.value)
    }

    const [description, setDescription] = useState('')
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    
    const changeSendState = () => {
        props.setSendState(false)
    }

    const submitHandle = (e) => {
        e.preventDefault()
        
        alert('Your playlist was successfully sent to Spotify!')

        props.setSendState(false)
        props.setPlaylistSongs([])
    }

    return (
        <>
            <div id='send-to-spotify-form'>
                <a href="#" className="previous" onClick={changeSendState} >&laquo; Go Back</a>
                <h1 class='section-title'>Send Playlist to Spotify</h1>
                <p>Fill out the details below to send your playlist to Spotify.</p>
                <form onSubmit={submitHandle}>
                    <input 
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    <input 
                        type='text'
                        placeholder='Playlist Name'
                        name='playlistName'
                        value={playlistName}
                        onChange={handlePlaylistName}
                        required
                    /><input 
                        type='textarea'
                        placeholder='Playlist description (optional)'
                        name='description'
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <input 
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        </>
    )
}