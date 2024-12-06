import React from 'react'

const formStyle = {
    background: 'lightblue', 
    width: '70%',
    margin: '1rem auto',
    height: '30vh',
    display: 'grid', 
    gridTemplateColumns: 'repeat(5, 1fr)', 
    gridTemplateRows: 'repeat(5, 1fr)',
    borderRadius: '5px',
    border: '2px solid darkblue',

}

const searchStyle = {
    gridArea: '2/2/3/5',
    borderRadius: '5px',
    background: 'white', 
    border: '2px solid darkblue',
    fontSize: '1.25rem', 
    fontDecoration: 'italic',
    color: 'gray'
}

const buttonStyle = {
    gridArea: '4/3/4/4',
    borderRadius: '5px',
    border: 'none', 
    background: 'darkblue', 
    color: 'white',
    fontSize: '1.25rem',
    padding: '0.75em 1em'
}

const hoverStyle = {
    cursor: 'pointer'
}

export default function SearchContainer() {
    return (
        <>
            <form style={formStyle}>
                <input 
                    type='text' 
                    placeholder='Search for a song title'
                    name='title'
                    style={searchStyle}
                />
                <input 
                    type='submit' 
                    value='Search'
                    style={buttonStyle}
                />
            </form>
        </>
    )
}