import React from 'react'
import LittleCard from './LittleCard';

const Card = (props) => {
  let data = props.data;
  return (
    <div className='Card-div'>
     <LittleCard btn = {props.data[0].id} 
      brand = {props.data[0].brand} 
     modelname = {props.data[0].modelName}
     manufactureYear = {props.data[0].manufacturedYear}
     color = {props.data[0].paintColor} />
      
     <LittleCard btn = {props.data[1].id} 
      brand = {props.data[1].brand} 
     modelname = {props.data[1].modelName}
     manufactureYear = {props.data[1].manufacturedYear}
     color = {props.data[1].paintColor} />
 
 <LittleCard btn = {props.data[2].id} 
      brand = {props.data[2].brand} 
     modelname = {props.data[2].modelName}
     manufactureYear = {props.data[2].manufacturedYear}
     color = {props.data[2].paintColor} />  

      <LittleCard btn = {props.data[3].id} 
      brand = {props.data[3].brand} 
     modelname = {props.data[3].modelName}
     manufactureYear = {props.data[3].manufacturedYear}
     color = {props.data[3].paintColor} /> 

    <LittleCard btn = {props.data[4].id} 
      brand = {props.data[4].brand} 
     modelname = {props.data[4].modelName}
     manufactureYear = {props.data[4].manufacturedYear}
     color = {props.data[4].paintColor} />
    </div>
  )
}

export default Card
