import React from 'react'
import Model from './Model'
const LittleCard = (props) => {
  // console.log(props.color);
  let color = props.color;
  let manufactureYear = props.manufactureYear;
  let modelname = props.modelname;
  return (
    <div className='littleCard'>
      <button>{props.btn}</button>
      <h2>{props.brand}</h2>
      <Model color={color} manufactureYear={manufactureYear} modelName={modelname}/>
    </div>
  )
}

export default LittleCard
