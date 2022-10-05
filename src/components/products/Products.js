import React from 'react'
import Product from './Product'
function Products() {
  return (
    <div>
      <section className='container'>
        <div className='row'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>

      </section>
    </div>
  )
}

export default Products
