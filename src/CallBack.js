import React from 'react'
import React,{useState,usecallback} from React

export default function CallBack() {

   const handleClick=useCallback()=>{
    console.log('Button clicked. Count: ${count}');
   } ,[count]);
  return (
    <div>CallBack</div>
  )
}
