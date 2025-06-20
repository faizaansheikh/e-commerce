import React from 'react'
import { maincolor } from '../utils'

function Button(props) {
    const { label, click, type, responsive } = props
    return (
   <div style={{backgroundColor:maincolor}} className='w-full  h-[42px] p-4  text-[18px]  rounded-[25px] text-white flex items-center justify-center  cursor-pointer  hover:shadow-xl transition-all duration-300'>{label}</div>
    

    )
}

export default Button