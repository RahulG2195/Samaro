import React from 'react';
import './Broucher.css';

const Broucher = () => {
  return (
    <div className='dwnldbr py-2 my-5'>
      <div className="container">
        <div className="row align-items-center  justify-content-center">
          <div className="col-md-4 col-sm-8 mb-4 mx-auto px-5 bro">
            <p className='float-center mx-4 fw-semibold text-white '>If you'd like to view our latest product catalogue you can download it here.</p>
          <button className=' mx-4 small border border-3 rounded-pill px-3 btn text-white dwnldbtn'>DOWNLOAD YOUR FREE FLOORING</button>
          </div>
          <div className="col-md-4 col-sm-8 mb-4 dwnldCards">
            <img src="/assets/images/products/Group 28535.png" className='img-fluid mx-auto d-block' alt="err" />
          </div>
          <div className=" col-md-4 col-sm-8 mb-4 mx-auto px-5 bro">
            <p className='float-end mx-4 fw-semibold text-white '>If you'd like to view our latest product catalogue you can download it here.</p>
            <button className='mx-4 small border border-3 rounded-pill px-3 btn text-white explorebtn'>START THE FLOOR EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broucher;
