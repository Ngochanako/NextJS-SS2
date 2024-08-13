import React from 'react'
import BaseButton from './BaseButton'

export default function Bai7() {
  return (
    <div className='mt-[50px] flex gap-[50px]'>
      <BaseButton type='primary' children="Primary"/>
      <BaseButton type='danger' children="Danger"/>
    </div>
  )
}
