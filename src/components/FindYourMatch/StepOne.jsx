import React from 'react'

const StepOne = ({ formData, handleInputChange }) => {
  const stepone = [
    {
      key: 1,
      'name': 'Bathroom',
      'image': '1.png',
      'id': 'Bathroom',
    },
    {
      key: 2,
      'name': 'Bedroom',
      'image': '2.png',
      'id': 'Bedroom',
    },
    {
      key: 3,
      'name': 'Dining room',
      'image': '3.png',
      'id': 'Dining',
    },
    {
      key: 4,
      'name': 'Hallway',
      'image': '4.png',
      'id': 'Entrance',
    },
    {
      key: 5,
      'name': 'Office',
      'image': '5.png',
      'id': 'Home',
    },
    {
      key: 6,
      'name': 'Kitchen',
      'image': '6.png',
      'id': 'Kitchen',
    },
    {
      key: 7,
      'name': 'Living room',
      'image': '7.png',
      'id': 'Living',
    },
    {
      key: 8,
      'name': 'Childrens room',
      'image': '8.png',
      'id': 'Nursery',
    },
  ]
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    handleInputChange({
      target: {
        name: 'preferences',
        value: checked
          ? [...formData.preferences, id]
          : formData.preferences.filter((pref) => pref !== id),
      },
    });
  };
  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>I need a floor for my…</h1>
          <p>Select one or more rooms below.</p>
        </div>
        <div className='row'>
          {
            stepone.map(data => (
              <div className='col-md-3 col-6 col-xs-12 my-md-3'>
                <div className='steps1-main text-center'>
                  <div className='inner_step1 text-center'>
                    <label htmlFor={data.id} className='stepslabel p-'>
                      <div className='steps1_img '>
                        <img src={`assets/images/Step/StepTwo/${data.image}`} className='img-fluid' alt='img1' />
                      </div>
                      <div className='steps1_name d-flex justify-content-between pt-md-2 px-2'>
                        <p><strong>{data.name}</strong></p>
                        <input
                          type='checkbox'
                          name='floortype'
                          className='form-check-input'
                          id={data.id}
                          checked={formData.preferences.includes(data.id)}
                          onChange={handleCheckboxChange}
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

export default StepOne