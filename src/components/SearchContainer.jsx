import React, {useState, useEffect} from 'react'
import axios from 'axios'

const clientId = 'cddf0f9092604c92bb9002d5d6d00cf0'
const clientSecret = '5d8965fb3e4e4aa9b8ab7d6bb155a8e2'
let token = ''

export default function SearchContainer(props) {
    const [title, setTitle] = useState('')
    const [authToken, setAuthToken] = useState()
    const [songList, setSongList] = useState()

    useEffect(() => {
        props.setSongList(songList)
    }, [songList])
    
    //get spotyify API token and set initial state
    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)      
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
        .then(tokenResponse => {
            token = tokenResponse.data.access_token
            setAuthToken(token)
        })
        
        const interval = setInterval(() => {
            axios('https://accounts.spotify.com/api/token', {
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)      
                },
                data: 'grant_type=client_credentials',
                method: 'POST'
            })
            .then(tokenResponse => {
                token = tokenResponse.data.access_token
                setAuthToken(token)
            })
        }, 300000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    //handle form submit by grabbing current token and using it for an api call to spotify, then map the results to a song array if they match search criteria
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(title.length < 2) {
            alert('Please input a search longer than 2 characters.')
            return
        }
        
        getSongs()
    }

    async function getSongs() {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/search?q=${title}&type=track`, {
                headers: {
                    'Authorization' : `Bearer ${authToken}`
                }
            })
            .then(response => {
                let songs = response.data.tracks.items
                setSongList(songs)
            })
        } catch(error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Search for a song by its title'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type='submit' 
                    value='Search'
                />
            </form>
        </>
    )
}