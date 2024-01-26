import React from 'react'
import './Counter.css'
import { useState } from 'react'
export default function Counter() {
    const [count , setCount] = useState(0);
    const [count1 , setCount1] = useState(0);
    return (
    <div>
        <p>{count}</p>
        <p>{count1}</p>
        <button onClick={()=>setCount(count+25)}>Click</button>
        <button onClick={()=>setCount1(count1+20)}>Click1</button>
    </div>
  )
}
