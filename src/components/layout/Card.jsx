import React from 'react'
import './Card.css'

const card = props => {
    return (
        <div className='card'>
            <h1 className='title'>{props.title}</h1>
            <div className='content'>{props.children}</div>
        </div>
    )
}

export default card