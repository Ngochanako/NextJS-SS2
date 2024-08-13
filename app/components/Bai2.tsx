import { faChevronDown, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Bai2() {
    const [isOpen,setIsOpen]=useState<boolean>(true);
    const openSelect=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
      <h2>Bài 2</h2>
      <div className='p-[20px]'>
        <div className='relative w-[300px]'>
            <input type="text" className='p-[10px] rounded-[10px] border-solid border-[1px] border-gray-300 w-[100%] ' />
            <FontAwesomeIcon icon={faClock} className='absolute left-[10px] top-[15px]'/>
            <FontAwesomeIcon onClick={openSelect} icon={faChevronDown} className='absolute top-[15px] right-[10px]'/>
        </div>
        <div className={`${isOpen?"hidden":""} absolute border-solid border-[1px] border-gray-300 w-[300px] p-[20px] flex flex-col gap-[10px] mt-[10px] rounded-[10px] bg-white shadow-sm`}>
            <div className='flex justify-between'>
                <p>Label</p>
                <input type="checkbox" />
            </div>
            <div className='flex justify-between'>
                <p>Label</p>
                <input type="checkbox" />
            </div>
            <div className='flex justify-between'>
                <p>Label</p>
                <input type="checkbox" />
            </div>
            <div className='flex justify-between'>
                <p>Label</p>
                <input type="checkbox" />
            </div>
            <div className='flex justify-between'>
                <button className='rounded-[5px] border-solid border-[2px] border-orange-400 w-[120px]'>Clear</button>
                <button className='rounded-[5px] border-solid border-[2px] bg-orange-400 w-[120px] text-white'>Apply</button>
            </div>
        </div>
      </div>
    </div>
  )
}
