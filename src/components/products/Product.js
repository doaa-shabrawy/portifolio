import React from 'react'

function Product() {
  return (

    <div className='col-sm-6 col-md-3 col-lg-3 mb-2'>
      <div className="card text-center">
        <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>

  )
}

export default Product
