import React from 'react'
import './App.css'
import First from './components/basics/First'
import WithParameters from './components/basics/WithParameters'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

const app = () =>
    <div className='app'>
        <h1>React</h1>
        <div className='cards'>
            <Card title='#01 - Normal component'>
                <First />
            </Card>
            <Card title='#02 - Component with Parameter'>
                <WithParameters title="Second Component" subtitle="Welcome 2" />
            </Card>
            <Card title='#03 - Random number'>
                <Random min={1} max={100} />
            </Card>
        </div>
    </div>

export default app