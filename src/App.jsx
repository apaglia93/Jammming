import React, {useState} from 'react'
import './App.css'

import Header from './components/Header'
import SearchContainer from './components/SearchContainer'
import SongsContainer from './components/SongsContainer'
import PlaylistContainer from './components/PlaylistContainer'

function App() {
  const [songList, setSongList] = useState()
  const songListFromSearch = (songs) => {
    setSongList(songs)
  }
  
  return (
    <>
      <Header />
      <SearchContainer setSongList={songListFromSearch} />
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <SongsContainer songList={songList}/>
        <PlaylistContainer />
      </div>
    </>
  )
}

export default App