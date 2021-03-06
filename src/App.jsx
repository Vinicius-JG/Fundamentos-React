import React from 'react'
import './App.css'
import First from './components/basics/First'
import WithParameters from './components/basics/WithParameters'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import ProductList from './components/repetition/ProductList'
import Counter from './components/counter/Counter'
import Mega from './components/mega/Mega'

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
            <Card title='#04 - Product List'>
                <ProductList></ProductList>
            </Card>
            <Card title='05# - Counter'>
                <Counter></Counter>
            </Card>
            <Card title='06# - Mega'>
                <Mega />
            </Card>
        </div>
    </div>

export default app