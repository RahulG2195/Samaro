import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StepThree = ({ formData, handleInputChange }) => {



  // const colorArr = [
  //   {
  //     key: 1,
  //     'clrCode': 'Beige',
  //     'image': 'Mask Group 286.png',
  //   },
  //   {
  //     key: 2,
  //     'clrCode': 'Dark Brown',
  //     'image': 'Mask Group 287.png',
  //   },
  //   {
  //     key: 3,
  //     'clrCode': 'Dark Brown',
  //     'image': 'Mask Group 288.png',
  //   },
  //   {
  //     key: 4,
  //     'clrCode': 'Grey',
  //     'image': 'Mask Group 289.png',
  //   },
  //   {
  //     key: 5,
  //     'clrCode': 'Dark grey', 
  //     'image': 'Mask Group 290.png',
  //   },
  //   {
  //     key: 6,
  //     'clrCode': 'Light grey',
  //     'image': 'Mask Group 291.png',
  //   },
  //   {
  //     key: 7,
  //     'clrCode': 'Brown',
  //     'image': 'Mask Group 292.png',
  //   },
  //   {
  //     key: 8,
  //     'clrCode': 'Dark brown',
  //     'image': 'Mask Group 293.png',
  //   },
  //   {
  //     key: 9,
  //     'clrCode': 'Brown',
  //     'image': 'Mask Group 294.png',
  //   },

  // ##############################################################
  // {
  //   key: 10,
  //   'clrCode': 'red',
  //   'image': 'Mask Group 294.png',
  // },
  // {
  //   key: 11,
  //   'clrCode': 'red',
  //   'image': 'Mask Group 295.png',
  // },
  // {
  //   key: 12,
  //   'clrCode': 'red',
  //   'image': 'Mask Group 296.png',
  // },
  // {
  //   key: 13,
  //   'clrCode': 'red',
  //   'image': 'Mask Group 297.png',
  // },
  // {
  //   key: 14,
  //   'clrCode': 'red',
  //   'image': 'Mask Group 298.png',
  // },
  // {
  //   key: 15,
  //   'clrCode': 'red',
  //   'image': 'Mask Group 299.png',
  // },
  // ];

  const [colorArr , setColorArr] = useState([]);

  useEffect(() => {
    const fetchColor = async () => {
      const response = await axios.get('/api/color')
      const colors = response.data;
      setColorArr(colors);
    }
    fetchColor()
  }, [])


  const handleRadioChange = (event) => {
    handleInputChange({
      target: {
        name: 'color',
        value: event.target.value,
      },

    });
  };
  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>I'd like my floor to look like…</h1>
          {/* <p className='py-2'>Select one or more rooms below.</p> */}
        </div>
        <div className='row'>
          {
            colorArr.map(data => (
              <div className='col-md-2 col-4 col-xs-6 my-md-3 my-2'>
                <div className='steps1-main text-center'>
                  <div className="inner_step1 text-center">
                    <label htmlFor={data.id} className="stepslabel">
                      <div className="steps1_img">
                        <input
                          value={data.clrCode}
                          type="radio"
                          name="floorColor"
                          className="form-check-input clrStepRadioBtn"
                          id={data.id}
                          checked={formData.color === data.clrCode}
                          onChange={handleRadioChange}
                        />
                        <img
                          src={`assets/images/Step/StepThree/${data.image}`}
                          className="img-fluid clrImg"
                          alt={`Step ${data.name}`}
                          data-id={data.id}

                        />
                        {/* <span className="check-icon">&#10004;</span>  */}

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

export default StepThree