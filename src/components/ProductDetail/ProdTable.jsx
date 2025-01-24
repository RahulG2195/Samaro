import React from 'react'

const ProdTable = () => {
  const Dimensions = [
    {
      'key': '1',
      'type': 'Wear layer',
      'value': '0.33mm'
    },
    {
      'key': '2',
      'type': 'Finish',
      'value': 'Classic wood, modern oak & rough hand-craped wood '
    },
    {
      'key': '3',
      'type': 'Sizes',
      'value': 'Plank 7.25" X 48"'
    },
    {
      'key': '4',
      'type': 'Thickness',
      'value': '4 mm'
    },
    
  ]
  return (
    <>
    <table className="table table-borderless prodtable mb-md-5 mt-md-4 my-2">
      <tbody>
      {
        Dimensions.map(val => (
        <tr key={val.key} className='border-bottom border-body-secondary'>
          <td scope="col" width="20%" className='fw-bold border-end border-body-secondary '>{val.type}</td>
          <td scope="col" width="%" >{val.value}</td>
        </tr>
        ))
      }
        </tbody>
    </table>
    </>
  )
}

export default ProdTable