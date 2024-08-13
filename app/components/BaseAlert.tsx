import React from 'react';
import classNames from 'classnames';
import styles from '../styles/alert.module.css'
type Props={
    type?:"success"|"info"|"warning"|"error",
    children?:React.ReactNode
}
export default function BaseAlert({type,children}:Props) {
  return (
    <button className={classNames(styles.alert,{
        [styles.alert_success]:type==="success",
        [styles.alert_info]:type==="info",
        [styles.alert_warning]:type==="warning",
        [styles.alert_error]:type==="error",
    })}>
      {children}
    </button>
  )
}
