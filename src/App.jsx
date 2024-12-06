import React from 'react'
import './App.css'

import Header from './components/Header'
import SearchContainer from './components/SearchContainer'
import SongsContainer from './components/SongsContainer'
import PlaylistContainer from './components/PlaylistContainer'

function App() {
  return (
    <>
      <Header />
      <SearchContainer />
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <SongsContainer />
        <PlaylistContainer />
      </div>
    </>
  )
}

export default App