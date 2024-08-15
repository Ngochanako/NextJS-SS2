import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../styles/date.scss'
import MyDatePicker from '../components/Calenderv';
import { log } from 'console';
import moment from 'moment';

export default function Bai12() {
     const [month,setMonth]=useState<number>(0);
     const [year,setYear]=useState<number>(0);
     const [curMonth,setCurMonth]=useState<number>(0);
     const [curDate,setCurDate]=useState<number>(0);
     const [dayClick,setDayCLick]=useState<any>('');
     useEffect(()=>{
        const monthNow=new Date().getMonth();
        const yearNow=new Date().getFullYear();
        setMonth(monthNow);
        setYear(yearNow);
        setCurMonth(monthNow);
        setCurDate(new Date().getDate());
     },[])
     const handleDate=(date:number,month:number)=>{
        setDayCLick({dateCLick:date,monthCLick:month})
     }
     const prevMonth=()=>{
        if(month>1){
            setMonth(month-1);
        }else{
            setMonth(12);
            setYear(year-1);
        }
     }
     const nextMonth=()=>{
        if(month<12){
        setMonth(month+1);
        }else{
            setMonth(1);
            setYear(year+1);
        }
     }
     const setDate=()=>{
        setMonth(curMonth);
        setDayCLick("");
     }
     const renderDate=()=>{
        let dates=[];
        let datesOfMonth=new Date(year,month+1,0).getDate();
        let firstDayOfMonth=new Date(year,month,1).getDay();
        let lastDayOfMonth=new Date(year,month+1,0).getDay();
        let datesOfLastMonth=new Date(year,month,0).getDate();
        for(let i=firstDayOfMonth-1;i>=0;i--){
            dates.push(
                <li   onClick={()=>handleDate(datesOfLastMonth-i,month-1)}
                    className={`text-gray-400 ${datesOfLastMonth-i==dayClick.dateCLick&&month-1==dayClick.monthCLick?'selectDay':''}`}
                >
                    {datesOfLastMonth-i}
                </li>
            )
        }
        for(let i=1;i<=datesOfMonth;i++){
            dates.push(
                <li  className={`${i==dayClick.dateCLick&&month==dayClick.monthCLick&&i!=curDate?'selectDay':''}${i==curDate&&month==curMonth?'active':'' }`} onClick={()=>handleDate(i,month)}>
                    {i}
                </li>
            )
        }
        if(lastDayOfMonth==7) lastDayOfMonth=0;
        for(let i=1;i<=6-lastDayOfMonth;i++){
            dates.push(
                <li onClick={()=>handleDate(i,month+1)}
                className={`text-gray-400 ${i==dayClick.dateCLick&&month+1==dayClick.monthCLick?'selectDay':''}`}
                >
                    {i}
                </li>
            )
        }
       
      return dates; 
     }
    
  return (
    <div className='container'>
        <header>
            <div onClick={prevMonth} className='border-solid border-[1px] border-gray-300 rounded-[4px] p-[5px] flex items-center justify-center w-[30px]'>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
            <p className='font-bold'>{moment(`${year}-${month}`).format("MMM YYYY")}</p>
            <div onClick={nextMonth} className='border-solid border-[1px] border-gray-300 rounded-[4px] p-[5px] flex items-center justify-center w-[30px]'>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </header>
        <hr className='mt-[20px]'/>
        <main>
            
            <ul>
                <li>Su</li>
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                {renderDate()}
            </ul>
            
            <footer className='flex justify-around w-[100%] px-[50px] mt-[20px]'>
                <button>Cancel</button>
                <button onClick={setDate}> Set Date</button>
            </footer>
        </main>
    </div>
  )
}
