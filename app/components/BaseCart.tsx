import React from 'react'
import '../styles/baseCart.scss'
type Props={
    image:string,
    title:string,
    content:string,
    children:any
}
export default function BaseCart({image,title,content,children}:Props) {
  return (
    <div className='base-cart'>
        <div className='cart-img'>
            <img src={image} alt="" />
        </div>
        <hr />
        <div className='cart-content'>
            <p className='title'>{title}</p>
            <p>{content}</p>
            <div>{children}</div>
        </div>
    </div>
  )
}
