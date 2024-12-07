import React, {useEffect, useState} from "react";

export default function SongsContainer(props) {
    const [playlistSongs, setPlaylistSongs] = useState([])
    const [songList, setSongList] = useState()
    useEffect(() => {
        setSongList(props.songList)
    }, [props.songList])

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
        let index = songList.findIndex(song => song.id === songId)
        let songName = songList[index].name
        let songArtist = songList[index].artists[0].name

        const checkDuplicate = (song) => {
            return song.id === songId
        }

        if(playlistSongs.some(checkDuplicate)) {
            alert('this song is already on your playlist')
            return
        } 

        setPlaylistSongs([
            ...playlistSongs,
            {
                id: songId,
                title: songName,
                artist: songArtist
            }
        ])
    }
    
    return (
        <>
            <p>{playlistSongs[0]? playlistSongs[0].artist : 'placeholder'}</p>
            <div className='outcome-div'>
                <h1 className='section-title'>Search Results</h1>
                {songList ? createSongContainers(songList) : <p style={{color: 'darkblue', padding: '1rem', textAlign: 'center'}}>Run a search to display some songs!</p>}
            </div>
        </>
    )
}