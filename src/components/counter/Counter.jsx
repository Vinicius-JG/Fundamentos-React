import React, {useState} from 'react'
import Display from './Display'
import Buttons from './Buttons'
import Step from './Step'

export default () => {

    const [value, setValue] = useState(0)
    const [step, setStep] = useState(1)

    const inc = () => {
        setValue(value + step)
    }

    const dec = () => {
        setValue(value - step)
    }

    const updateStep = newStep => {
        setStep(parseInt(newStep))
    }

    return (
    <div>
        <Display value={value}/>
        <Step stepValue={step} updateStep={updateStep}/>
        <Buttons inc={inc} dec={dec}/>
    </div>
    )
}

