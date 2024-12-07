import React, {useState} from 'react'
import './App.css'

import Header from './components/Header'
import SearchContainer from './components/SearchContainer'
import SendForm from './components/SendForm'
import SongsContainer from './components/SongsContainer'
import PlaylistContainer from './components/PlaylistContainer'

function App() {
  const [sendState, setSendState] = useState(false)
  const toggleSendState = (bool) => {
    setSendState(bool)
  }
  
  const [songList, setSongList] = useState([])
  const songListFromSearch = (songs) => {
    setSongList(songs)
  }

  const [playlistSongs, setPlaylistSongs] = useState([])
  const playlistSongsFromSearch = (songs) => {
    setPlaylistSongs(songs)
  }
  
  return (
    <>
      <Header />
      {sendState? <SendForm sendState={sendState} setSendState={toggleSendState} /> : ''}
      <SearchContainer setSongList={songListFromSearch} />
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <SongsContainer songList={songList} setPlaylistSongs={playlistSongsFromSearch} playlistSongs={playlistSongs} />
        <PlaylistContainer playlistSongs={playlistSongs} setPlaylistSongs={playlistSongsFromSearch} sendState={sendState} setSendState={toggleSendState} />
      </div>
    </>
  )
}

export default App