import React from 'react'
import Image from 'next/image';
import './spc.css'

const SpcBanner = ({img}) => {
  return (
    <>
      <section className="spchero">
        <div className='position-relative'>
          <Image
            src={`/uploads/${img}`}
            alt="Description of the image"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            priority={true}
            loading="eager"
          />
          <div className=" spcbannertext position-absolute">

            <div className="  fw-semibold">
              <h2 className="heading w-75 ">
                Premium vinyl, <span >SPC</span> flooring of
                &nbsp;
                <span >superior quality.</span>
              </h2>
              <a href="#" className="discoverBtn button d-inline-block mt-3 px-3">
                Discover all our floors
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* <section>
        <div >
          <div className="row align-items-center bannerbottom py-3">
            <div className="col-md-4 text-center text-md-end mb-3 mb-md-0">
              <p className='passiontext'>A passion for timeless</p>
              <p className='passiontext'>beauty</p>
            </div>
            <div className="col-md-8 px-3 px-md-5">
              <p className="mb-0 subcption">
                Carefree living starts in a home with high-performance floors. That's Samaro's motivation since 1990. Today, you can choose between a wide range of long-lasting laminate, vinyl, and wood flooring, topped off with matching skirting boards and finishing profiles. Our trademarks: beautiful designs, waterproof floors, and easy installation - all thanks to a series of ground-breaking innovations.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default SpcBanner