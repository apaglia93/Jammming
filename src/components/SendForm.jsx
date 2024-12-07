import React from 'react'

export default function SendForm(props) {
    const changeSendState = () => {
        props.setSendState(false)
    }
    
    return (
        <>
            <div id='send-to-spotify-form'>
                <a href="#" class="previous" onClick={changeSendState} >&laquo; Go Back</a>
                <h1 class='section-title'>Send Playlist to Spotify</h1>
                <p>Fill out the details below to send your playlist to Spotify.</p>
                <form>
                    <input 
                        type='text'
                        placeholder='Username'
                    />
                    <input 
                        type='text'
                        placeholder='Playlist Name'
                    /><input 
                        type='textarea'
                        placeholder='Playlist description'
                    />
                    <label for='setPrivate'>Private?</label>
                    <input 
                        type='checkbox'
                        id='setPrivate'
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