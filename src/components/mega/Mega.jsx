import React, {useState} from 'react'

export default () => {
    const [numbers, setNumbers] = useState([])

    const generateNumbers = () =>{
        setNumbers([])

        for (let i = 0; i < 6; i++) {
            setNumbers(numbers => [...numbers, generateNonRepeatingNumber(1, 60, numbers)])
        }

        return numbers
    }

    const generateNonRepeatingNumber = (min, max, array) => {
        const rng = Math.floor((Math.random() * max) + min)

        return array.includes(rng) ? generateNonRepeatingNumber(min, max, array) : rng
    }
    
    return(
        <div>
            <h2>{numbers.join(' ')}</h2>
            <button onClick={generateNumbers}>Generate Numbers</button>
        </div>
    )
}