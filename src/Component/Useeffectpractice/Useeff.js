import React, { useEffect, useState } from 'react'

const Useeff = () => {
    const [text, setText] = useState(0);
    useEffect(() => {
        document.title = `Count: ${text}`;
    }, [])

    const handleClick = () => {
        setText(text + 1);
    }
    const buttonStyles = {
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
        border: '2px solid blue',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            border: '2px solid red',
        }
    }

    return (
        <>
            <h1>{text}</h1>
            <button style={buttonStyles} onClick={handleClick}>Increment</button>

        </>
    );
}

export default Useeff
