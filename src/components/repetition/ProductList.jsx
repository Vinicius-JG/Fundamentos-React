import React from 'react'
import products from '../../data/products'

const productList = () => {
    const trList = products.map(product => {
        return (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (<table border='1' style={{width:'100%'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {trList}
            </tbody>
        </table>)
}

export default productList