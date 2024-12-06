import React from 'react'

export default function SearchContainer() {
    return (
        <>
            <form>
                <input 
                    type='text' 
                    placeholder='Search for a song title'
                    name='title'
                />
                <input 
                    type='submit' 
                    value='Search'
                />
            </form>
        </>
    )
}