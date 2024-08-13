import React from 'react'
import bai5Style from "../styles/bai5.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
export default function Bai5() {
  return (
    <div className={bai5Style.container}>
        <FontAwesomeIcon icon={faQuestion}/>
        <h3>Delete blog post</h3>
        <p className={bai5Style.content}>Are you sure you want to delete this post?</p>
         <div className='flex gap-[20px]'>
            <button className={bai5Style.buttonCancel}>Cancel</button>
            <button className={bai5Style.buttonDelete}>Delete</button>
         </div>
    </div>
  )
}
