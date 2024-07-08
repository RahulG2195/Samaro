import React from 'react'

const ProductFeature = ({title, img, desc}) => {
  return (
    <>
      <div className='pfContent_main d-md-flex my-md-3'>
        <img src={img} className='pfIcon'/>
        <div className='pfContent'>
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </>
  )
}

export default ProductFeature