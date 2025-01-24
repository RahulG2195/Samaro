import React from 'react'

const StepTwo = ({ formData, handleInputChange }) => {


  const stepTwo = [
    {
      key: 1,
      'name': 'SPC',
      'image': '1.png',
      'id': 'SPC',
    },
    {
      key: 2,
      'name': 'LVT',
      'image': '2.png',
      'id': 'LVT',
    },
  ]

  const handleRadioChange = (event) => {
    handleInputChange({
      target: {
        name: 'floorType',
        value: event.target.id,
      },
    });
  };

  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>I’d like my floor to look like…</h1>
          <p>Select your preferred flooring design.</p>
        </div>
        <div className='row'>
          {
            stepTwo.map(data => (
              <div className='col-lg col-md- col-sm- col-6 mx-auto'>
                <div className='steps1-main' id={`type${data.id}`}>
                  <div className='inner_step1'>
                    <label htmlFor={data.id} className='stepslabel'>
                      <div className='steps1_img type_img'>
                        <img src={`assets/images/Step/StepTwo/${data.image}`} className='img-fluid' alt='img1' />
                      </div>
                      <div className='steps1_name d-flex justify-content-between pt-md-2 px-2 step2'>
                        <p><strong>{data.name}</strong></p>
                        <input
                          type='radio'
                          name='floortype'
                          className='form-check-input'
                          id={data.id}
                          checked={formData.floorType === data.id}
                          onChange={handleRadioChange}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default StepTwo