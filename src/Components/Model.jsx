import React from 'react'

const Model = (props) => {
  console.log(props.data);
  return (
    <div className='Model'>
      <p>{props.manufactureYear}</p>
      <p>{props.modelName}</p>
      <p>{props.color}</p>
    </div>
  )
}

export default Model
