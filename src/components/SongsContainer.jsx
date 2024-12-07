import React, {useEffect, useState} from "react";

export default function SongsContainer(props) {
    const [songList, setSongList] = useState()
    useEffect(() => {
        setSongList(props.songList)
        console.log(songList)
    }, [props.songList])

    const createSongContainers = (songList) => {
        return songList.map(song => 
            <div className='song-container'>
                <div>
                    <p className='song-title'>{song.name}</p>
                    <p>{song.artists[0].name}</p>
                </div>
                <p className="add-to-playlist">+</p>
            </div>
        )
    }
    
    return (
        <>
            <div className='outcome-div'>
                <h1 className='section-title'>Search Results</h1>
                {songList ? createSongContainers(songList) : <p style={{color: 'darkblue', padding: '1rem', textAlign: 'center'}}>Run a search to display some songs!</p>}
            </div>
        </>
    )
}