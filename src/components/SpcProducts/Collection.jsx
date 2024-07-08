import React from 'react'
import './Collection.css'

const Collection = () => {
    return (
        <>
            <div className='my-5 respCont2'>
            <div className="container">
                <p className='passiontext fs-4'>Choose by <span className='fw-semibold'>collection</span></p>
            </div>
            <div className='woodCollection position-relative '>
                <div className='background-image1'></div>
                <div className=' woodimage'>
                    <img src="/assets/images/products/Group 28508.png" alt="" className='' />
                    <span className='position-absolute fs-1 fw-semibol text-danger woodText '>Wood</span>
                </div>
                <div className=' '>
                    <div className='overlay-image row row-cols-md-3 row-cols-sm-2 row-cols-xs-1'>
                        <div className='col '>
                            <img src='/assets/images/products/Group 28511.png' alt='err' className='img-fluid image-size' />
                        </div>
                        <div className='col'>
                            <img src='/assets/images/products/Group 28527.png' alt='err' className='img-fluid image-size' />
                        </div>
                        <div className='col'>
                            <img src='/assets/images/products/Group 28528.png' alt='err' className='img-fluid image-size' />
                        </div>
                    </div>
                </div>


            </div>


            <div className='woodCollection  position-relative marginY'>
                <div className='background-image2'></div>
                <div className=' woodimage2'>
                    <img src="/assets/images/products/Group 28522.png" alt="" className='' />
                </div>
                {/* <span className='position-absolute fs-1 fw-semibold text-danger StoneText '>Collection 1</span> */}

                <div className=' '>
                    <div className='overlay-image2 row row-cols-md-3 row-cols-sm-2 row-cols-xs-1'>
                        <div className='col '>
                            <img src='/assets/images/products/Group 28534.png' alt='err' className='img-fluid image-size' />
                        </div>
                        <div className='col'>
                            <img src='/assets/images/products/Group 28533.png' alt='err' className='img-fluid image-size' />
                        </div>
                        <div className='col'>
                            <img src='/assets/images/products/Group 28532.png' alt='err' className='img-fluid image-size' />
                        </div>
                    </div>
                </div>


            </div>


            {/* ====================================================================================================== */}
            <div className='woodCollection position-relative my-5'>
                <div className='background-image1'></div>
                <div className=' woodimage'>
                    <img src="/assets/images/products/Group 28523@2x.png" alt="" className='' />
                    {/* <span className='position-absolute fs-1 fw-semibold text-danger woodText '>Collection 1</span> */}
                </div>
                <div className=' '>
                    <div className='overlay-image row row-cols-md-3 row-cols-sm-2 row-cols-xs-1'>
                        <div className='col '>
                            <img src='/assets/images/products/Group 28531.png' alt='err' className='img-fluid image-size' />
                        </div>
                        <div className='col'>
                            <img src='/assets/images/products/Group 28530.png' alt='err' className='img-fluid image-size' />
                        </div>
                        <div className='col'>
                            <img src='/assets/images/products/Group 28529.png' alt='err' className='img-fluid image-size' />
                        </div>
                    </div>
                </div>


            </div>



            </div>
        </>
    )
}

export default Collection