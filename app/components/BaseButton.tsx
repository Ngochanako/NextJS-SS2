import React from 'react';
import classNames from "classnames";
import styles from '../styles/button.module.css'
type Props={
    type?:"primary"|"danger";
    children?:React.ReactNode;
}
export default function BaseButton({type,children}:Props) {
  return (
    <button className={classNames(styles.button,{
        [styles.button_primary]:type==="primary",
        [styles.button_danger]:type==="danger",
    })}>
      {children}
    </button>
  )
}
