import React from 'react'
import BaseCart from './BaseCart'
import BaseButton from './BaseButton'

export default function Bai10() {
  return (
    <div>
      <BaseCart content='Áo phông'
       title='Áo' 
      image='https://i.pinimg.com/474x/56/c6/a4/56c6a49235d75f8947e2fa3c32dca6d5.jpg'
      children={<BaseButton type='primary' children="Thêm vào giỏ hàng"/>}
      />
    </div>
  )
}
