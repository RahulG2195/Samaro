import React from 'react'

const Design = () => {
  const Design = [
    {
      'key': '1',
      'type': 'Color',
      'value': 'Natural'
    },
    {
      'key': '2',
      'type': 'Wood species',
      'value': 'Oak'
    },
    {
      'key': '3',
      'type': 'Number of grooves',
      'value': '4 grooves'
    },
    {
      'key': '4',
      'type': 'm²/pack',
      'value': '1.873'
    },
    {
      'key': '1',
      'type': 'Planks/pack',
      'value': '6'
    },
  ]
  return (
    <>
    <table className="table table-borderless Design mb-md-5 mt-md-4 my-2">
      <tbody>
      {
        Design.map(val => (
        <tr key={val.key}>
          <td scope="col" width="50%">{val.type}</td>
          <td scope="col" width="50%">{val.value}</td>
        </tr>
        ))
      }
        </tbody>
    </table>
    </>
  )
}

export default Design