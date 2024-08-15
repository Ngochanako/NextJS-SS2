import React from 'react'
import BaseSelect from './BaseSelect';

export default function Bai11() {
    const options=[
      "HTML","CSS","JavaScript", "HTML1","CSS1","JavaScript1", "HTML2","CSS2","JavaScript2"
    ]
    const onSelect=(option:string)=>{
        console.log(option);
    }
  return (
    <div>
      <BaseSelect options={options} onSelect={onSelect}/>
    </div>
  )
}
