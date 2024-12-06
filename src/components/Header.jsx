import React from "react";

const style = {
    color: 'white', 
    background: 'darkblue',
    textAlign: 'center',
    padding: '2rem 0', 
    fontSize: '2.5rem'
}

export default function Header() {
    return (
        <>
            <h1 style={style}>Jammming</h1>
        </>
    )
}