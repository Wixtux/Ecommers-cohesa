"use client"
import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
  quantity: number;
}


export const Productquantity = ({quantity}:Props) => {

  const [count, setCount] = React.useState(quantity);

  const onCountChange = (value: number) => {
    if(count + value < 1) return;

    if(count + value > 99999) return;
    setCount(count + value);
  }

  return (
    <div className='flex '>
        <button onClick={() => onCountChange(-1)}>
          <IoRemoveCircleOutline  size={30}/>
        </button>
        <span  className='mx-3 px-5 w-20 bg-gray-100 text-center'>{count}</span>
        <button onClick={()=> onCountChange(+1)}>
          <IoAddCircleOutline  size={30}/>
        </button>
    </div>
  )
}
