import React from 'react'

const StepPoints = () => {
  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>Find the ideal floor for your project</h1>
          <p className='py-3'>With so many options to choose from, choosing the perfect floor for your project is no easy feat. Luckily, our FloorExplorer is here to help: just answer a few simple questions and you'll get an overview of the floors that best fit your needs and style. Ready?</p>
        </div>
        <div className='row'>
          <div className='col-md-3 col-6 col-xs-12'>
            <div className='steps-main text-center'>
              <div className='inner_step text-center'>
                <div className='steps_img'>
                  <img src='assets/images/steps/Group 28444.svg' className='img-fluid' alt='img1' />
                </div>
                <div className='steps_name'>
                  <p>Choose Your Room</p>
                </div>
              </div>
              <div className='outer_name'>
                <p>Step 1</p>
              </div>
            </div>
          </div>
          <div className='col-md-3  col-6 col-xs-12'>
            <div className='steps-main text-center'>
              <div className='inner_step text-center'>
                <div className='steps_img'>
                  <img src='assets/images/steps/Group 28446.svg' className='img-fluid' alt='img1' />
                </div>
                <div className='steps_name'>
                  <p>Choose your look</p>
                </div>
              </div>
              <div className='outer_name'>
                <p>Step 2</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 col-xs-12'>
            <div className='steps-main text-center'>
              <div className='inner_step text-center'>
                <div className='steps_img'>
                  <img src='assets/images/steps/Group 28448.svg' className='img-fluid' alt='img1' />
                </div>
                <div className='steps_name'>
                  <p>Choose your colour</p>
                </div>
              </div>
              <div className='outer_name'>
                <p>Step 3</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 col-xs-12'>
            <div className='steps-main text-center'>
              <div className='inner_step text-center'>
                <div className='steps_img'>
                  <img src='assets/images/steps/Group 28450.svg' className='img-fluid' alt='img1' />
                </div>
                <div className='steps_name'>
                  <p>Choose your top requirement</p>
                </div>
              </div>
              <div className='outer_name'>
                <p>Step 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepPoints