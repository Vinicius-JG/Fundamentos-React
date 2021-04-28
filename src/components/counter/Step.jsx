import React from 'react'

export default props => {
    
    const handleInputChange = e => {
        props.updateStep(e.target.value)
    }
    
    return(
        <div>
            <label htmlFor='StepInput'>Step: </label>
            <input id='StepInput' type='number' value={props.stepValue} min={1} onChange={handleInputChange}/>
        </div>
    )
}