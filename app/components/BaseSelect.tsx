import React, { useState } from 'react'
import styles from '../styles/select.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronDown, faChevronUp, faL } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
type Props={
    options:string[],
    onSelect:(item:string)=>void,
}
export default function BaseSelect({options,onSelect}:Props) {
    const [option,setOption]=useState<string>('');
    const [select,setSelect]=useState<boolean>(false);
    const [optioned,setOptioned]=useState<string>("Select an option");
    const handleOption=(item:string)=>{
        onSelect(item);
        setOption(item);
        setOptioned(item);
        setSelect(false)
    }
    const handleSelect=()=>{
        setSelect(!select);
    }
  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={handleSelect}>
        <p> {optioned}</p>
        <FontAwesomeIcon icon={!select?faChevronDown:faChevronUp}/>
      </div>
      <div className={classNames(styles.option,{
        [styles.hiddenOption]:!select
      })}>
            {options.map((item,index)=>(
                <div key={index} >
                    <div className={styles.itemOption} onClick={()=>handleOption(item)}>
                        <p>{item}</p>
                        <FontAwesomeIcon style={{display:item==option?"":"none"}} icon={faCheck}/>
                    </div>
                    <hr />
                </div>
            ))}
      </div>
    </div>
  )
}
