import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/navigation.scss'
export default function Bai6() {
  return (
    <div className='nav'>
        <ul className='ul'>
            <li className='li-logo'>logoipsum</li>
            <ul className='list-li'>
                <li className='li-list-item'>Home</li>
                <li className='li-list-item'>Updates</li>
                <li className='li-list-item'>Services</li>
                <li className='li-list-item'>Features</li>
                <li className='li-list-item'>About us</li>
            </ul>
            <li><FontAwesomeIcon icon={faUser}/></li>
        </ul>
      
    </div>
  )
}
