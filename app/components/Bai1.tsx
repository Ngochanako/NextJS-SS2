import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Bai1() {
  return (
    <div className='bg-gray-200 p-[20px] w-[300px]'>
        <p className='text-blue-300'>Label</p>
        <br />
        <div className='relative'>
            <input type="text" placeholder='Placeholder' className='rounded-[5px] p-[10px]' />
            <FontAwesomeIcon icon={faEye} className='absolute w-[20px] h-[20px] top-[10px] right-[40px]'/>
        </div>
        <br />
        <p className='text-gray-500'>Helper Text</p>
    </div>
  )
}
