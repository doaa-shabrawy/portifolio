import React from 'react'

function ProductDetails() {
  return (
    <section className='py-5 container'>
      <div className="card w-50 mx-auto p-3 text-center">

        <div className="card-header">
          <h2>Card Header</h2>
        </div>
        <img src="https://picsum.photos/200" className="w-50 mx-auto" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
