import React from 'react'
import BaseAlert from './BaseAlert'

export default function Bai9() {
  return (
    <div className='mt-[50px] flex gap-[20px]'>
      <BaseAlert type='success' children="Success"/>
      <BaseAlert type='info' children="Info"/>
      <BaseAlert type='warning' children="Warning"/>
      <BaseAlert type='error' children="Error"/>
    </div>
  )
}
