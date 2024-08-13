import React from 'react'

export default function Bai4() {
  return (
    <div className='mt-[50px] p-[50px] border-solid border-[2px] border-gray-300 w-[500px] rounded-[10px] flex flex-col gap-[20px]'>
      <div className='font-bold text-[25px]'>Form Sign in</div>
      <label htmlFor="">Name</label>
      <input type="text" className='rounded-[5px] p-[5px] border-solid border-[1px] border-gray-300' placeholder='Your name'/>
      <label htmlFor="">Email</label>
      <input type="text" className='rounded-[5px] p-[5px] border-solid border-[1px] border-gray-300' placeholder='name@gmail.com'/>
      <label htmlFor="">Phone Number</label>
      <input type="text" className='rounded-[5px] p-[5px] border-solid border-[1px] border-gray-300' placeholder='08409984848'/>
      <label htmlFor="">Address</label>
      <textarea name="" id="" className='rounded-[5px] p-[5px] border-solid border-[1px] border-gray-300'></textarea>
      <label htmlFor="">Skills</label>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex gap-[10px]'>
            <input type="checkbox" />
            <p>HTML</p>
        </div>
        <div className='flex gap-[10px]'>
            <input type="checkbox" />
            <p>HTML</p>
        </div>
        <div className='flex gap-[10px]'>
            <input type="checkbox" />
            <p>HTML</p>
        </div>
        <div className='flex gap-[10px]'>
            <input type="checkbox" />
            <p>HTML</p>
        </div>
      </div>
      <button className='w-[100%] bg-purple-500 text-white rounded-lg p-[10px]'>Sign in</button>
    </div>
  )
}
