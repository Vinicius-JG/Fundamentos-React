import React from 'react'

const random = (props) => {
    const rng = Math.random()

    return (
        <div>
            <h2>
                Random Number between {props.min} and {props.max}
            </h2>
            <p>
                {parseInt(rng * (props.max - props.min) + props.min)}
            </p>
        </div>
    )
}

export default random